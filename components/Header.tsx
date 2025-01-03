'use client';

import { Logo } from '@/components/ui/navigation/logo';
import { MobileMenu } from '@/components/ui/navigation/MobileMenu';
import { DesktopMenu } from '@/components/ui/navigation/DesktopMenu';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#1c1c1c] border-b border-neutral-800 py-6">
      <div className="container mx-auto px-5">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <DesktopMenu />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}