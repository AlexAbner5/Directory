import Link from "next/link"
import Image from "next/image"
import { 
  X, 
  Linkedin, 
  MessageCircle, 
  Copy 
} from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-gray-300 py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Bottom Section */}
        <div className="mt-12 pt-4 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span>© 2025 Ai Image Generators. All rights reserved</span>
            <span className="text-green-400"></span>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Conditions of use</Link>
            <Link href="#" className="hover:text-white transition-colors">Legals informations</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

