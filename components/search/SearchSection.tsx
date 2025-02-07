'use client';

import { SearchBar } from './SearchBar';

interface SearchSectionProps {
  onSearch: (query: string) => void;
}

export function SearchSection({ onSearch }: SearchSectionProps) {
  return (
    <section className="bg-[#1c1c1c] py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col space-y-4 px-52">
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
    </section>
  );
}