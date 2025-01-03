'use client';

import { Aperture } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Aperture className="h-8 w-8 text-[#ef2c00]" />
      <span className="text-xl font-bold text-white hidden sm:inline">AI Image Generators</span>
      <span className="text-xl font-bold text-white sm:hidden">AI Gen</span>
    </Link>
  );
}