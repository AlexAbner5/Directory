'use client';

import { Brain } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Brain className="w-8 h-8 text-[#ef2c00]" />
      <div className="hidden sm:flex items-baseline">
        <span className="text-xl font-bold text-[#ef2c00]">AI</span>
        <span className="text-xl font-bold text-white ml-1">Image </span>
      </div>
    </Link>
  );
}