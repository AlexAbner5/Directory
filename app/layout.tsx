import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Best AI Image Generators - Create Images with AI tools',
  description: 'Discover the best AI image generators. Explore tools for creating AI-powered images, illustrations, editing, sketches, and more.',
  metadataBase: new URL('https://www.aiimagegenerators.org'),
  alternates: {
    canonical: 'https://www.aiimagegenerators.org'
  },
  openGraph: {
    title: 'Best AI Image Generators - Create Images with AI tools',
    description: 'Discover the best AI image generators. Explore tools for creating AI-powered images.',
    url: 'https://aiimagegenerators.org/',
    type: 'website',
    images: 'https://aiimagegenerators.org/favicon.ico',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'AI Image Generators',
              url: 'https://aiimagegenerators.org/',
              description:
                'Directory of AI image generators. The best AI tools for creating images, drawings, illustrations, editing, sketching and more.',
              publisher: {
                '@type': 'Organization',
                name: 'AI Image Generators',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://aiimagegenerators.org/favicon.ico',
                },
              },
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate:
                    'https://aiimagegenerators.org/search?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />

        {/* Google Analytics Tag */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3BV6XRLEQZ"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3BV6XRLEQZ');
            `,
          }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.aiimagegenerators.org" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}