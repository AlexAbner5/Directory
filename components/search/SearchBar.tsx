'use client';

import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="relative flex-1">
      <input
        type="text"
        placeholder="Search among 2500 tools"
        className="w-full bg-gray-800 text-gray-200 placeholder-gray-400 rounded-lg px-4 py-3 pl-10 border border-gray-700 focus:border-[#ef2c00] focus:ring-1 focus:ring-[#ef2c00] transition-colors"
      />
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
    </div>
  );
}