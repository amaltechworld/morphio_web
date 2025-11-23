import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Morphio Web | Modern Web Development for Small Businesses",
  description: "We create beautiful, high-performance Next.js websites for small shops and local businesses. Transparent pricing, real-time progress tracking, and affordable packages.",
  keywords: [
    "web development",
    "Next.js",
    "small business website",
    "affordable website",
    "React development",
    "web design",
  ],
  authors: [{ name: "Morphio Web" }],
  openGraph: {
    title: "Morphio Web - Modern Web Development for Small Businesses",
    description: "Beautiful Next.js websites delivered in days, not months",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
