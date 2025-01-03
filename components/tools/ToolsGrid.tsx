'use client';

import { ToolCard } from './ToolCard';
import { ShowAllButton } from './ShowAllButton';
import { tools } from './data/tools';

export function ToolsGrid() {
  return (
    <section className="bg-[#1c1c1c] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.id} {...tool} />
          ))}
        </div>
        <ShowAllButton />
      </div>
    </section>
  );
}