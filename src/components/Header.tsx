"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 3L2 13h3v11h7v-7h4v7h7V13h3L14 3z" fill="currentColor" />
          </svg>
          HomeBasis
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/blog" className="text-text-muted hover:text-primary transition-colors">
            Blog
          </Link>
          <Link href="/support" className="text-text-muted hover:text-primary transition-colors">
            Support
          </Link>
          <a
            href="https://apps.apple.com/app/homebasis"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-5 py-2 rounded-lg font-medium hover:bg-primary-light transition-colors"
          >
            Download App
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white px-4 py-4 space-y-3">
          <Link href="/blog" className="block text-text-muted hover:text-primary" onClick={() => setMobileOpen(false)}>
            Blog
          </Link>
          <Link href="/support" className="block text-text-muted hover:text-primary" onClick={() => setMobileOpen(false)}>
            Support
          </Link>
          <a
            href="https://apps.apple.com/app/homebasis"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-primary text-white px-5 py-2 rounded-lg font-medium text-center hover:bg-primary-light transition-colors"
          >
            Download App
          </a>
        </div>
      )}
    </header>
  );
}
