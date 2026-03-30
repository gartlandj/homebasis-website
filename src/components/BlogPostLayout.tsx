import Link from "next/link";
import AppStoreBadge from "./AppStoreBadge";

interface BlogPostLayoutProps {
  title: string;
  description: string;
  date: string;
  children: React.ReactNode;
}

export default function BlogPostLayout({ title, description, date, children }: BlogPostLayoutProps) {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/blog" className="text-primary hover:text-primary-light text-sm font-medium transition-colors">
          &larr; Back to Blog
        </Link>
      </div>

      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary-dark leading-tight mb-4">
          {title}
        </h1>
        <p className="text-text-muted text-lg mb-3">{description}</p>
        <time className="text-sm text-text-muted">{date}</time>
      </header>

      <div className="prose max-w-none">
        {children}
      </div>

      <div className="mt-12 p-8 bg-bg-alt rounded-2xl text-center">
        <h3 className="text-xl font-bold text-primary-dark mb-2">
          Start tracking your home&apos;s tax basis today
        </h3>
        <p className="text-text-muted mb-6">
          Free to use. No subscription required.
        </p>
        <AppStoreBadge />
      </div>

      <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-200 text-sm text-amber-800">
        <strong>Disclaimer:</strong> This is educational content, not tax advice. Consult a qualified tax professional for your specific situation.
      </div>
    </article>
  );
}
