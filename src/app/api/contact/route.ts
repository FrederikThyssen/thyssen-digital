import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

import { CONTACT_EMAIL } from "@/lib/constants";
import { formatRequestMeta, getRequestMeta } from "@/lib/contact/request-meta";
import { detectSpamSignals } from "@/lib/contact/spam-signals";
import { verifyTurnstileToken } from "@/lib/contact/turnstile";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  company: z.string().trim().max(200).optional().or(z.literal("")),
  projectType: z.string().trim().max(100).optional().or(z.literal("")),
  budget: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(5000),
  // Honeypot: only bots fill this hidden field. "website" is the legacy name, still sent by
  // pages loaded before the rename.
  hp_field: z.string().max(200).optional().or(z.literal("")),
  website: z.string().max(200).optional().or(z.literal("")),
  // Milliseconds between the form being displayed and submitted (client-reported, best effort).
  elapsedMs: z.number().int().nonnegative().optional(),
  // Cloudflare Turnstile token, verified server-side.
  turnstileToken: z.string().max(4096).optional(),
});

// A human needs at least a few seconds to fill the form; bots submit instantly.
const MIN_FILL_TIME_MS = 3000;

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 3;
// Best-effort, per-instance rate limiting. Resets on cold start / redeploy.
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return false;
}

// Bots get the same answer as humans so they cannot tell they were filtered. The reason is
// logged so a wrongly filtered human can be traced in the Vercel logs.
function silentSuccess(reason: string, details: Record<string, unknown>) {
  console.warn(`[contact] message filtré silencieusement (${reason})`, details);
  return NextResponse.json({ ok: true });
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return NextResponse.json({ error: "Configuration serveur manquante." }, { status: 500 });
  }

  const meta = getRequestMeta(request);

  if (isRateLimited(meta.ip)) {
    return NextResponse.json(
      { error: "Trop de tentatives. Réessayez dans quelques minutes." },
      { status: 429 },
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Champs invalides." }, { status: 400 });
  }

  const { name, email, phone, company, projectType, budget, message, hp_field, website, elapsedMs, turnstileToken } =
    parsed.data;

  if (hp_field || website) {
    return silentSuccess("honeypot", { ip: meta.ip, email, userAgent: meta.userAgent });
  }

  if (elapsedMs !== undefined && elapsedMs < MIN_FILL_TIME_MS) {
    return silentSuccess("trop rapide", { ip: meta.ip, email, elapsedMs });
  }

  const turnstile = await verifyTurnstileToken(turnstileToken, meta.ip);
  if (turnstile.status === "failed") {
    console.warn("[contact] vérification Turnstile échouée", { ip: meta.ip, email, errorCodes: turnstile.errorCodes });
    // Not silent: a human whose token expired must be able to retry.
    return NextResponse.json(
      { error: "La vérification anti-robot a échoué. Rechargez la page et réessayez." },
      { status: 400 },
    );
  }

  const signals = detectSpamSignals({ name, email, message, company: company || undefined });
  const isSuspect = signals.length > 0;

  const traceLines = [
    `Temps de remplissage : ${elapsedMs === undefined ? "inconnu" : `${Math.round(elapsedMs / 1000)} s`}`,
    `Turnstile : ${turnstile.status === "ok" ? `validé (${turnstile.hostname ?? "hôte inconnu"})` : "non configuré"}`,
    ...(isSuspect ? ["", "Signaux suspects :", ...signals.map((signal) => `- ${signal.label}`)] : []),
  ];

  const resend = new Resend(resendApiKey);

  const { error } = await resend.emails.send({
    from: "Thyssen Digital <contact@thyssendigital.fr>",
    to: CONTACT_EMAIL,
    replyTo: email,
    subject: `${isSuspect ? "[SUSPECT] " : ""}Nouveau message de contact — ${name}`,
    text: [
      `Nom: ${name}`,
      `Email: ${email}`,
      phone ? `Téléphone: ${phone}` : null,
      company ? `Entreprise: ${company}` : null,
      projectType ? `Type de projet: ${projectType}` : null,
      budget ? `Budget: ${budget}` : null,
      "",
      message,
      "",
      formatRequestMeta(meta, traceLines),
    ]
      .filter((line) => line !== null)
      .join("\n"),
  });

  if (error) {
    console.error("[contact] échec d'envoi Resend", { ip: meta.ip, email, error });
    return NextResponse.json({ error: "Échec de l'envoi du message." }, { status: 502 });
  }

  console.info("[contact] message transmis", { ip: meta.ip, email, suspect: isSuspect });

  return NextResponse.json({ ok: true });
}
