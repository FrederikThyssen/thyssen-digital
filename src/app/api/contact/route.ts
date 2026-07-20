import { NextResponse } from "next/server";

import { CONTACT_EMAIL } from "@/lib/constants";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  budget?: unknown;
  message?: unknown;
};

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "La requête envoyée est invalide." },
      { status: 400 },
    );
  }

  const name = normalize(payload.name);
  const email = normalize(payload.email);
  const company = normalize(payload.company);
  const budget = normalize(payload.budget);
  const message = normalize(payload.message);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Le nom, l'email et le message sont obligatoires." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "L'adresse email n'est pas valide." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? CONTACT_EMAIL;
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Thyssen Digital <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Le formulaire est prêt, mais la clé d'envoi n'est pas encore configurée.",
      },
      { status: 503 },
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: `Nouveau message Thyssen Digital - ${name}`,
      text: [
        `Nom: ${name}`,
        `Email: ${email}`,
        company ? `Entreprise: ${company}` : null,
        budget ? `Budget: ${budget}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <p><strong>Nom:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${company ? `<p><strong>Entreprise:</strong> ${escapeHtml(company)}</p>` : ""}
        ${budget ? `<p><strong>Budget:</strong> ${escapeHtml(budget)}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
      `,
    }),
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Le message n'a pas pu être envoyé. Réessayez plus tard." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
