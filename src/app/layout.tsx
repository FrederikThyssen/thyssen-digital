import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { OrganizationJsonLd } from "@/components/seo/organization-json-ld";
import { defaultMetadata } from "@/lib/metadata";

import "./globals.css";

const inter = Inter({
  variable: "--font-body",
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
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <OrganizationJsonLd />
        <a
          className="sr-only z-50 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          href="#contenu"
        >
          Aller au contenu
        </a>
        {children}
      </body>
    </html>
  );
}
