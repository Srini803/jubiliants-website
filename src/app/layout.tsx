import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://jubiliants.com"),
  title: { default: "Jubiliants Software Solutions | Custom Software & AI Development", template: "%s | Jubiliants" },
  description: "Jubiliants Software Solutions builds custom software, enterprise applications, mobile apps, and AI solutions for businesses across industries. 300+ projects delivered since 2015.",
  keywords: "custom software development, enterprise software, mobile app development, AI solutions, digital transformation, Hyderabad software company, ERP development, SaaS development",
  authors: [{ name: "Jubiliants Software Solutions", url: "https://jubiliants.com" }],
  openGraph: {
    type: "website", locale: "en_IN", siteName: "Jubiliants Software Solutions",
    title: "Jubiliants Software Solutions | Custom Software & AI Development",
    description: "Building intelligent software solutions that drive business growth. 200+ customers, 300+ projects since 2015.",
  },
  twitter: { card: "summary_large_image", title: "Jubiliants Software Solutions", description: "Custom software, enterprise apps & AI solutions since 2015." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Poppins for headings, Inter for body */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0F172A" />
      </head>
      <body>
        <Navbar />
        <main style={{ paddingTop: "92px" }}>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
