import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex h-fit items-center justify-center gap-2 rounded-xl border text-center text-sm sm:whitespace-nowrap font-semibold transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-standard focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "border-primary bg-primary px-5 text-primary-foreground shadow-glow hover:-translate-y-px hover:border-primary-hover hover:bg-primary-hover active:translate-y-0 motion-reduce:transform-none",
        secondary:
          "border-border-strong bg-surface px-5 text-ink shadow-soft hover:border-primary/40 hover:bg-surface-hover",
        ghost:
          "border-transparent bg-transparent px-4 text-muted-foreground hover:bg-surface-subtle hover:text-ink",
        inverse:
          "border-white bg-white px-5 text-ink hover:bg-primary-soft",
      },
      size: {
        sm: "min-h-10 px-4 text-sm",
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
        <span className="inline-flex">{leadingIcon}</span>
      ) : null}
      <span>{children}</span>
      {trailingIcon ? (
        <span className="inline-flex transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none">
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
