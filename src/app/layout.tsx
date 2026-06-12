import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Jubiliants Software Solutions | Custom Software, Mobile Apps & AI Solutions Since 2015",
  description: "Jubiliants Software Solutions delivers custom web applications, mobile applications, Agentic AI solutions, and AI-powered automation services. Serving 200+ customers with 300+ successful projects since 2015.",
  keywords: "custom software development, mobile app development, Agentic AI, digital transformation, AI automation, Hyderabad software company",
  authors: [{ name: "Jubiliants Software Solutions" }],
  openGraph: {
    title: "Jubiliants Software Solutions | Custom Software, Mobile Apps & AI Solutions",
    description: "Transforming businesses through custom software & AI innovation since 2015. 200+ customers, 300+ projects.",
    type: "website",
    locale: "en_IN",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
