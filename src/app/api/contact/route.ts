import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

import { CONTACT_EMAIL } from "@/lib/constants";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  company: z.string().trim().max(200).optional().or(z.literal("")),
  budget: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(5000),
  // Honeypot: only bots fill this hidden field.
  website: z.string().max(200).optional().or(z.literal("")),
});

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
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

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || "unknown";
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return NextResponse.json({ error: "Configuration serveur manquante." }, { status: 500 });
  }

  const clientIp = getClientIp(request);

  if (isRateLimited(clientIp)) {
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

  const { name, email, company, budget, message, website } = parsed.data;

  if (website) {
    // Silently report success to the bot without sending an email.
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(resendApiKey);

  const { error } = await resend.emails.send({
    from: "Thyssen Digital <contact@thyssendigital.fr>",
    to: CONTACT_EMAIL,
    replyTo: email,
    subject: `Nouveau message de contact — ${name}`,
    text: [
      `Nom: ${name}`,
      `Email: ${email}`,
      company ? `Entreprise: ${company}` : null,
      budget ? `Budget: ${budget}` : null,
      "",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n"),
  });

  if (error) {
    return NextResponse.json({ error: "Échec de l'envoi du message." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
