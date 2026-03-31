import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "HomeBasis — Track Your Home's Tax Basis",
    template: "%s — HomeBasis",
  },
  description:
    "Track home improvements, store receipts, and estimate your capital gains tax — all in one app. Save thousands when you sell.",
  metadataBase: new URL("https://homebasis.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "HomeBasis",
  },
  twitter: {
    card: "summary_large_image",
  },
  other: {
    "apple-itunes-app": "app-id=6760266752",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "HomeBasis",
              url: "https://homebasis.app",
              description:
                "Track home improvements, store receipts, and estimate your capital gains tax.",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
