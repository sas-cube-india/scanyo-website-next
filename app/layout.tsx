import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import Script from "next/script"
import Plasma from "@/components/plasma"

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Scanyo QR | Fast QR Code Scanner & Generator App",
  description:
    "Scan and generate QR codes instantly with Scanyo QR. Create QR codes for text, URLs, contacts, WiFi, events and more. Fast, secure, and ad-free Pro version available.",
  keywords:
    "QR code scanner, QR generator, barcode scanner, QR reader, mobile app, text to QR, URL QR code, contact QR, WiFi QR",
  authors: [{ name: "Scanyo QR Team" }],
  creator: "Scanyo QR",
  publisher: "Scanyo QR",
  robots: "index, follow",
  openGraph: {
    title: "Scanyo QR | Fast QR Code Scanner & Generator App",
    description:
      "Scan and generate QR codes instantly with Scanyo QR. Create QR codes for text, URLs, contacts, WiFi, events and more.",
    url: "https://scanyo-qr.com",
    siteName: "Scanyo QR",
    type: "website",
    images: [
      {
        url: "/icons/favicon-512.png",
        width: 512,
        height: 512,
        alt: "Scanyo QR Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scanyo QR | Fast QR Code Scanner & Generator App",
    description:
      "Scan and generate QR codes instantly with Scanyo QR. Create QR codes for text, URLs, contacts, WiFi, events and more.",
    images: ["/icons/favicon-512.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/favicon-192.png", sizes: "192x192", type: "image/png" }],
  },
  manifest: "/manifest.json",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        {/* Font Preload */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          fetchPriority="high"
        />

        {/* Google Tag Manager (deferred) */}
        <Script id="gtm-script" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NFLHXXGK');`}
        </Script>

        {/* Google Analytics (deferred) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-W6LV22900R" strategy="lazyOnload" />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W6LV22900R');
          `}
        </Script>
      </head>
      <body>
        <div className="fixed inset-0 z-0 bg-black">
          <Plasma color="#8b5cf6" speed={0.8} direction="forward" scale={1.5} opacity={0.4} mouseInteractive={true} />
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
