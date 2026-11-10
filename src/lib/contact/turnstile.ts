const SITEVERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export type TurnstileVerification =
  | { status: "skipped" }
  | { status: "ok"; hostname: string | null }
  | { status: "failed"; errorCodes: string[] };

/** True once both keys are configured; until then the form works without the challenge. */
export function isTurnstileConfigured(): boolean {
  return Boolean(process.env.TURNSTILE_SECRET_KEY && process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);
}

/**
 * Server-side validation of the token produced by the Turnstile widget.
 * https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
 */
export async function verifyTurnstileToken(token: string | undefined, remoteIp: string): Promise<TurnstileVerification> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret || !process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) {
    return { status: "skipped" };
  }
  if (!token) {
    return { status: "failed", errorCodes: ["missing-input-response"] };
  }

  try {
    const response = await fetch(SITEVERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, response: token, remoteip: remoteIp }),
      signal: AbortSignal.timeout(5000),
    });
    const data = (await response.json()) as { success?: boolean; hostname?: string; "error-codes"?: string[] };

    if (data.success) {
      return { status: "ok", hostname: data.hostname ?? null };
    }
    return { status: "failed", errorCodes: data["error-codes"] ?? ["unknown"] };
  } catch {
    return { status: "failed", errorCodes: ["siteverify-unreachable"] };
  }
}
