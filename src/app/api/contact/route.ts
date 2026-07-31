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
});

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return NextResponse.json({ error: "Configuration serveur manquante." }, { status: 500 });
  }

  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Champs invalides." }, { status: 400 });
  }

  const { name, email, company, budget, message } = parsed.data;

  const resend = new Resend(resendApiKey);

  const { error } = await resend.emails.send({
    from: "Thyssen Digital <onboarding@resend.dev>",
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
