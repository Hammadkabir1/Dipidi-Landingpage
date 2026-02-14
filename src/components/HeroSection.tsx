import heroImage from "@/assets/hero-friends.jpg";
import { Play } from "lucide-react";
import FlippingHeadline from "@/components/FlippingHeadline";

const HeroSection = () => {
  return (
    <section className="max-w-full mx-auto px-2 sm:px-4 pt-3 sm:pt-4 pb-2">
      {/* Main headline - directly on newspaper background */}
      <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-ink ink-heavy leading-[0.95] tracking-tight uppercase mb-2 text-center" style={{ wordSpacing: '0.3em' }}>
        Time for a Social Revolution.
      </h2>

      <p className="font-body text-base sm:text-xl md:text-2xl lg:text-3xl font-normal text-ink ink-bleed mb-3 sm:mb-4 max-w-full mx-auto text-center px-2" style={{ wordSpacing: '0.3em' }}>
        Not just another app. A system that gets you back into <span className="font-headline font-black">real life.</span>
      </p>

      <hr className="thin-rule mb-3 sm:mb-4" />

      {/* DOUBLE-LINED RECTANGLE wrapping BOTH sections */}
      <div className="border-2 sm:border-4 border-double border-ink p-2 sm:p-4 md:p-6">
        {/* Two column: both with rectangle borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-start">
        {/* Left column - Rectangle border (NO RIGHT BORDER) with FLIPPING ANIMATION */}
        <div className="border-t-2 border-l-2 border-b-2 md:border-r-0 border-r-2 border-ink p-3 sm:p-4 md:p-6">
          <FlippingHeadline />
        </div>

        {/* Right column - Rectangle border around video with bottom shadow */}
        <div className="border-2 border-ink p-3" style={{
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3), inset 0 0 25px rgba(0,0,0,0.07), inset 0 0 50px rgba(0,0,0,0.03)',
          backgroundImage: 'url(/headline-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          clipPath: 'polygon(0.3% 0.8%, 1.5% 0.2%, 3% 0.6%, 5% 0.3%, 8% 0.7%, 12% 0.4%, 15% 0.8%, 20% 0.5%, 25% 0.7%, 30% 0.3%, 35% 0.6%, 40% 0.4%, 45% 0.7%, 50% 0.3%, 55% 0.6%, 60% 0.4%, 65% 0.7%, 70% 0.5%, 75% 0.8%, 80% 0.4%, 85% 0.6%, 90% 0.5%, 93% 0.7%, 96% 0.4%, 98.5% 0.6%, 99.7% 0.3%, 99.8% 5%, 99.6% 10%, 99.9% 15%, 99.5% 20%, 99.8% 25%, 99.4% 30%, 99.7% 35%, 99.5% 40%, 99.8% 45%, 99.6% 50%, 99.7% 55%, 99.5% 60%, 99.8% 65%, 99.4% 70%, 99.7% 75%, 99.5% 80%, 99.8% 85%, 99.6% 90%, 99.7% 93%, 99.5% 96%, 99.8% 98.5%, 99.4% 99.7%, 98.5% 99.6%, 96% 99.8%, 93% 99.5%, 90% 99.7%, 85% 99.4%, 80% 99.6%, 75% 99.5%, 70% 99.8%, 65% 99.4%, 60% 99.7%, 55% 99.5%, 50% 99.8%, 45% 99.4%, 40% 99.6%, 35% 99.5%, 30% 99.8%, 25% 99.4%, 20% 99.7%, 15% 99.5%, 12% 99.8%, 8% 99.4%, 5% 99.6%, 3% 99.5%, 1.5% 99.8%, 0.3% 99.4%, 0.2% 98.5%, 0.5% 96%, 0.3% 93%, 0.6% 90%, 0.4% 85%, 0.7% 80%, 0.5% 75%, 0.8% 70%, 0.4% 65%, 0.6% 60%, 0.5% 55%, 0.7% 50%, 0.4% 45%, 0.6% 40%, 0.5% 35%, 0.7% 30%, 0.4% 25%, 0.6% 20%, 0.5% 15%, 0.7% 10%, 0.4% 5%)'
        }}>
          <div className="relative overflow-hidden">
            <div className="halftone">
              <img
                src={heroImage}
                alt="Friends gathering together at a table"
                className="w-full aspect-video object-cover"
                style={{
                  filter: 'grayscale(100%) contrast(1.1) brightness(0.95)'
                }}
              />
            </div>
            {/* Play button overlay */}
            <button className="absolute inset-0 flex items-center justify-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-[3px] border-ink bg-paper/30 backdrop-blur-sm flex items-center justify-center transition-transform group-hover:scale-110">
                <Play className="w-7 h-7 sm:w-9 sm:h-9 text-ink fill-ink ml-1" />
              </div>
            </button>
          </div>
          <p className="font-body text-sm sm:text-base md:text-lg lg:text-xl text-ink ink-bleed mt-2 text-center px-1">
            More presence.  <span className="font-bold">Less noise !</span>
          </p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
