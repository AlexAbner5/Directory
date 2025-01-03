'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../button';
import { cn } from '@/lib/utils';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="text-white"
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/50 z-50 transition-opacity',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-64 bg-gray-900 z-50 transform transition-transform duration-200 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 text-white"
          >
            <X className="h-6 w-6" />
          </Button>

          <nav className="mt-12 space-y-4">
            <div className="px-4">
              <button className="text-white hover:text-gray-300 transition-colors">
                Categories ▾
              </button>
            </div>
            <div className="px-4">
              <Button className="w-full bg-[#ef2c00] hover:bg-[#ff3c0a] text-white">
                Submit AI Tool
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}