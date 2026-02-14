import { useState, useEffect } from 'react';

interface Headline {
  title: string;
  subtitle1: string;
  subtitle2: string;
  hasExclusiveBadge?: boolean;
  isCustomLayout?: boolean;
}

const headlines: Headline[] = [
  {
    title: "Gen Z is lonelier than any<br />generation on record.",
    subtitle1: "They engineered addiction.",
    subtitle2: "We're rebuilding presence.",
    hasExclusiveBadge: true
  },
  {
    title: "The New York Times",
    subtitle1: "Gen Z shortened",
    subtitle2: "attention spans",
    isCustomLayout: true
  }
];

const FlippingHeadline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (currentIndex + 1) % headlines.length;
      setNextIndex(next);
      setIsFlipping(true);

      setTimeout(() => {
        setCurrentIndex(next);
        setIsFlipping(false);
      }, 1000);

    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const current = headlines[currentIndex];
  const next = headlines[nextIndex];

  return (
    <div className="relative overflow-visible min-h-[320px] sm:min-h-[340px] md:min-h-[360px] lg:min-h-[400px] xl:min-h-[420px]">
      {/* Current page */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${isFlipping ? 'opacity-0' : 'opacity-100'}`}
        style={{ zIndex: isFlipping ? 1 : 2 }}
      >
        <HeadlineContent headline={current} />
      </div>

      {/* Flipping page overlay - Book-style page turn */}
      {isFlipping && (
        <div
          className="absolute inset-0 page-turn"
          style={{
            zIndex: 3,
            transformOrigin: 'right center',
            animation: 'pageTurn 1s ease-in-out forwards'
          }}
        >
          <div className="relative w-full h-full bg-paper"
               style={{
                 boxShadow: '-5px 0 15px rgba(0,0,0,0.3)',
                 background: 'linear-gradient(to left, rgba(0,0,0,0.1) 0%, transparent 10%)'
               }}>
            <HeadlineContent headline={current} />
          </div>
        </div>
      )}

      {/* Next page (revealed as current page turns) */}
      <div
        className={`absolute inset-0 ${isFlipping ? 'opacity-100' : 'opacity-0'}`}
        style={{ zIndex: 0 }}
      >
        <HeadlineContent headline={next} />
      </div>

      {/* Page turn animation styles */}
      <style>{`
        @keyframes pageTurn {
          0% {
            transform: perspective(2000px) rotateY(0deg);
          }
          50% {
            transform: perspective(2000px) rotateY(-90deg);
            opacity: 0.8;
          }
          100% {
            transform: perspective(2000px) rotateY(-180deg);
            opacity: 0;
          }
        }

        .page-turn {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

// Separate component for headline content
const HeadlineContent = ({ headline }: { headline: Headline }) => {
  // CUSTOM LAYOUT FOR HEADLINE 2 (New York Times style)
  if (headline.isCustomLayout) {
    return (
      <div
        className="w-full h-full p-3 sm:p-4 md:p-6"
        style={{
          backgroundImage: 'url(/headline-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          boxShadow: 'inset 0 0 25px rgba(0,0,0,0.07), inset 0 0 50px rgba(0,0,0,0.03)',
          clipPath: 'polygon(0.3% 0.8%, 1.5% 0.2%, 3% 0.6%, 5% 0.3%, 8% 0.7%, 12% 0.4%, 15% 0.8%, 20% 0.5%, 25% 0.7%, 30% 0.3%, 35% 0.6%, 40% 0.4%, 45% 0.7%, 50% 0.3%, 55% 0.6%, 60% 0.4%, 65% 0.7%, 70% 0.5%, 75% 0.8%, 80% 0.4%, 85% 0.6%, 90% 0.5%, 93% 0.7%, 96% 0.4%, 98.5% 0.6%, 99.7% 0.3%, 99.8% 5%, 99.6% 10%, 99.9% 15%, 99.5% 20%, 99.8% 25%, 99.4% 30%, 99.7% 35%, 99.5% 40%, 99.8% 45%, 99.6% 50%, 99.7% 55%, 99.5% 60%, 99.8% 65%, 99.4% 70%, 99.7% 75%, 99.5% 80%, 99.8% 85%, 99.6% 90%, 99.7% 93%, 99.5% 96%, 99.8% 98.5%, 99.4% 99.7%, 98.5% 99.6%, 96% 99.8%, 93% 99.5%, 90% 99.7%, 85% 99.4%, 80% 99.6%, 75% 99.5%, 70% 99.8%, 65% 99.4%, 60% 99.7%, 55% 99.5%, 50% 99.8%, 45% 99.4%, 40% 99.6%, 35% 99.5%, 30% 99.8%, 25% 99.4%, 20% 99.7%, 15% 99.5%, 12% 99.8%, 8% 99.4%, 5% 99.6%, 3% 99.5%, 1.5% 99.8%, 0.3% 99.4%, 0.2% 98.5%, 0.5% 96%, 0.3% 93%, 0.6% 90%, 0.4% 85%, 0.7% 80%, 0.5% 75%, 0.8% 70%, 0.4% 65%, 0.6% 60%, 0.5% 55%, 0.7% 50%, 0.4% 45%, 0.6% 40%, 0.5% 35%, 0.7% 30%, 0.4% 25%, 0.6% 20%, 0.5% 15%, 0.7% 10%, 0.4% 5%)'
        }}
      >
        {/* Gothic masthead title - THE NEW YORK TIMES on single line - BOLDER */}
        <h2 className="font-blackletter text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-ink text-center mb-2 sm:mb-3 mt-2 sm:mt-3 tracking-wide overflow-hidden text-ellipsis font-black px-1">
          {headline.title}
        </h2>

        {/* Divider line with text on both sides */}
        <div className="relative my-2 sm:my-3">
          <hr className="border-t-2 border-ink" />
          <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-1 sm:px-2" style={{ transform: 'translateY(-70%)' }}>
            <span className="px-1 sm:px-2 font-typewriter text-[0.55rem] sm:text-xs md:text-sm text-ink font-bold">
              
            </span>
            <span className="px-1 sm:px-2 font-typewriter text-[0.55rem] sm:text-xs md:text-sm text-ink font-bold">
              
            </span>
          </div>
        </div>

        {/* Large subtitles */}
        <div className="mt-2 sm:mt-3 mb-2 text-center space-y-1 sm:space-y-2 px-1">
          <p className="font-headline text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-ink font-black leading-tight uppercase">
            {headline.subtitle1}
          </p>
          <p className="font-headline text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-ink font-black leading-tight uppercase">
            {headline.subtitle2}
          </p>
        </div>

        {/* Additional text line - same style as video caption */}
        <p className="font-body text-sm sm:text-base md:text-lg text-ink ink-bleed text-center mb-2 px-2">
          We're not the problem. The system is.
        </p>

        {/* Arrow pointing down */}
        <div className="text-center mt-2 mb-2">
          <span className="text-ink text-xl">↓</span>
        </div>

        <hr className="thick-rule my-2" />
      </div>
    );
  }

  // DEFAULT LAYOUT (for headline 1)
  return (
    <div
      className="w-full h-full p-3 sm:p-4 md:p-6"
      style={{
        backgroundImage: 'url(/headline-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxShadow: 'inset 0 0 25px rgba(0,0,0,0.07), inset 0 0 50px rgba(0,0,0,0.03)',
        clipPath: 'polygon(0.3% 0.8%, 1.5% 0.2%, 3% 0.6%, 5% 0.3%, 8% 0.7%, 12% 0.4%, 15% 0.8%, 20% 0.5%, 25% 0.7%, 30% 0.3%, 35% 0.6%, 40% 0.4%, 45% 0.7%, 50% 0.3%, 55% 0.6%, 60% 0.4%, 65% 0.7%, 70% 0.5%, 75% 0.8%, 80% 0.4%, 85% 0.6%, 90% 0.5%, 93% 0.7%, 96% 0.4%, 98.5% 0.6%, 99.7% 0.3%, 99.8% 5%, 99.6% 10%, 99.9% 15%, 99.5% 20%, 99.8% 25%, 99.4% 30%, 99.7% 35%, 99.5% 40%, 99.8% 45%, 99.6% 50%, 99.7% 55%, 99.5% 60%, 99.8% 65%, 99.4% 70%, 99.7% 75%, 99.5% 80%, 99.8% 85%, 99.6% 90%, 99.7% 93%, 99.5% 96%, 99.8% 98.5%, 99.4% 99.7%, 98.5% 99.6%, 96% 99.8%, 93% 99.5%, 90% 99.7%, 85% 99.4%, 80% 99.6%, 75% 99.5%, 70% 99.8%, 65% 99.4%, 60% 99.7%, 55% 99.5%, 50% 99.8%, 45% 99.4%, 40% 99.6%, 35% 99.5%, 30% 99.8%, 25% 99.4%, 20% 99.7%, 15% 99.5%, 12% 99.8%, 8% 99.4%, 5% 99.6%, 3% 99.5%, 1.5% 99.8%, 0.3% 99.4%, 0.2% 98.5%, 0.5% 96%, 0.3% 93%, 0.6% 90%, 0.4% 85%, 0.7% 80%, 0.5% 75%, 0.8% 70%, 0.4% 65%, 0.6% 60%, 0.5% 55%, 0.7% 50%, 0.4% 45%, 0.6% 40%, 0.5% 35%, 0.7% 30%, 0.4% 25%, 0.6% 20%, 0.5% 15%, 0.7% 10%, 0.4% 5%)'
      }}
    >
      {/* EXCLUSIVE Badge - Only for first headline */}
      {headline.hasExclusiveBadge && (
        <>
          <div className="mb-2 sm:mb-3 flex justify-center items-center gap-1 sm:gap-2 overflow-hidden px-1">
            <span className="text-ink text-xs sm:text-sm md:text-base hidden sm:inline">✦✦✦✦✦✦✦✦✦✦</span>
            <span className="text-ink text-xs sm:hidden">✦✦✦✦✦</span>
            <span
              className="bg-ink text-paper font-headline text-sm sm:text-lg md:text-xl lg:text-2xl font-bold uppercase px-3 sm:px-4 md:px-6 py-1 sm:py-2 whitespace-nowrap"
              style={{ letterSpacing: '0.3em' }}
            >
              EXCLUSIVE
            </span>
            <span className="text-ink text-xs sm:text-sm md:text-base hidden sm:inline">✦✦✦✦✦✦✦✦✦✦</span>
            <span className="text-ink text-xs sm:hidden">✦✦✦✦✦</span>
          </div>
          <hr className="border-t-2 border-ink my-2 sm:my-3" />
        </>
      )}

      {/* Headline */}
      <h3
        className="font-headline text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-ink leading-tight mb-2 sm:mb-3 text-center tracking-wide uppercase px-1"
        dangerouslySetInnerHTML={{ __html: headline.title }}
      />

      {/* Divider lines with "Filed from" text */}
      <hr className="border-t-2 border-ink my-2" />
      <p className="font-typewriter text-xs sm:text-sm md:text-base lg:text-lg text-ink text-center tracking-wider mb-2 px-1">
        Filed from: <span className="font-bold">The Real World</span>
      </p>
      <hr className="border-t-2 border-ink my-2" />

      {/* Two short lines */}
      <div className="mt-2 sm:mt-3 mb-1 sm:mb-2 text-center space-y-1 px-1">
        <p className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-ink ink-bleed font-bold">
          {headline.subtitle1}
        </p>
        <p className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-ink ink-bleed font-bold">
          {headline.subtitle2}
        </p>
      </div>

      {/* Arrow pointing down */}
      <div className="text-center mt-2 mb-2">
        <span className="text-ink text-xl">↓</span>
      </div>

      <hr className="thick-rule my-2" />
    </div>
  );
};

export default FlippingHeadline;
