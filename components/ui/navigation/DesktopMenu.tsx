'use client';

import ShinyButton from '@/components/ShinyButton';
import { Button } from '../button';
import Link from 'next/link';

export function DesktopMenu() {
  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {
        <Link href="/submit">
        <Button
          size={"lg"}
          className="bg-[#3d3d3d] text-white hover:bg-[#4d4d4d] rounded-2xl"
        >
          + Submit
        </Button>
        </Link>
      }
      {/* <ShinyButton /> */}
      {/* <Button
        size={"lg"}
        className="bg-[#ef2c00] hover:bg-[#ff3c0a] text-white"
      >
        Submit AI Tool
      </Button> */}
    </nav>
  );
}