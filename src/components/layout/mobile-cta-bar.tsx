import { FileText, Phone } from "lucide-react";
import Link from "next/link";

import { business } from "@/content/site";

const linkClassName =
  "inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-colors duration-200 ease-standard focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cyan";

// Always-visible call / quote actions on phones (hidden from lg, where the header shows them).
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-background/92 px-3 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2 shadow-[0_-12px_40px_rgb(0_0_0_/_0.45)] backdrop-blur-xl print:hidden lg:hidden">
      <nav aria-label="Actions rapides" className="mx-auto flex max-w-md gap-2">
        <a
          className={`${linkClassName} border border-white/14 bg-white/[0.05] text-foreground hover:bg-white/[0.09]`}
          href={business.phoneHref}
        >
          <Phone aria-hidden="true" className="size-4 text-accent-cyan" />
          Appeler
        </a>
        <Link
          className={`${linkClassName} bg-[#1350ff] text-white hover:bg-[#2563ff]`}
          href="/#contact"
        >
          <FileText aria-hidden="true" className="size-4" />
          Devis gratuit
        </Link>
      </nav>
    </div>
  );
}
