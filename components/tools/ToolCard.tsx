'use client';

import Image from 'next/image';
import { Tool } from './data/tools';

interface ToolCardProps extends Tool {}

export function ToolCard({ name, description, users, purpose, image }: ToolCardProps) {
  return (
    <div className="bg-[#1c1c1c] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
      <div className="aspect-[4/3] relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800/50" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <span className="text-sm text-gray-400">{users} usuarios</span>
        </div>
        <p className="text-gray-300 text-sm line-clamp-2 mb-2">{description}</p>
        <p className="text-gray-400 text-xs italic">{purpose}</p>
      </div>
    </div>
  );
}