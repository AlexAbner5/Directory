'use client';

import { FloatingElements } from './FloatingElements';

export function HeroSection() {
  return (
    <section className="relative bg-[#1c1c1c] min-h-[80vh] py-20 overflow-hidden flex items-center justify-center">

      <FloatingElements />

      <div className="container mx-auto px-4 relative z-10">

        <div className="max-w-4xl mx-auto text-center mt-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            All AI Image Tools Directory!
          </h1>
          <p className="text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            The best AI tools for creating images, drawings, illustrations, editing, sketching and more.
          </p>
          <p className="text-2xl text-gray-500">
            AI Image is Made by →{' '}
            <span className="text-[#ef2c00] font-medium border-b border-[#ef2c00] pb-0.5">
              Alex Matias
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}