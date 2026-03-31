import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
};

const faqs = [
  {
    question: "What is HomeBasis?",
    answer:
      "HomeBasis is a mobile app for homeowners that helps you track home improvements, store receipts, and estimate the tax impact of your home's cost basis. It's designed to help you save money on capital gains taxes when you sell your home.",
  },
  {
    question: "Is HomeBasis free to use?",
    answer:
      "Yes, HomeBasis is free to download and use. There are no subscriptions, hidden fees, or in-app purchases required to access the core features.",
  },
  {
    question: "Where is my data stored?",
    answer:
      "Your data is stored securely in the cloud, so you never have to worry about losing your records or receipts if you switch devices or lose your phone. Your financial and personal data is always private and secure — it is never shared, sold, or used for advertising. You can delete your data at any time from within the app.",
  },
  {
    question: "What is the difference between a capital improvement and a repair?",
    answer:
      "A capital improvement adds value to your home, prolongs its life, or adapts it to new uses — think kitchen remodels, new roofs, or adding a deck. A repair restores something to its original condition — like fixing a leaky faucet or patching drywall. Only capital improvements increase your home's cost basis and reduce your taxable gain when you sell.",
  },
  {
    question: "Does the app provide tax advice?",
    answer:
      "No. HomeBasis is an educational and record-keeping tool. It provides general information based on IRS guidelines, but it is not a substitute for professional tax advice. Always consult a qualified tax professional or CPA before making tax decisions.",
  },
  {
    question: "How do I add a home improvement?",
    answer:
      "Open the app and tap the \"+\" button on your dashboard. Enter the project details including the description, date, cost, and category. You can also attach photos of receipts and invoices. The app will help you classify the project as a capital improvement or repair.",
  },
  {
    question: "Can I export my data for my accountant?",
    answer:
      "Yes. HomeBasis can generate professional PDF reports and CSV files that summarize your home improvements, costs, and cost basis calculations. You can share these directly with your CPA or tax professional from within the app.",
  },
  {
    question: "How can I delete my data?",
    answer:
      "You can delete your data at any time from within the app. Once deleted, your data is permanently removed from our servers and cannot be recovered.",
  },
  {
    question: "Does HomeBasis work for multiple properties?",
    answer:
      "HomeBasis currently supports one property. Support for multiple properties is something we plan to add in the future.",
  },
  {
    question: "What is the Section 121 exclusion?",
    answer:
      "The Section 121 exclusion allows you to exclude up to $250,000 (or $500,000 for married couples filing jointly) of capital gains from the sale of your primary residence, provided you meet certain ownership and use requirements. HomeBasis helps you estimate whether your gain exceeds this exclusion.",
  },
];

export default function Support() {
  return (
    <section className="py-16 sm:py-20 bg-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
          Support
        </h1>
        <p className="text-lg text-text-muted leading-relaxed mb-12">
          Find answers to common questions below, or reach out to us directly.
        </p>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary-dark mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-white rounded-2xl border border-border overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-left font-semibold text-text hover:bg-bg-alt transition-colors">
                  <span className="pr-4">{faq.question}</span>
                  <span className="flex-shrink-0 w-5 h-5 text-text-muted transition-transform duration-200 group-open:rotate-45">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-text-muted leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl border border-border p-8 sm:p-10 text-center">
          <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-primary-dark mb-3">
            Still Need Help?
          </h2>
          <p className="text-text-muted mb-6 max-w-md mx-auto">
            Can&apos;t find what you&apos;re looking for? Send us an email and
            we&apos;ll get back to you as soon as possible.
          </p>
          <a
            href="mailto:support@homebasis.app"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary-light transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            support@homebasis.app
          </a>
        </div>
      </div>
    </section>
  );
}
