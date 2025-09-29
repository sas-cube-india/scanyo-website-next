"use client"

import { useEffect, useState } from "react"
import { Star, Zap, Shield, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FeaturesContent {
  title: string
  subtitle: string
}

const defaultContent: FeaturesContent = {
  title: "Why choose SCANYO QR Scanner?",
  subtitle: "The most advanced QR code solution",
}

export function Features() {
  const [content, setContent] = useState<FeaturesContent>(defaultContent)

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem("skitbit-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.features) {
          setContent(parsed.features)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <section id="features" className="container mx-auto px-4 py-16 sm:py-20">
      <h2 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        {content.title}
      </h2>

      <div className="mb-8 flex justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-lime-400/20 to-green-400/20 border border-lime-400/30">
          <Star className="h-4 w-4 text-lime-400 fill-lime-400" />
          <span className="text-sm font-medium text-lime-300">No ads on Pro</span>
          <Star className="h-4 w-4 text-lime-400 fill-lime-400" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="hidden md:block liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-5 w-5 text-lime-400" />
              <p className="text-[11px] tracking-widest text-neutral-400">LIGHTNING FAST</p>
            </div>
            <CardTitle className="mt-1 text-xl text-white">
              Instant QR code scanning with advanced recognition technology
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                <Shield className="h-5 w-5 text-lime-400" />
                <div>
                  <p className="text-sm font-medium text-white">Secure & Private</p>
                  <p className="text-xs text-gray-400">No data stored on servers</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                <Clock className="h-5 w-5 text-lime-400" />
                <div>
                  <p className="text-sm font-medium text-white">Instant Results</p>
                  <p className="text-xs text-gray-400">Scan in milliseconds</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-neutral-400">USER RATINGS</p>
            <CardTitle className="mt-1 text-xl text-white">
              Trusted by millions of users worldwide for reliable QR code scanning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6 flex items-end gap-4">
              <div className="text-5xl font-bold text-lime-300">4.8</div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-lime-300 text-lime-300" />
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-white/5">
                <p className="text-sm text-white mb-1">"Best QR scanner I've used!"</p>
                <p className="text-xs text-gray-400">⭐⭐⭐⭐⭐ Sarah M.</p>
              </div>
              <div className="p-3 rounded-lg bg-white/5">
                <p className="text-sm text-white mb-1">"Fast, reliable, and easy to use"</p>
                <p className="text-xs text-gray-400">⭐⭐⭐⭐⭐ John D.</p>
              </div>
              <div className="p-3 rounded-lg bg-white/5">
                <p className="text-sm text-white mb-1">"Perfect for business use"</p>
                <p className="text-xs text-gray-400">⭐⭐⭐⭐⭐ Mike R.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
