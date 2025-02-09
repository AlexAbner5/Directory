'use client';

import Link from 'next/link';
import BadgeButton from './BadgeButton';


export function HeroSection() {
  return (
    <section className="relative bg-[#1c1c1c]  overflow-hidden flex items-center justify-center">


      <div className="container mx-auto px-4 relative z-10">

        <div className="max-w-4xl mx-auto text-center mt-20">
          <BadgeButton/>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 mt-6">
            All AI Image Tools Directory!
          </h1>
          <h2 className="text-2xl text-gray-400 mb-4 max-w-2xl mx-auto">
            The best AI tools for creating images, drawings, illustrations, editing, sketching and more.
          </h2>
          <p className="text-lg text-gray-500">
            AI Image is Made by →{' '}
            <Link href="https://www.alex-matias.com" target="_blank">
            <span className="text-[#ef2c00] font-medium border-b border-[#ef2c00] pb-0.5 hover:text-[#ff3c0a]">
              Alex Matias
            </span>
            </Link>

          </p>
        </div>

      </div>
    </section>
  );
}