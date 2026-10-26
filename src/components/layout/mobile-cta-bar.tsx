import { FileText, Phone } from "lucide-react";
import Link from "next/link";

import { business } from "@/content/site";

const linkClassName =
  "inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-colors duration-200 ease-standard focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

// Always-visible call / quote actions on phones (hidden from lg, where the header shows them).
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 px-3 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2 shadow-[0_-10px_30px_-16px_rgb(16_24_40_/_0.35)] backdrop-blur-lg print:hidden lg:hidden">
      <nav aria-label="Actions rapides" className="mx-auto flex max-w-md gap-2">
        <a
          className={`${linkClassName} border border-border-strong bg-white text-ink hover:bg-surface-subtle`}
          href={business.phoneHref}
        >
          <Phone aria-hidden="true" className="size-4 text-primary" />
          Appeler
        </a>
        <Link
          className={`${linkClassName} bg-primary text-white hover:bg-primary-hover`}
          href="/#contact"
        >
          <FileText aria-hidden="true" className="size-4" />
          Devis gratuit
        </Link>
      </nav>
    </div>
  );
}
