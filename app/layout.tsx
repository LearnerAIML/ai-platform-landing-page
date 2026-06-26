import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AstraIQ | Premium AI SaaS for modern teams",
    template: "%s | AstraIQ",
  },
  description:
    "A premium AI SaaS landing page with interactive pricing, modern design, and conversion-focused sections.",
  keywords: [
    "AI SaaS",
    "landing page",
    "Next.js 15",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "AstraIQ" }],
  creator: "AstraIQ",
  openGraph: {
    title: "AstraIQ | Premium AI SaaS for modern teams",
    description:
      "A premium AI SaaS landing page with interactive pricing and conversion-ready sections.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AstraIQ | Premium AI SaaS for modern teams",
    description:
      "A premium AI SaaS landing page with interactive pricing and conversion-ready sections.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        {children}
      </body>
    </html>
  );
}
