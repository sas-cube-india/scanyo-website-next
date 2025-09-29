import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { LogoMarquee } from "@/components/logo-marquee"
import { AppverseFooter } from "@/components/appverse-footer"
import Script from "next/script"
import type { Metadata } from "next"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Scanyo QR | Fast QR Code Scanner & Generator App - Download Now",
  description:
    "Download Scanyo QR - the fastest and most reliable QR code scanner and generator app. Scan QR codes instantly, generate custom QR codes for text, URLs, contacts, WiFi, and events. Available on Google Play with ad-free Pro version.",
  keywords:
    "QR code scanner app, QR generator mobile, barcode reader, QR code creator, mobile scanner, text QR code, URL QR generator, contact QR, WiFi QR code, event QR",
  openGraph: {
    title: "Scanyo QR | Fast QR Code Scanner & Generator App - Download Now",
    description:
      "Download Scanyo QR - the fastest and most reliable QR code scanner and generator app. Available on Google Play with ad-free Pro version.",
  },
  twitter: {
    title: "Scanyo QR | Fast QR Code Scanner & Generator App - Download Now",
    description:
      "Download Scanyo QR - the fastest and most reliable QR code scanner and generator app. Available on Google Play with ad-free Pro version.",
  },
}

export default function Page() {
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://scanyo-qr.com/",
    name: "Scanyo QR | QR Code Scanner & Generator",
    description:
      "Scan and generate QR codes instantly. Create QR codes for text, URLs, contacts, WiFi, and more with our simple and reliable app.",
    url: "https://scanyo-qr.com/",
    mainEntity: {
      "@type": "Organization",
      name: "Scanyo QR",
      url: "https://scanyo-qr.com",
    },
  }

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <Hero />
        <Features />
        <LogoMarquee />
        <AppverseFooter />
      </main>

      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}
