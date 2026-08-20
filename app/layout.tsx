import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { inter } from "@/public/fonts/inter/inter";
import { cormorant } from "@/public/fonts/cormorant/cormorant";

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
  title: "Advocacy | Advocates & Legal Counsel",
  description:
    "Advocacy is a professional legal practice providing information and counsel across civil, criminal, corporate, property, family, constitutional, labour, and consumer law.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
