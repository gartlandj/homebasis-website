import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Expert guides on home cost basis, capital improvements, and tax savings for homeowners.",
};

const posts = [
  {
    title: "What Is Home Cost Basis? A Homeowner's Guide",
    href: "/blog/home-cost-basis-explained/",
    description:
      "Learn what cost basis means for your home and why tracking it saves thousands.",
    date: "March 30, 2026",
  },
  {
    title: "Capital Improvement vs. Repair: What Counts for Your Tax Basis?",
    href: "/blog/capital-improvement-vs-repair/",
    description:
      "The IRS distinction between improvements and repairs, with a project-by-project breakdown.",
    date: "March 30, 2026",
  },
  {
    title: "Section 121 Exclusion: How to Pay Zero Capital Gains Tax",
    href: "/blog/section-121-exclusion-guide/",
    description:
      "How the $250K/$500K home sale exclusion works and when it's not enough.",
    date: "March 30, 2026",
  },
  {
    title: "Which Closing Costs Count Toward Your Cost Basis?",
    href: "/blog/closing-costs-and-cost-basis/",
    description:
      "Find out which closing costs increase your basis and reduce future taxes.",
    date: "April 6, 2026",
  },
  {
    title: "Selling Your Home in 2026? A Tax Planning Checklist",
    href: "/blog/selling-your-home-tax-guide/",
    description: "Step-by-step tax planning for home sellers.",
    date: "April 13, 2026",
  },
  {
    title: "How to Track Home Improvements for Taxes",
    href: "/blog/track-home-improvements-for-taxes/",
    description:
      "Practical methods for tracking improvements, from spreadsheets to apps.",
    date: "April 20, 2026",
  },
];

export default function BlogIndex() {
  return (
    <section className="py-16 sm:py-20 bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
            Blog
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Expert guides on home cost basis, capital improvements, and tax
            savings for homeowners.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-md hover:border-primary-light/40 transition-all duration-200"
            >
              <time className="text-sm text-text-muted">{post.date}</time>
              <h2 className="text-lg font-semibold text-primary-dark mt-2 mb-3 group-hover:text-primary-light transition-colors">
                {post.title}
              </h2>
              <p className="text-text-muted text-sm leading-relaxed">
                {post.description}
              </p>
              <span className="inline-block mt-4 text-sm font-medium text-primary group-hover:text-primary-light transition-colors">
                Read more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
