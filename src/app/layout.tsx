import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";

import { defaultMetadata } from "@/lib/metadata";

import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

// Display face for headings: self-hosted at build time by next/font (no request to Google).
const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${bricolage.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a
          className="sr-only z-[60] rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          href="#contenu"
        >
          Aller au contenu
        </a>
        {children}
      </body>
    </html>
  );
}
