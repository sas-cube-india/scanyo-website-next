import Image from "next/image"
import { QrCode, Type, Link, Mail, User, Wifi, Calendar, History } from "lucide-react"

export function Hero() {
  const downloadButton = (
    <div className="flex flex-col items-center gap-4">
      <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
        <Image
          src="/images/google-play-button.png"
          alt="Get it on Google Play"
          width={200}
          height={60}
          className="hover:scale-105 transition-transform duration-200"
        />
      </a>
      <p className="text-sm text-gray-400">Download now and start scanning instantly</p>
    </div>
  )

  const qrServices = [
    { icon: QrCode, name: "QR Scanner", desc: "Instant scanning" },
    { icon: Type, name: "Text QR", desc: "Plain text codes" },
    { icon: Link, name: "URL Links", desc: "Website links" },
    { icon: Mail, name: "Email", desc: "Contact info" },
    { icon: User, name: "Contact", desc: "vCard format" },
    { icon: Wifi, name: "WiFi", desc: "Network access" },
    { icon: Calendar, name: "Events", desc: "Calendar entries" },
    { icon: History, name: "History", desc: "Scan records" },
  ]

  return (
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          <div className="mb-5 flex items-center gap-2">
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <QrCode className="h-5 w-5 text-lime-400" />
              <span className="text-sm font-medium text-white">SCANYO QR</span>
            </div>
          </div>

          <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block my-[15px]">Point. Scan Done.</span>
            <span className="block drop-shadow-[0_0_20px_rgba(132,204,22,0.35)] text-[rgba(96,190,106,1)]">
              Fast & Simple QR Scanner
            </span>
          </h1>

          <p className="mt-6 text-center text-lg text-gray-300 max-w-2xl">
            The most powerful QR code scanner and generator app. Scan any QR code instantly, generate custom codes, and
            manage your scan history with ease.
          </p>

          <div className="mt-8">{downloadButton}</div>

          <div className="mt-12 w-full max-w-4xl">
            <h3 className="text-center text-xl font-semibold text-white mb-6">Everything you need for QR codes</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {qrServices.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <service.icon className="h-8 w-8 text-lime-400 mb-2" />
                  <h4 className="text-sm font-medium text-white mb-1">{service.name}</h4>
                  <p className="text-xs text-gray-400 text-center">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-center max-w-5xl sm:gap-1 mt-[50px]">
            {/* Splash Screen */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <Image
                  src="/images/splash-screen.png"
                  alt="SCANYO QR App Splash Screen"
                  width={200}
                  height={400}
                  className="h-auto rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 w-[250px]"
                />
              </div>
              <p className="mt-3 text-xs text-gray-400 text-center font-light">Open Scanyo</p>
            </div>

            {/* Scanner Interface */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <Image
                  src="/images/scanner-screen.png"
                  alt="QR Scanner Interface"
                  width={200}
                  height={400}
                  className="h-auto rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 w-[250px]"
                />
              </div>
              <p className="mt-3 text-xs text-gray-400 text-center font-light">Scan QR Codes</p>
            </div>

            {/* Generate QR Code */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <Image
                  src="/images/generate-qr-screen.png"
                  alt="Generate QR Code Screen"
                  width={200}
                  height={400}
                  className="h-auto rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 w-[250px]"
                />
              </div>
              <p className="mt-3 text-xs text-gray-400 text-center font-light">Generate QR</p>
            </div>

            {/* History Screen */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <Image
                  src="/images/history-screen.png"
                  alt="History Screen"
                  width={200}
                  height={400}
                  className="h-auto rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 w-[250px]"
                />
              </div>
              <p className="mt-3 text-xs text-gray-400 text-center font-light">View History</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
