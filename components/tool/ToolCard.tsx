'use client';

import Image from 'next/image';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import Link from 'next/link';

interface ToolCardProps {
  tool: {
    id: number;
    Name: string;
    Description: any[];
    category: {
      name: string;
      id: number;
      slug: string;
    };
    aiimagecategory: {
      name: string;
      id: number;
      slug: string;
    };
    logo?: {
      url: string;
    };
    Preview?: {
      url: string;
    };
    slug: string;
  };
}

export function ToolCard({ tool }: ToolCardProps) {
  const { Name, Description, category, logo, aiimagecategory, slug } = tool;
  const imageUrl = logo?.url || '/placeholder.jpg';

  console.log(imageUrl)

  return (
    <Link href={`/tools/${slug}`}>
    <div className="bg-[#1c1c1c] rounded-2xl border-4 overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
      <div className="aspect-[4/3] relative">
        <Image
          src={imageUrl}
          alt={Name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800/5" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white">{Name}</h3>
        <div className="text-gray-300 text-sm line-clamp-2 mb-2">
          <BlocksRenderer content={Description} />
        </div>
        <p className="text-gray-400 text-xs italic">Category: {category.name}</p>
        <p className="text-gray-400 text-xs italic">Sub Category: {aiimagecategory.name}</p>
      </div>
      </div>
    </Link>
  );
}