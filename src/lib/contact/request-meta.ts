export type RequestMeta = {
  ip: string;
  city: string | null;
  region: string | null;
  country: string | null;
  userAgent: string | null;
  referer: string | null;
  receivedAt: Date;
};

function header(request: Request, name: string): string | null {
  const value = request.headers.get(name)?.trim();
  return value ? value : null;
}

// Vercel percent-encodes geo headers (e.g. "S%C3%A3o%20Paulo").
function decodeHeader(value: string | null): string | null {
  if (!value) return null;
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

/** First hop of x-forwarded-for. On Vercel this header is set by the platform and cannot be spoofed. */
export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || "unknown";
}

export function getRequestMeta(request: Request): RequestMeta {
  return {
    ip: getClientIp(request),
    city: decodeHeader(header(request, "x-vercel-ip-city")),
    region: decodeHeader(header(request, "x-vercel-ip-country-region")),
    country: header(request, "x-vercel-ip-country"),
    userAgent: header(request, "user-agent"),
    referer: header(request, "referer"),
    receivedAt: new Date(),
  };
}

const parisFormatter = new Intl.DateTimeFormat("fr-FR", {
  timeZone: "Europe/Paris",
  dateStyle: "short",
  timeStyle: "medium",
});

/** Plain-text block appended at the bottom of every contact email. */
export function formatRequestMeta(meta: RequestMeta, extra: readonly string[] = []): string {
  const location = [meta.city, meta.region, meta.country].filter(Boolean).join(", ") || "inconnue";

  return [
    "----------------------------------------",
    "Informations techniques (lutte anti-spam)",
    `IP : ${meta.ip}`,
    `Localisation approximative : ${location}`,
    `User-agent : ${meta.userAgent ?? "inconnu"}`,
    `Referer : ${meta.referer ?? "inconnu"}`,
    `Reçu le : ${parisFormatter.format(meta.receivedAt)} (Paris) — ${meta.receivedAt.toISOString()}`,
    ...extra,
  ].join("\n");
}
