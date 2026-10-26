import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement> & {
  /** "white" (default) or "soft" (light blue-grey band) to alternate sections. */
  tone?: "white" | "soft";
};

/** Page section with the site's vertical rhythm and background bands. */
export function Section({ className, tone = "white", ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "relative py-20 sm:py-24 lg:py-28",
        tone === "soft" ? "border-y border-border bg-background-secondary" : "bg-background",
        className,
      )}
      {...props}
    />
  );
}
