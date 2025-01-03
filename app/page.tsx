import { Header } from '@/components/Header';
import { HeroSection } from '@/components/hero/HeroSection';
import { SearchSection } from '@/components/search/SearchSection';
import { ToolsGrid } from '@/components/tools/ToolsGrid';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <SearchSection />
      <ToolsGrid />
    </>
  );
}