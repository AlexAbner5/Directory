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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SKpuh94P8gsNniwmcYAZ9e8qX4FqwS.png"
                alt="AIxploria Logo"
                width={180}
                height={40}
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-lg">Artificial intelligence for everyone</p>
            <div className="space-y-4">
              <form className="flex gap-0 max-w-md">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="rounded-l-full rounded-r-none border-r-0 bg-white/10 text-white placeholder:text-gray-400 h-10 px-6"
                />
                <Button 
                  type="submit" 
                  className="rounded-r-full rounded-l-none bg-[#ef2c00]  h-10 px-6"
                >
                  Subscribe Free
                </Button>
              </form>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-white transition-colors">
                  <X className="w-6 h-6" />
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm.07 18.97c-3.33 0-6.04-2.71-6.04-6.04S8.74 6.89 12.07 6.89s6.04 2.71 6.04 6.04-2.71 6.04-6.04 6.04zm-1.6-6.04c0 .88.71 1.6 1.6 1.6.88 0 1.6-.71 1.6-1.6 0-.88-.71-1.6-1.6-1.6-.89 0-1.6.71-1.6 1.6z"/>
                  </svg>
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </Link>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span>hello@aiagentsdirectory.com</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-6 w-6"
                  onClick={() => navigator.clipboard.writeText('hello@aiagentsdirectory.com')}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>

          </div>

          {/* Resources Column */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg border-b border-gray-700 pb-2">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-white transition-colors">Tutorials, tips and blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">AI Conferences Agenda</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">AI Glossary & Lexicon</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Explore AI Jobs</Link></li>
            </ul>
          </div>

          {/* Useful Tools Column */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg border-b border-gray-700 pb-2">Useful Tools</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-white transition-colors">Best AI Youtube Channels</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Top 100 AI</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">GPTs List</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Hubspot AI Tools</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg border-b border-gray-700 pb-2">Company</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-white transition-colors">Submit an AI Tool</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Advertise</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Update your tool</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Feature your tool ★</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-4 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span>© 2025 Aixploria. All rights reserved</span>
            <span className="text-green-400">🌱</span>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Conditions of use</Link>
            <Link href="#" className="hover:text-white transition-colors">Legals informations</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

