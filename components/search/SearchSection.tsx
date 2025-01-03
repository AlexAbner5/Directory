'use client';

import { SearchBar } from './SearchBar';
import { CategorySelect } from './CategorySelect';

export function SearchSection() {
  return (
    <section className="bg-[#1c1c1c] py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Explore Our AI Image Tools
          </h2>
          <p className="text-gray-400 text-lg">
            Find tools for creating images, sketches, and illustrations easily
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-0 sm:flex sm:gap-4">
          <SearchBar />
          <CategorySelect />
        </div>
        <p className="text-gray-500 text-sm text-center mt-4">
          Use keywords to find the right tools faster
        </p>
      </div>
    </section>
  );
}