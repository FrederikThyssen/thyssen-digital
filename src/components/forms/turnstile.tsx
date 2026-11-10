"use client";

import Script from "next/script";
import { useCallback, useEffect, useImperativeHandle, useRef, type Ref } from "react";

type TurnstileRenderOptions = {
  sitekey: string;
  callback: (token: string) => void;
  "error-callback"?: () => void;
  "expired-callback"?: () => void;
  appearance?: "always" | "execute" | "interaction-only";
  size?: "normal" | "flexible" | "compact";
  theme?: "light" | "dark" | "auto";
  language?: string;
};

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: TurnstileRenderOptions) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

export const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

export type TurnstileHandle = { reset: () => void };

/**
 * Cloudflare Turnstile widget in "interaction-only" mode: invisible for most visitors,
 * shows a checkbox only when Cloudflare needs an interaction. Renders nothing without a site key.
 */
export function Turnstile({
  onError,
  onExpire,
  onToken,
  ref,
}: {
  onError?: () => void;
  onExpire?: () => void;
  onToken: (token: string) => void;
  ref?: Ref<TurnstileHandle>;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  const render = useCallback(() => {
    const container = containerRef.current;
    if (!container || !window.turnstile || widgetIdRef.current || !TURNSTILE_SITE_KEY) return;

    widgetIdRef.current = window.turnstile.render(container, {
      sitekey: TURNSTILE_SITE_KEY,
      callback: onToken,
      "error-callback": onError,
      "expired-callback": onExpire,
      appearance: "interaction-only",
      size: "flexible",
      theme: "light",
      language: "fr",
    });
  }, [onError, onExpire, onToken]);

  // The script may already be loaded (client-side navigation): render immediately in that case.
  useEffect(() => {
    render();
    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [render]);

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (widgetIdRef.current && window.turnstile) window.turnstile.reset(widgetIdRef.current);
    },
  }));

  if (!TURNSTILE_SITE_KEY) return null;

  return (
    <>
      <Script
        onLoad={render}
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="lazyOnload"
      />
      <div ref={containerRef} />
    </>
  );
}
