'use client';

import { Button } from '../button';

export function DesktopMenu() {
  return (
    <nav className="hidden lg:flex items-center space-x-8">
      <Button className="bg-[#3d3d3d] text-white hover:bg-[#4d4d4d] py-8 px-14">
        Categories ▾
      </Button>
      <Button className="bg-[#ef2c00] hover:bg-[#ff3c0a] text-white py-8 px-14 ">
        Submit AI Tool
      </Button>
    </nav>
  );
}