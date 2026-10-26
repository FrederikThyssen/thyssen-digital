const NBSP = " ";
const NARROW_NBSP = " ";

// Strings that must never be altered: links, anchors, phone/email hrefs and asset paths.
const RAW_STRING_PATTERN = /^(https?:|\/|#|tel:|mailto:)/;

/**
 * Applies French typography rules to a plain sentence:
 * non-breaking spaces before ; ! ? : » and after «, after numbers (prices, phone, durations),
 * and typographic apostrophes.
 */
export function fr(text: string): string {
  return text
    .replace(/'/g, "’")
    .replace(/ ([;!?])/g, `${NARROW_NBSP}$1`)
    .replace(/ ([:»])/g, `${NBSP}$1`)
    .replace(/« /g, `«${NBSP}`)
    .replace(/(\d) (?=\S)/g, `$1${NBSP}`);
}

/** Recursively applies {@link fr} to every human-readable string of a content object. */
export function withFrenchTypography<T>(value: T): T {
  if (typeof value === "string") {
    return (RAW_STRING_PATTERN.test(value) ? value : fr(value)) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item: unknown) => withFrenchTypography(item)) as T;
  }

  if (value !== null && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, withFrenchTypography(item)]),
    ) as T;
  }

  return value;
}

/** Formats an amount in euros, French style: "1 490 €". */
export function formatEuro(amount: number): string {
  return `${amount.toLocaleString("fr-FR")}${NBSP}€`;
}
