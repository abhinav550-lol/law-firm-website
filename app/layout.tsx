import type { Metadata } from "next";
import Footer from "@/app/parts/layout/Footer";
import Navbar from "@/app/parts/layout/Navbar";
import { inter } from "@/public/fonts/inter/inter";
import { cormorant } from "@/public/fonts/cormorant/cormorant";

import "./globals.css";

export const metadata: Metadata = {
  title: "Advocacy | Advocates & Legal Counsel",
  description:
    "Advocacy is a professional legal practice providing information and counsel across civil, criminal, corporate, property, family, constitutional, labour, and consumer law.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
