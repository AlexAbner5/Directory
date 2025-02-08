import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Best AI Image Generators - Create Stunning Images with AI',
  description: 'Discover the best AI image generators. Explore tools for creating AI-powered images, illustrations, editing, sketches, and more.',
  openGraph: {
    title: 'Best AI Image Generators - Create Stunning Images with AI',
    description: 'Discover the best AI image generators. Explore tools for creating AI-powered images.',
    url: 'https://www.aiimagegenerators.org/',
    type: 'website',
    images: [
      {
        url: 'https://www.aiimagegenerators.org/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Image Generators - Create Stunning Images with AI',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AI Image Generators',
    url: 'https://www.aiimagegenerators.org/',
    description: 'Directory of AI image generators. The best AI tools for creating images, drawings, illustrations, editing, sketching and more.',
    publisher: {
      '@type': 'Organization',
      name: 'AI Image Generators',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.aiimagegenerators.org/images/logo.png',
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.aiimagegenerators.org/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}


