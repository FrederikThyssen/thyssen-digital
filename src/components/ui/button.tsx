import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex h-fit items-center justify-center gap-2 rounded-md border text-sm font-medium transition-colors duration-200 ease-standard focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border-accent bg-accent px-5 text-primary-foreground hover:border-accent-strong hover:bg-accent-strong",
        secondary:
          "border-border bg-transparent px-5 text-foreground hover:border-border-strong hover:bg-surface",
        ghost:
          "border-transparent bg-transparent px-4 text-muted-foreground hover:text-foreground",
      },
      size: {
        sm: "min-h-9 px-3 text-xs",
        md: "min-h-11",
        lg: "min-h-12 px-6 text-[0.9375rem]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type BaseButtonProps = VariantProps<typeof buttonVariants> & {
  children: ReactNode;
  className?: string;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
};

type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLink = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    disabled?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function isLinkButton(props: ButtonProps): props is ButtonAsLink {
  return typeof props.href === "string";
}

export function Button(props: ButtonProps) {
  const { className, variant, size, disabled, children, leadingIcon, trailingIcon } =
    props;
  const classes = cn(buttonVariants({ variant, size }), className);
  const content = (
    <>
      {leadingIcon ? <span className="inline-flex">{leadingIcon}</span> : null}
      <span>{children}</span>
      {trailingIcon ? <span className="inline-flex">{trailingIcon}</span> : null}
    </>
  );

  if (isLinkButton(props)) {
    const anchorProps = { ...props };
    delete anchorProps.className;
    delete anchorProps.variant;
    delete anchorProps.size;
    delete anchorProps.disabled;
    delete anchorProps.children;
    delete anchorProps.leadingIcon;
    delete anchorProps.trailingIcon;

    return (
      <a
        aria-disabled={disabled}
        className={cn(classes, disabled && "pointer-events-none opacity-50")}
        {...anchorProps}
      >
        {content}
      </a>
    );
  }

  const buttonProps = { ...props };
  delete buttonProps.className;
  delete buttonProps.variant;
  delete buttonProps.size;
  delete buttonProps.children;
  delete buttonProps.leadingIcon;
  delete buttonProps.trailingIcon;

  return (
    <button className={classes} disabled={disabled} {...buttonProps}>
      {content}
    </button>
  );
}
