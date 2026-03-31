import AppStoreBadge from "@/components/AppStoreBadge";

const features = [
  {
    title: "Log Improvements",
    description: "Categorize projects by type and classify each as a capital improvement or repair with guided questionnaires.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    ),
  },
  {
    title: "Store Receipts",
    description: "Photograph or upload invoices and contractor receipts. Stored permanently, organized automatically.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Estimate Gains",
    description: '"What If I Sold?" calculator with Section 121 exclusion. See your tax position in real time.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75V18m15-8.25l-3-3m0 0l-3 3m3-3v12M3.75 4.5h16.5" />
      </svg>
    ),
  },
  {
    title: "Export for Your CPA",
    description: "Generate professional PDF reports and CSV data. Everything your tax professional needs, ready to send.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
  },
];

const steps = [
  {
    number: "1",
    title: "Enter Your Home Details",
    description: "Add your purchase price and qualifying closing costs to establish your starting basis.",
  },
  {
    number: "2",
    title: "Log Improvements Over Time",
    description: "Record each project as you complete it. Attach receipts and let the app classify it for you.",
  },
  {
    number: "3",
    title: "Export When You Need It",
    description: "When it's time to sell or file taxes, generate CPA-ready reports with everything documented.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-dark to-primary text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)",
          }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Track Your Home&apos;s Tax Basis.{" "}
              <span className="text-accent-light">Save Thousands When You Sell.</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl">
              Log home improvements, store receipts, and estimate your capital gains tax — all in one app.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <AppStoreBadge />
              <span className="text-white/60 text-sm self-center">Free to use. No subscription required.</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 sm:py-20 bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark mb-6">
            The Problem Most Homeowners Don&apos;t Know They Have
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Most homeowners don&apos;t track their improvements. When they sell — often decades later — they&apos;ve lost receipts,
            forgotten projects, and end up overpaying on taxes. The average American moves every 13 years.
            That&apos;s a lot of renovations to remember.
          </p>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 sm:py-20 bg-bg-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark text-center mb-12">
            Everything You Need to Protect Your Tax Savings
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark text-center mb-12">
            How It Works
          </h2>
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                  <p className="text-text-muted leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Scenario */}
      <section className="py-16 sm:py-20 bg-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            See How Tracking Saves Real Money
          </h2>
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 sm:p-10">
            <p className="text-white/80 mb-6 leading-relaxed">
              <strong className="text-white">Meet Maria and David.</strong> They bought their home for <strong className="text-accent-light">$320,000</strong> and
              spent <strong className="text-accent-light">$75,000</strong> on improvements over 15 years — a kitchen remodel, new roof, HVAC replacement,
              and a bathroom renovation.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div className="bg-white/5 rounded-xl p-5">
                <h4 className="font-semibold text-accent-light mb-3">Without Tracking</h4>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>Purchase price: $320,000</li>
                  <li>Sale price: $850,000</li>
                  <li>Gain: $530,000</li>
                  <li>After $500K exclusion: $30,000 taxable</li>
                  <li className="text-white font-semibold">Tax owed: ~$4,500</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-5 ring-2 ring-accent-light">
                <h4 className="font-semibold text-accent-light mb-3">With HomeBasis</h4>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>Adjusted basis: $395,000</li>
                  <li>Sale price: $850,000</li>
                  <li>Gain: $455,000</li>
                  <li>After $500K exclusion: $0 taxable</li>
                  <li className="text-accent-light font-semibold">Tax owed: $0</li>
                </ul>
              </div>
            </div>
            <p className="text-center text-white/60 text-sm">
              By tracking $75,000 in capital improvements, Maria and David saved $4,500 in taxes — and they&apos;re fully covered up to a sale price of ~$895,000.
            </p>
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-16 sm:py-20 bg-bg-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark text-center mb-12">
            Designed for Homeowners, Not Accountants
          </h2>
          <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 lg:grid-cols-6 sm:overflow-x-visible">
            {[
              { src: "/screenshot_1_hook.png", alt: "HomeBasis app dashboard showing home value and adjusted cost basis" },
              { src: "/screenshot_2_core_action.png", alt: "HomeBasis app logging a home improvement project" },
              { src: "/screenshot_3_classification.png", alt: "HomeBasis app classifying an improvement as capital or repair" },
              { src: "/screenshot_4_estimator.png", alt: "HomeBasis app capital gains tax estimator with Section 121 exclusion" },
              { src: "/screenshot_5_receipts.png", alt: "HomeBasis app receipt storage for home improvement invoices" },
              { src: "/screenshot_6_export.png", alt: "HomeBasis app export hub generating CPA-ready PDF reports" },
            ].map((screenshot) => (
              <div
                key={screenshot.src}
                className="flex-shrink-0 w-48 sm:w-auto snap-center"
              >
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  className="rounded-2xl shadow-sm border border-border w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-bg to-bg-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
            Start Tracking Your Home&apos;s Tax Basis Today
          </h2>
          <p className="text-lg text-text-muted mb-8">
            Every improvement you log is money saved when you sell. Don&apos;t wait — start building your record now.
          </p>
          <AppStoreBadge className="mb-4" />
          <p className="text-text-muted text-sm">Free to use. No subscription required.</p>
        </div>
      </section>
    </>
  );
}
