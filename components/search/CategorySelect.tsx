'use client';

import { ChevronDown } from 'lucide-react';

export function CategorySelect() {
  return (
    <div className="relative sm:w-64">
      <select 
        className="w-full appearance-none bg-gray-800 text-gray-200 rounded-lg px-4 py-3 pr-10 border border-gray-700 focus:border-[#ef2c00] focus:ring-1 focus:ring-[#ef2c00] transition-colors"
        defaultValue=""
      >
        <option value="" disabled>-- Select a Category --</option>
        <option value="image-generation">Image Generation</option>
        <option value="image-editing">Image Editing</option>
        <option value="sketching">Sketching</option>
        <option value="illustration">Illustration</option>
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
    </div>
  );
}