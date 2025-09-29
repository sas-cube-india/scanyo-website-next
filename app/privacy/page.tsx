import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Scanyo QR - Your Data Protection & Privacy Rights",
  description:
    "Read Scanyo QR's privacy policy. Learn how we protect your data, handle QR code scanning locally, and comply with GDPR, CCPA regulations. No personal data collection.",
  keywords:
    "privacy policy, data protection, GDPR compliance, CCPA, QR code privacy, local scanning, no data collection",
  robots: "index, follow",
  openGraph: {
    title: "Privacy Policy | Scanyo QR - Your Data Protection & Privacy Rights",
    description:
      "Read Scanyo QR's privacy policy. Learn how we protect your data, handle QR code scanning locally, and comply with GDPR, CCPA regulations.",
    url: "https://scanyo-qr.com/privacy",
    type: "article",
  },
  twitter: {
    title: "Privacy Policy | Scanyo QR - Your Data Protection & Privacy Rights",
    description:
      "Read Scanyo QR's privacy policy. Learn how we protect your data, handle QR code scanning locally, and comply with GDPR, CCPA regulations.",
  },
}

export default function PrivacyPolicy() {
  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />

        <div className="container mx-auto px-4 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-8">
              Privacy Policy – SCANYO QR
            </h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 mb-8">
                <strong>Effective Date:</strong> 23 Sep 2025
              </p>

              <p className="text-gray-300 mb-6">
                Welcome to SCANYO QR. Your privacy is very important to us. This Privacy Policy explains how we handle
                your information when you use our app. By using SCANYO QR, you agree to the practices described below.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Information Collection</h2>

              <h3 className="text-xl font-semibold text-lime-300 mt-6 mb-3">QR Scanning & Generation</h3>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>All QR code scanning and generation happens locally on your device.</li>
                <li>We do not collect, store, or transmit your scanned or generated data to our servers.</li>
                <li>Your information remains private and under your control.</li>
              </ul>

              <h3 className="text-xl font-semibold text-lime-300 mt-6 mb-3">History Feature</h3>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>Your scan and generation history is saved only on your device for your convenience.</li>
                <li>We do not have access to this history.</li>
              </ul>

              <h3 className="text-xl font-semibold text-lime-300 mt-6 mb-3">Advertising Data</h3>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>We display ads (banner, native, and interstitial) using Google AdMob SDKs.</li>
                <li>
                  AdMob may collect device identifiers, advertising IDs, approximate location, or usage data to provide
                  personalized or non-personalized ads.
                </li>
                <li>You can manage your ad preferences in your device settings or review Google's Privacy Policy.</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Paid Pro Version</h2>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>We offer a Pro version subscription (1 year) that removes all ads.</li>
                <li>
                  Purchases are handled by the Google Play Store (or the app store you used). We do not collect or store
                  payment details.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Third-Party Services</h2>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>Our app may include links or references to third-party services.</li>
                <li>We are not responsible for the content, security, or privacy practices of those third parties.</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. International Compliance</h2>
              <p className="text-gray-300 mb-4">We aim to respect privacy regulations in different countries:</p>

              <h3 className="text-xl font-semibold text-lime-300 mt-6 mb-3">GDPR (European Union):</h3>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>SCANYO QR does not collect personally identifiable information.</li>
                <li>No user data is stored on our servers.</li>
                <li>
                  If you are in the EU, you have the right to request clarification on any processing done by
                  third-party ad providers (e.g., AdMob).
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-lime-300 mt-6 mb-3">CCPA (California, USA):</h3>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>We do not sell your personal data.</li>
                <li>Ads may use limited data collected by third-party networks (e.g., Google AdMob).</li>
              </ul>

              <h3 className="text-xl font-semibold text-lime-300 mt-6 mb-3">Other Regions:</h3>
              <p className="text-gray-300 mb-4">
                SCANYO QR operates under a minimal data policy. Since no personal data is collected or stored by us,
                your privacy is preserved regardless of your location.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Liability Disclaimer</h2>
              <p className="text-gray-300 mb-4">SCANYO QR is provided on an "as is" and "as available" basis.</p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>
                  We do not guarantee the accuracy, reliability, or functionality of QR codes scanned or generated.
                </li>
                <li>You are solely responsible for verifying the content of any QR code before acting on it.</li>
              </ul>
              <p className="text-gray-300 mb-4">
                We are not liable for any damages, losses, or consequences arising from:
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>The use of scanned or generated QR codes</li>
                <li>Errors in scanning or generation</li>
                <li>Ads displayed within the app</li>
                <li>Use of third-party services linked through the app</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Children's Privacy</h2>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>
                  SCANYO QR is not intended for children under 13 years of age (or the minimum age of digital consent in
                  your country).
                </li>
                <li>We do not knowingly collect personal information from children.</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Policy Updates</h2>
              <p className="text-gray-300 mb-4">
                We may update this Privacy Policy from time to time. Any changes will be reflected with a new "Effective
                Date." We encourage you to review the policy periodically.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have questions about this Privacy Policy, you may contact us at: support@thebesads.com
              </p>
            </div>
          </div>
        </div>

        <AppverseFooter />
      </main>
    </>
  )
}
