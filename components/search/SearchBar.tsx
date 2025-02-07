"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="relative flex-1">
      <input
        type="text"
        placeholder="Search among 2500 tools"
        onChange={handleSearch}
        className="w-full h-[40px] bg-[#333333] text-gray-200 placeholder-gray-400 rounded-2xl px-4 py-1.5 pl-9 border border-gray-700 focus:border-[#ef2c00] focus:ring-1 focus:ring-[#ef2c00] transition-colors text-sm"
      />
      <Search className="absolute left-2.5 top-[12px] w-4 h-4 text-gray-400" />
    </div>
  );
}
