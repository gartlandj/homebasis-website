import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-bold text-xl mb-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/app-icon.png" alt="HomeBasis icon" width={28} height={28} className="rounded-lg" />
              HomeBasis
            </div>
            <p className="text-white/70 text-sm max-w-md">
              Track your home&apos;s tax basis, store receipts, and estimate capital gains — all in one app. Save thousands when you sell.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="https://apps.apple.com/us/app/homebasis-tax-basis-tracker/id6760266752" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Download for iOS
                </a>
              </li>
              <li>
                <Link href="/support" className="hover:text-white transition-colors">Support</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 text-sm text-white/50 text-center">
          &copy; {new Date().getFullYear()} HomeBasis. All rights reserved.
          <p className="mt-2">
            This app provides educational tools, not tax advice. Consult a qualified tax professional for your specific situation.
          </p>
        </div>
      </div>
    </footer>
  );
}
