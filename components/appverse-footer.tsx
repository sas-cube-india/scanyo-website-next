"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import LazyVideo from "./lazy-video"
import { QrCode } from "lucide-react"
import Link from "next/link"

interface FooterContent {
  tagline: string
  copyright: string
}

const defaultContent: FooterContent = {
  tagline: "Experience QR code scanning and generation like never before. Simple, fast, and reliable.",
  copyright: "© 2025 — Scanyo QR",
}

export function AppverseFooter() {
  const [content, setContent] = useState<FooterContent>(defaultContent)

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem("scanyo-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.footer) {
          setContent(parsed.footer)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <section className="text-white">
      {/* Download the app */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <Card className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10">
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            {/* Left copy */}
            <div>
              <p className="mb-2 text-[11px] tracking-widest text-lime-300">SCAN & GENERATE QR CODES</p>
              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                Scan &amp; generate QR codes from anywhere
              </h3>
              <p className="mt-2 max-w-prose text-sm text-neutral-400">
                Create QR codes for text, URLs, contacts, WiFi, and more. Scan any QR code instantly with our powerful
                scanner.
              </p>
            </div>

            {/* Right mockup */}
            <div className="mx-auto w-full max-w-[320px]">
              <div className="relative rounded-[28px] liquid-glass p-2 shadow-2xl">
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-black">
                  {/* Lazy-loaded video fills the screen */}
                  <LazyVideo
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%202-YFaCK7cEiHWSMRv8XEHaLCoYj2SUAi.mp4"
                    className="absolute inset-0 h-full w-full object-cover"
                    autoplay={true}
                    loop={true}
                    muted={true}
                    playsInline={true}
                    aria-label="Scanyo QR app preview"
                  />
                  {/* On-screen content */}
                  <div className="relative p-3">
                    <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
                    <div className="space-y-1 px-1">
                      <div className="text-5xl font-extrabold text-lime-300">QR Made Easy</div>
                      <p className="text-xs text-white/80">Scan and generate in seconds</p>
                      <div className="mt-3 inline-flex items-center rounded-full bg-black/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-lime-300">
                        Zero Hassle
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 pb-20 md:pb-10">
        <div className="container mx-auto px-4 py-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-1.5">
                <QrCode className="h-6 w-6 text-white" />
                <span className="text-xl font-semibold text-lime-300">Scanyo QR</span>
              </div>
              <p className="max-w-sm text-sm text-neutral-400">{content.tagline}</p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500">
            <p>{content.copyright}</p>
            <Link href="/privacy" className="text-neutral-400 hover:text-lime-300 transition-colors duration-200">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </section>
  )
}
