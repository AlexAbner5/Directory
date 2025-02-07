import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Globe, ThumbsUp, Eye, ArrowLeft, Star, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProductCard() {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Link href="/category" className="inline-flex items-center text-gray-500 hover:text-gray-700 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        <span>Back to Category</span>
      </Link>

      <Card className="border-0">
        <CardHeader className="bg-emerald-600 text-white rounded-t-lg space-y-6">
          <div className="flex items-start gap-6">
            <div className="bg-white rounded-lg p-4 w-[180px] h-[180px] flex items-center justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Container-8mPCu3fDcaUMVUUfCfKvjGjUxX02kC.png"
                alt="Inner Voice Logo"
                width={160}
                height={160}
                className="rounded"
              />
            </div>
            <div className="space-y-3 flex-1 py-2">
              <h1 className="text-3xl font-bold">Inner Voice</h1>
              <p className="text-emerald-50 text-xl">
                Revolutionary App Lets You Meditate Using the Sound of Your Own Voice
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="secondary" className="bg-emerald-500/20 hover:bg-emerald-500/30 text-white border-0">
                  Music AI Agents
                </Badge>
                <Badge variant="secondary" className="bg-emerald-500/20 hover:bg-emerald-500/30 text-white border-0">
                  Healthcare
                </Badge>
                <Badge variant="secondary" className="bg-emerald-500/20 hover:bg-emerald-500/30 text-white border-0">
                  Freemium
                </Badge>
                <Badge variant="secondary" className="bg-emerald-500/20 hover:bg-emerald-500/30 text-white border-0">
                  Closed Source
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="secondary"
              size="sm"
              className="bg-emerald-500/20 hover:bg-emerald-500/30 text-white border-0"
            >
              <ThumbsUp className="w-4 h-4 mr-1" />1
            </Button>
            <Button
              variant="secondary"
              size="sm"
              className="bg-emerald-500/20 hover:bg-emerald-500/30 text-white border-0"
            >
              <Eye className="w-4 h-4 mr-1" />
              64
            </Button>
            <Button variant="secondary" className="bg-white text-emerald-600 hover:bg-emerald-50">
              <Globe className="w-4 h-4 mr-2" />
              Visit Website
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-8 space-y-12">
          <div className="rounded-lg border border-[#e5e7eb] p-6 leading-6">
            <h2 className="text-2xl font-semibold mb-4">Inner Voice review</h2>
            <p className="text-gray-600 leading-[24px]">
              InnerVoice: Your Personal Growth Partner Experience mindfulness like never before with InnerVoice, the
              AI-powered platform that helps you connect deeply with your inner self. InnerVoice empowers you to
              meditate and reflect using the most powerful tool you have: your own voice. Record and listen to guided
              meditations, affirmations, and personalized reflections in your own voice, creating a uniquely immersive
              experience tailored to your journey. Whether you're seeking clarity, confidence, or emotional balance,
              InnerVoice offers the tools to help you grow, heal, and thrive. Unlock the power of your voice and
              transform your well-being today with InnerVoice
            </p>
          </div>

          <div className="rounded-lg border border-[#e5e7eb] p-6">
            <h2 className="text-2xl font-semibold mb-4">Inner Voice Key Features</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-4 bg-emerald-50 rounded-lg">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="leading-[24px]">Meditate in your own voice</span>
              </div>
              <div className="flex items-center gap-2 p-4 bg-emerald-50 rounded-lg">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="leading-[24px]">AI-Generated Frequencies</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-[#e5e7eb] p-6">
            <h2 className="text-2xl font-semibold mb-4">Inner Voice Use Cases</h2>
            <div className="space-y-2">
              {["Relaxing", "Meditation", "Sleep", "Focus"].map((useCase) => (
                <div key={useCase} className="flex items-center gap-2 p-4 bg-blue-50 rounded-lg">
                  <Check className="w-5 h-5 text-blue-500" />
                  <span className="leading-[24px]">{useCase}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-[#e5e7eb] p-6">
            <h2 className="text-2xl font-semibold mb-4">Inner Voice Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <span className="text-gray-500 leading-[24px]">Created by:</span>
                <span className="leading-[24px]">17 Ventures</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500 leading-[24px]">Category:</span>
                <span className="leading-[24px]">Music AI Agents</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500 leading-[24px]">Industry:</span>
                <span className="leading-[24px]">Healthcare</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500 leading-[24px]">Pricing Model:</span>
                <span className="leading-[24px]">Freemium</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500 leading-[24px]">Access:</span>
                <span className="leading-[24px]">Closed Source</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500 leading-[24px]">Added on:</span>
                <span className="leading-[24px]">01/17/2025</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-[#e5e7eb] p-6">
            <h2 className="text-2xl font-semibold mb-4">Preview</h2>
            <div className="bg-black rounded-lg p-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Container-8mPCu3fDcaUMVUUfCfKvjGjUxX02kC.png"
                alt="Inner Voice Preview"
                width={1200}
                height={675}
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

