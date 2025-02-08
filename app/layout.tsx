import { Header } from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ai Image Generators',
  description: 'Directory of AI image generators. The best AI tools for creating images, drawings, illustrations, editing, sketching and more.',
  icons: {
    icon: '/app/Ionic-Ionicons-Aperture.512.ico',
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>{children}</body>
    </html>
  );
}
