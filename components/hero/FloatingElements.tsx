'use client';

import { useEffect, useState } from 'react';

export function FloatingElements() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background larger elements with blur */}
      <div className="animate-float-slow absolute top-[20%] left-[8%] w-20 h-20 rounded-full bg-[#ef2c00]/10 blur-xl" />
      <div className="animate-float-medium absolute bottom-[15%] right-[8%] w-24 h-24 rounded-full bg-gray-600/10 blur-xl" />

      {/* Mid-layer elements */}
      <div className="animate-float-slow absolute top-[35%] left-[12%] w-6 h-6 rounded-full bg-[#ef2c00]/25 blur-[2px]" />
      <div className="animate-float-medium absolute top-[45%] right-[15%] w-8 h-8 rounded-full bg-gray-600/20 blur-[1px]" />
      <div className="animate-float-medium absolute bottom-[30%] left-[20%] w-10 h-10 rounded-full bg-[#ef2c00]/15 blur-[2px]" />
      
      {/* Foreground smaller elements */}
      <div className="animate-bounce-slow absolute top-[25%] left-[35%] w-3 h-3 rounded-full bg-[#ef2c00]/40" />
      <div className="animate-float-fast absolute top-[40%] right-[30%] w-4 h-4 rounded-full bg-gray-600/35" />
      <div className="animate-float-medium absolute bottom-[35%] right-[25%] w-5 h-5 rounded-full bg-[#ef2c00]/30" />
      
      {/* Corner accents */}
      <div className="animate-bounce-slow absolute top-[10%] left-[10%] w-6 h-6 rounded-full bg-[#ef2c00]/20" />
      <div className="animate-float-medium absolute bottom-[20%] right-[15%] w-5 h-5 rounded-full bg-gray-600/25" />
    </div>
  );
}