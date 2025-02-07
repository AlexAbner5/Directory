'use client';

import { useState, useEffect } from 'react';
import { ToolCard } from './ToolCard';
import { ShowAllButton } from './ShowAllButton';
import { CategoryFilter } from '../search/CategoryFilter';
import { getSaasTools } from '@/lib/production/get-saas-tools';

interface ToolsGridProps {
  searchQuery: string;
}

interface Tool {
  id: number;
  name: string;
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
  Name: string;
  logo?: {
    url: string;
  };
  logoUrl: string;
  description: any[];
  slug: string;
  preview: string;
  Description: string;
}

export function ToolsGrid({ searchQuery }: ToolsGridProps) {
  const [tools, setTools] = useState<Tool[]>([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);

  useEffect(() => {
    const fetchTools = async () => {
      const data = await getSaasTools();
      setTools(data);
    };
    fetchTools();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleShowAll = () => {
    setVisibleCount(tools.length);
  };

  const filteredTools = tools.filter(tool => {
    console.log('Tool aiimagecategory:', tool.aiimagecategory?.name);
    console.log('Selected category:', selectedCategory);
    
    const matchesCategory = selectedCategory === "All" 
      ? true 
      : tool.aiimagecategory?.name === selectedCategory;

    const matchesSearch = debouncedSearchQuery === "" 
      ? true 
      : tool.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-[#1c1c1c] py-12">
      <CategoryFilter onCategoryChange={setSelectedCategory} />
      <div className="container mx-auto px-4">
        {filteredTools.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              
              {filteredTools.slice(0, visibleCount).map((tool) => (
                <ToolCard 
                  key={tool.slug}
                  tool={{
                    id: tool.id,
                    Name: tool.name,
                    Description: tool.description,
                    category: tool.category,
                    aiimagecategory: tool.aiimagecategory,
                    logo: {
                      url: tool.logoUrl
                    },
                    Preview: {
                      url: tool.preview
                    },
                    slug: tool.slug
                  }} 
                />
              ))}
              
            </div>
            {visibleCount < filteredTools.length && (
              <ShowAllButton onShowAll={handleShowAll} />
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              Not found
            </p>
          </div>
        )}
      </div>
    </section>
  );
}