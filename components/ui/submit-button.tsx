'use client';

import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

export function SubmitButton() {
  return (
    <Button 
      className="bg-[#ef2c00] hover:bg-[#ef2c00]/90 text-white"
    >
      <Send className="w-4 h-4 mr-2 sm:mr-2" />
      <span className="hidden sm:inline">Submit</span>
    </Button>
  );
}