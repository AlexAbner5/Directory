"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getCategories } from "@/lib/production/get-categories";

interface CategoryFilterProps {
  onCategoryChange: (aiimagecategories: string) => void;
}

export function CategoryFilter({ onCategoryChange }: CategoryFilterProps) {
  const [aiimagecategories, setCategories] = useState<string[]>(["All"]);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      const categoryNames = data.map((cat: { name: string }) => cat.name);
      setCategories(["All", ...categoryNames]);
    };
    fetchCategories();
  }, []);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    console.log("aiimagecategories:", category); // Debug

    onCategoryChange(category);
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const containerWidth = container.offsetWidth;
      const scrollAmount = containerWidth * 0.8;

      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full max-w-[1200px] mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scroll("left")}
          className="flex-none p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-[#333333]"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>

        <div
          ref={scrollContainerRef}
          className="flex-1 overflow-x-auto flex items-center gap-4 py-2 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {aiimagecategories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryClick(category)}
              className={`flex-none px-4 py-2 rounded-full text-sm transition-all ${
                activeCategory === category
                  ? "bg-[#333333] text-white shadow-lg"
                  : "bg-transparent text-gray-400 hover:text-white border border-[#333333] hover:bg-[#333333]"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scroll("right")}
          className="flex-none p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-[#333333]"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
}
