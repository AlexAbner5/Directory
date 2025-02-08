import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Best AI Image Generators - Create Stunning Images with AI',
  description: 'Discover the best AI image generators. Explore tools for creating AI-powered images, illustrations, editing, sketches, and more. Compare features, reviews, and find the best AI art tools.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AI Image Generators',
    url: 'https://www.aiimagegenerators.org/',
    description: 'Directory of AI image generators. The best AI tools for creating images, drawings, illustrations, editing, sketching and more.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.aiimagegenerators.org/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <html lang="en">
      <Head>
        <title>Best AI Image Generators - Create Stunning Images with AI</title>
        <meta name="description" content="Discover the best AI image generators. Explore tools for creating AI-powered images, illustrations, editing, sketches, and more. Compare features, reviews, and find the best AI art tools." />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
