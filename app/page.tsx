'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/hero/HeroSection';
import { SearchSection } from '@/components/search/SearchSection';
import { ToolsGrid } from '@/components/tool/ToolsGrid';
import { FaqSection } from '@/components/Faq/FacSection';
import FooterSectionCopy from '@/components/Footer/FooterSectionCopy';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Header/>
      <HeroSection />
      <SearchSection onSearch={setSearchQuery} />
      <ToolsGrid searchQuery={searchQuery} />
      <FaqSection />
      <FooterSectionCopy />
    </>
  );
}