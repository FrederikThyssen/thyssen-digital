import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex h-fit items-center justify-center gap-2 overflow-hidden rounded-md border text-sm font-semibold transition-colors duration-200 before:pointer-events-none before:absolute before:inset-y-0 before:left-[-45%] before:w-1/3 before:skew-x-[-18deg] before:bg-white/12 before:opacity-0 before:transition-all before:duration-500 hover:before:left-[115%] hover:before:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan disabled:pointer-events-none disabled:opacity-50 motion-reduce:before:hidden",
  {
    variants: {
      variant: {
        primary:
          "border-primary bg-primary px-5 text-primary-foreground shadow-glow hover:bg-accent-cyan hover:text-background active:bg-primary",
        secondary:
          "border-border bg-surface px-5 text-foreground hover:bg-surface-hover active:bg-surface",
        ghost:
          "border-transparent bg-transparent px-4 text-muted-foreground hover:bg-surface hover:text-foreground active:bg-surface-hover",
      },
      size: {
        sm: "min-h-9 px-3 text-xs",
        md: "min-h-11",
        lg: "min-h-12 px-6 text-base",
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
      {leadingIcon ? (
        <span className="relative z-10 inline-flex transition-transform duration-200 group-hover:-translate-x-0.5 motion-reduce:transform-none">
          {leadingIcon}
        </span>
      ) : null}
      <span className="relative z-10">{children}</span>
      {trailingIcon ? (
        <span className="relative z-10 inline-flex transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none">
          {trailingIcon}
        </span>
      ) : null}
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
