import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Globe, ThumbsUp, Eye, ArrowLeft, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getToolProfile } from "@/lib/get-tool-profile"
import { Header } from "@/components/Header"
import FooterSectionCopy from "@/components/Footer/FooterSectionCopy"


interface ToolPageProps {
  params: { slug: string };
}


const hasValidContent = (blocks: any[]): boolean => {
  if (!blocks || blocks.length === 0) return false;

  return blocks.some((block: any) => {
    if (block.type === "paragraph") {
      return block.children.some((child: any) => child.text && child.text.trim() !== "");
    } else if (block.type === "list") {
      return block.children.some((listItem: any) =>
        listItem.children.some((child: any) => child.text && child.text.trim() !== "")
      );
    }
    return false;
  });
};

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = params;
  const tool = await getToolProfile({ slug });

  if (!tool) {
    return (
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold text-red-500">Tool Not Found</h1>
        <p className="text-gray-600">The tool you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="bg-[#1c1c1c] min-h-screen">
      <div className="max-w-4xl mx-auto p-4 bg-[#1c1c1c]">
        <Link href="/" className="inline-flex items-center text-white hover:text-[#ff3c0a] transition-colors mb-4">
          <ArrowLeft className="w-4 h-4 mr-2 " />
          <span>Back to Category</span>
        </Link>

        <Card className="border-0">
          <CardHeader className="bg-[#ff3c0a]/90 text-white rounded-t-2xl space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-white rounded-2xl p-4 w-[120px] h-[120px] flex items-center justify-center">
                <Image
                  src={tool.logo}
                  alt={tool.name}
                  width={100}
                  height={100}
                  className="rounded"
                />
              </div>
              <div className="space-y-3 flex-1">
                <h1 className="text-3xl font-bold">{tool.name}</h1>
                <p className="text-emerald-50 text-xl font-medium">{tool.shortDescription}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="secondary" className="bg-[#3d3d3d] hover:bg-[#4d4d4d] text-white border-0">
                    {tool.aiimagecategory}
                  </Badge>
                  <Badge variant="secondary" className="bg-[#3d3d3d] hover:bg-[#4d4d4d] text-white border-0">
                    {tool.PricingModels}
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link href={tool.VisitWebsite} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="bg-[#3d3d3d] text- hover:bg-[#4d4d4d] rounded-2xl">
                  <Globe className="w-4 h-4 mr-2" />
                  Visit Website
                </Button>
              </Link>
            </div>
          </CardHeader>

          {hasValidContent(tool.description) && (
            <CardContent className="pt-6">
              <div className="rounded-lg border border-[#333333] p-6">
                <h2 className="text-xl font-semibold text-white mb-4">{tool.name} Review</h2>
                <div className="text-white leading-relaxed">
                  {tool.description.map((block: any, index: number) => (
                    <p key={index} className="mb-4 whitespace-pre-line break-words">
                      {block.children[0]?.text}
                    </p>
                  ))}
                </div>
              </div>
            </CardContent>
          )}

          {hasValidContent(tool.KeyFeatures) && (
            <CardContent className="pt-6">
              <div className="rounded-lg border border-[#333333] p-6">
                <h2 className="text-xl font-semibold text-white mb-4">{tool.name} Key Features</h2>
                <div className="text-white leading-relaxed">
                  {tool.KeyFeatures.map((block: any, index: number) => {
                    if (block.type === "paragraph") {
                      return (
                        <p key={index}>
                          {block.children.map((child: any, childIndex: number) => child.text || "No content available")}
                        </p>
                      );
                    } else if (block.type === "list") {
                      return (
                        <ol key={index} className="list-decimal list-inside">
                          {block.children.map((listItem: any, listIndex: number) => (
                            <li key={listIndex}>
                              {listItem.children.map((child: any, childIndex: number) => child.text || "No content available")}
                            </li>
                          ))}
                        </ol>
                      );
                    } else {
                      return null;
                    }
                  })}
                </div>
              </div>
            </CardContent>
          )}

          {hasValidContent(tool.UseCases) && (
            <CardContent className="pt-6">
              <div className="rounded-lg border border-[#333333] p-6">
                <h2 className="text-xl font-semibold text-white mb-4">{tool.name} Use Cases</h2>
                <div className="text-white leading-relaxed">
                  {tool.UseCases.map((block: any, index: number) => (
                    <p key={index}>{block.children[0]?.text}</p>
                  ))}
                </div>
              </div>
            </CardContent>
          )}

          {tool.preview && (
            <CardContent className="pt-6">
              <div className="rounded-lg border border-[#333333] p-6">
                <h2 className="text-xl font-semibold text-white mb-4">{tool.name} Preview</h2>
                <div className="text-white leading-relaxed">
                  <Image
                    src={tool.preview}
                    alt={tool.name}
                    width={1200}
                    height={675}
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          )}

          {tool.DemoVideo && (
            <CardContent className="pt-6">
              <div className="rounded-lg border border-[#333333] p-6">
                <h2 className="text-xl font-semibold text-white mb-4">{tool.name} Demo Video</h2>
                <div className="text-white leading-relaxed">
                  {tool.DemoVideo.includes("youtube.com") ? (
                    <iframe
                      src={tool.DemoVideo.replace("watch?v=", "embed/")}
                      title={tool.name}
                      width="100%"
                      height="400"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <p>Unsupported video format</p>
                  )}
                </div>
              </div>
            </CardContent>
          )}
        </Card>
      </div>
      </div>
      <FooterSectionCopy />
    </>
  );
}