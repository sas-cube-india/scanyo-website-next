"use client"

import Link from "next/link"
import { QrCode } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex h-14 items-center justify-center px-6 liquid-glass-header rounded-full">
          <Link href="/" className="flex items-center gap-1.5">
            <QrCode className="h-5 w-5 text-white" />
            <span className="font-semibold tracking-wide text-white">Scanyo QR</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
