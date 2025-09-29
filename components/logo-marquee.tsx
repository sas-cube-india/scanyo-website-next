"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { QrCode, Type, Link, Mail, User, Wifi, Calendar, Smartphone } from "lucide-react"

export function LogoMarquee() {
  const [pausedRow, setPausedRow] = useState<string | null>(null)

  const logos = [
    { name: "QR Scanner", icon: QrCode, color: "text-green-400" },
    { name: "Text", icon: Type, color: "text-blue-400" },
    { name: "URL", icon: Link, color: "text-purple-400" },
    { name: "Email", icon: Mail, color: "text-red-400" },
    { name: "Contact", icon: User, color: "text-yellow-400" },
    { name: "WiFi", icon: Wifi, color: "text-cyan-400" },
    { name: "Event", icon: Calendar, color: "text-orange-400" },
    { name: "Phone", icon: Smartphone, color: "text-pink-400" },
  ]

  const secondRowLogos = [
    { name: "QR Code", icon: QrCode, color: "text-lime-400" },
    { name: "Text QR", icon: Type, color: "text-indigo-400" },
    { name: "Link QR", icon: Link, color: "text-teal-400" },
    { name: "Email QR", icon: Mail, color: "text-rose-400" },
    { name: "Contact QR", icon: User, color: "text-amber-400" },
    { name: "WiFi QR", icon: Wifi, color: "text-sky-400" },
    { name: "Event QR", icon: Calendar, color: "text-emerald-400" },
    { name: "Mobile", icon: Smartphone, color: "text-violet-400" },
  ]

  const LogoCard = ({ logo, rowId }: { logo: any; rowId: string }) => {
    const IconComponent = logo.icon
    return (
      <div
        className="flex-shrink-0 mx-3"
        onMouseEnter={() => setPausedRow(rowId)}
        onMouseLeave={() => setPausedRow(null)}
      >
        <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center">
          <IconComponent className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${logo.color}`} />
        </div>
      </div>
    )
  }

  return (
    <section className="text-white py-16 sm:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center justify-between mb-12 sm:flex-row sm:items-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl text-center sm:text-left">
            Powerful <span className="text-lime-300">QR features</span>
            <br />
            at your fingertips
          </h2>
          <Button variant="outline" className="mt-4 sm:mt-0 liquid-glass hover:liquid-glass-enhanced bg-transparent">
            Learn More
          </Button>
        </div>

        {/* Logo Marquee */}
        <div className="relative">
          {/* First Row - Scrolling Right */}
          <div className="flex overflow-hidden mb-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className={`flex animate-scroll-right whitespace-nowrap ${pausedRow === "first" ? "animation-play-state-paused" : ""}`}
              style={{
                animationPlayState: pausedRow === "first" ? "paused" : "running",
                width: "max-content",
              }}
            >
              {/* Triple the logos for seamless loop */}
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <LogoCard key={`first-${index}`} logo={logo} rowId="first" />
              ))}
            </div>
          </div>

          {/* Second Row - Scrolling Left */}
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className={`flex animate-scroll-left whitespace-nowrap ${pausedRow === "second" ? "animation-play-state-paused" : ""}`}
              style={{
                animationPlayState: pausedRow === "second" ? "paused" : "running",
                width: "max-content",
              }}
            >
              {/* Triple the logos for seamless loop */}
              {[...secondRowLogos, ...secondRowLogos, ...secondRowLogos].map((logo, index) => (
                <LogoCard key={`second-${index}`} logo={logo} rowId="second" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
