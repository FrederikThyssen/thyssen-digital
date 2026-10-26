import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  /** Heading level: h2 for page sections (default), h1 when the heading is the page title. */
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          <span aria-hidden="true" className="h-px w-6 bg-primary" />
          {eyebrow}
        </p>
      ) : null}
      <Heading
        className={cn(
          "font-display font-semibold leading-[1.1] tracking-[-0.02em] text-ink",
          Heading === "h1" ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl sm:text-4xl lg:text-[2.75rem]",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-lg leading-8 text-muted-foreground",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
