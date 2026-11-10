import disposableDomains from "disposable-email-domains/index.json";
import disposableWildcards from "disposable-email-domains/wildcard.json";

// Exact-match disposable providers (mailinator.com, yopmail.com, ...). Built once per instance.
const disposableSet = new Set<string>(disposableDomains);
// Wildcard providers: "my.id" matches any sub-domain such as "xyz.my.id".
const disposableSuffixes: readonly string[] = disposableWildcards;

/** Returns true when the email's domain belongs to a known disposable / throwaway provider. */
export function isDisposableEmail(email: string): boolean {
  const domain = email.split("@").pop()?.toLowerCase().trim();
  if (!domain) return false;
  if (disposableSet.has(domain)) return true;
  return disposableSuffixes.some((suffix) => domain === suffix || domain.endsWith(`.${suffix}`));
}

// URLs with a scheme, "www." hosts, or HTML anchors. Bare domains (acme.fr) are deliberately
// not matched: they appear in legitimate messages far more often than in spam.
const LINK_PATTERN = /(https?:\/\/|www\.|<a\s)/i;

/** Returns true when the text contains something that looks like a link. */
export function containsLink(text: string): boolean {
  return LINK_PATTERN.test(text);
}

export type SpamSignal = { code: "link" | "disposable-email"; label: string };

/** Non-blocking signals: the message is still delivered, but flagged [SUSPECT] in the subject. */
export function detectSpamSignals(input: { email: string; message: string; name: string; company?: string }): SpamSignal[] {
  const signals: SpamSignal[] = [];
  const textToScan = [input.name, input.company ?? "", input.message].join("\n");

  if (containsLink(textToScan)) {
    signals.push({ code: "link", label: "Le message contient un lien." });
  }
  if (isDisposableEmail(input.email)) {
    signals.push({ code: "disposable-email", label: "L'adresse email appartient à un fournisseur jetable." });
  }

  return signals;
}
