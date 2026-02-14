import Masthead from "@/components/Masthead";
import HeroSection from "@/components/HeroSection";
import RevolutionHeroSection from "@/components/RevolutionHeroSection";
import WayOutSection from "@/components/WayOutSection";
import NewspaperFooter from "@/components/NewspaperFooter";

export default function NewspaperLandingPage() {
  return (
    <div className="newspaper-bg min-h-screen overflow-x-hidden">
      <div className="max-w-[1600px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <Masthead />
        <HeroSection />
        <RevolutionHeroSection />
        <WayOutSection />

        <NewspaperFooter />
      </div>
    </div>
  );
}
