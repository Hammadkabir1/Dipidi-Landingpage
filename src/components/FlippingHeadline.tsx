import { useState, useEffect } from 'react';

interface Headline {
  title: string;
  subtitle1: string;
  subtitle2: string;
  hasExclusiveBadge?: boolean;
  isCustomLayout?: boolean;
  link?: string;
  customText?: string;
}

const headlines: Headline[] = [
  {
    title: "Psychology Today",
    subtitle1: "The Emerging Problem",
    subtitle2: "of 'AI Psychosis'",
    isCustomLayout: true,
    link: "https://www.psychologytoday.com/us/blog/urban-survival/202507/the-emerging-problem-of-ai-psychosis"
  },
  {
    title: "Frontiers in Psychology",
    subtitle1: "Emotional AI and the rise",
    subtitle2: "of pseudo-intimacy",
    isCustomLayout: true,
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12488433/",
    
  },
  {
    title: "Forbes",
    subtitle1: "Studies Show Troubling Issues",
    subtitle2: "With Students And AI Companions",
    isCustomLayout: true,
    link: "https://www.forbes.com/sites/petergreene/2025/12/30/studies-show-issues-with-students-and-ai-companions"
  },
  {
    title: "Stanford",
    subtitle1: "Illusions of Intimacy",
    subtitle2: "Emotional Attachment in Human-AI Relationships",
    isCustomLayout: true,
    link: "https://scale.stanford.edu/ai/repository/illusions-intimacy-emotional-attachment-and-emerging-psychological-risks-human-ai",
    
  },
  {
    title: "Square Space",
    subtitle1: "The problem is not",
    subtitle2: "simply social isolation",
    isCustomLayout: true,
    link: "https://static1.squarespace.com/static/5b7c56e255b02c683659fe43/t/67001295042a0f327c6e6fab/1728058005340/Loneliness_+Brief+Report+2024_October_FINAL.pdf"
  },
  {
    title: "Fishers Health Department",
    subtitle1: "Loneliness Is More Dangerous",
    subtitle2: "Than Smoking 15 Cigarettes A Day",
    isCustomLayout: true,
    link: "https://health.fishersin.gov/loneliness-is-more-dangerous-than-smoking-15-cigarettes-a-day/"
  },
  {
    title: "Humane Tech",
    subtitle1: "How OpenAI's ChatGPT",
    subtitle2: "Guided a Teen to His Death",
    isCustomLayout: true,
    link: "https://www.humanetech.com/podcast/how-openai-s-chatgpt-guided-a-teen-to-his-death"
  },
  {
    title: "University of California San Francisco",
    subtitle1: "Chatbots' agreeableness",
    subtitle2: "is by design",
    isCustomLayout: true,
    link: "https://www.ucsf.edu/news/2026/01/431366/psychiatrists-hope-chat-logs-can-reveal-secrets-ai-psychosis",
    
  },
  {
    title: "The Guardian",
    subtitle1: "Loneliness is like hunger",
    subtitle2: "a signal we're lacking something for survival",
    isCustomLayout: true,
    link: "https://www.theguardian.com/lifeandstyle/2024/jan/29/us-surgeon-general-vivek-murthy-loneliness-mental-health-epidemic-social-media",
    
  },
  {
    title: "USA Today",
    subtitle1: "Gen Z is",
    subtitle2: "the loneliest generation",
    isCustomLayout: true,
    link: "https://www.usatoday.com/story/opinion/2018/05/03/gen-z-loneliest-generation-social-media-personal-interactions-column/574701002/"
  },
  {
    title: "The Dipidi Times",
    subtitle1: "OUR",
    subtitle2: "PURPOSE",
    isCustomLayout: true,
    link: "#",
    customText: "We weren't meant to live on black mirrors. They built machines to capture attention and our relationships paid the price. We can keep feeding the machine or we can take our lives back. The choice is ours."
  },
  {
    title: "The Wall Street Journal",
    subtitle1: "Why Are Our",
    subtitle2: "Attention Spans Shortening?",
    isCustomLayout: true,
    link: "https://www.wsj.com/articles/attention-spans-shortening-tiktok-social-media-gen-z-millenials-reading-education-focus-11667336185"
  },
  {
    title: "The New York Times",
    subtitle1: "How the Attention Economy",
    subtitle2: "Is Devouring Gen Z",
    isCustomLayout: true,
    link: "https://www.nytimes.com/2025/07/08/opinion/ezra-klein-podcast-kyla-scanlon.html"
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
      }, 1600);

    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const current = headlines[currentIndex];
  const next = headlines[nextIndex];

  return (
    <div className="relative overflow-hidden min-h-[320px] sm:min-h-[340px] md:min-h-[360px] lg:min-h-[400px] xl:min-h-[420px]">
      {/* Next page (revealed as current page peels) */}
      <div
        className="absolute inset-0"
        style={{ zIndex: 0 }}
      >
        <HeadlineContent headline={next} />
      </div>

      {/* Current page with peeling effect */}
      {!isFlipping && (
        <div
          className="absolute inset-0"
          style={{ zIndex: 2 }}
        >
          <HeadlineContent headline={current} />
        </div>
      )}

      {/* Peeling page overlay - Page curl and peel effect */}
      {isFlipping && (
        <div
          className="absolute inset-0 page-curl-container"
          style={{
            zIndex: 3,
            transformOrigin: 'top right',
            animation: 'pageCurlPeel 1.6s cubic-bezier(0.25, 0.1, 0.25, 1.0) forwards'
          }}
        >
          <div className="relative w-full h-full page-wrapper">
            <div className="page-front">
              <HeadlineContent headline={current} />
            </div>
            {/* Visible curl corner */}
            <div className="curl-corner"></div>
            {/* Curl shadow */}
            <div className="curl-shadow"></div>
          </div>
        </div>
      )}

      {/* Page curl and peel animation styles */}
      <style>{`
        @keyframes pageCurlPeel {
          0% {
            transform: perspective(1800px) rotateZ(0deg) rotateX(0deg) translate3d(0, 0, 0);
          }
          12% {
            transform: perspective(1800px) rotateZ(-5deg) rotateX(5deg) translate3d(-8px, 8px, 10px);
          }
          25% {
            transform: perspective(1800px) rotateZ(-15deg) rotateX(15deg) translate3d(-20px, 20px, 28px);
          }
          38% {
            transform: perspective(1800px) rotateZ(-28deg) rotateX(28deg) translate3d(-35px, 35px, 48px);
          }
          50% {
            transform: perspective(1800px) rotateZ(-45deg) rotateX(45deg) translate3d(-52px, 52px, 65px);
          }
          62% {
            transform: perspective(1800px) rotateZ(-65deg) rotateX(65deg) translate3d(-72px, 72px, 78px);
          }
          72% {
            transform: perspective(1800px) rotateZ(-85deg) rotateX(85deg) translate3d(-95px, 95px, 85px);
          }
          82% {
            transform: perspective(1800px) rotateZ(-110deg) rotateX(108deg) translate3d(-120px, 125px, 88px);
            opacity: 0.8;
          }
          90% {
            transform: perspective(1800px) rotateZ(-135deg) rotateX(130deg) translate3d(-145px, 155px, 90px);
            opacity: 0.4;
          }
          100% {
            transform: perspective(1800px) rotateZ(-160deg) rotateX(155deg) translate3d(-170px, 185px, 92px);
            opacity: 0;
          }
        }

        @keyframes curlCorner {
          0% {
            transform: translate(0, 0) rotateZ(0deg) scale(0);
            opacity: 0;
          }
          10% {
            transform: translate(-5px, 5px) rotateZ(-15deg) scale(0.3);
            opacity: 0.4;
          }
          25% {
            transform: translate(-15px, 15px) rotateZ(-35deg) scale(0.6);
            opacity: 0.7;
          }
          35% {
            transform: translate(-25px, 25px) rotateZ(-50deg) scale(0.8);
            opacity: 0.85;
          }
          45% {
            transform: translate(-38px, 38px) rotateZ(-68deg) scale(0.95);
            opacity: 0.9;
          }
          60% {
            transform: translate(-55px, 55px) rotateZ(-88deg) scale(1);
            opacity: 0.85;
          }
          75% {
            transform: translate(-75px, 75px) rotateZ(-110deg) scale(0.9);
            opacity: 0.6;
          }
          85% {
            transform: translate(-95px, 95px) rotateZ(-135deg) scale(0.7);
            opacity: 0.3;
          }
          100% {
            transform: translate(-120px, 120px) rotateZ(-160deg) scale(0.4);
            opacity: 0;
          }
        }

        @keyframes curlShadow {
          0% {
            opacity: 0;
          }
          15% {
            opacity: 0.2;
          }
          30% {
            opacity: 0.5;
          }
          45% {
            opacity: 0.7;
          }
          60% {
            opacity: 0.8;
          }
          75% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            opacity: 0;
          }
        }

        .page-curl-container {
          transform-style: preserve-3d;
          backface-visibility: visible;
        }

        .page-wrapper {
          transform-style: preserve-3d;
          position: relative;
          width: 100%;
          height: 100%;
        }

        .page-front {
          transform-style: preserve-3d;
          position: relative;
          width: 100%;
          height: 100%;
          box-shadow:
            -3px 3px 12px rgba(0,0,0,0.2),
            -8px 8px 25px rgba(0,0,0,0.15),
            -15px 15px 40px rgba(0,0,0,0.1);
        }

        .curl-corner {
          position: absolute;
          top: 0;
          right: 0;
          width: 120px;
          height: 120px;
          background:
            linear-gradient(
              135deg,
              rgba(240, 235, 220, 0.95) 0%,
              rgba(220, 215, 200, 0.9) 40%,
              rgba(180, 175, 160, 0.85) 70%,
              rgba(140, 135, 120, 0.8) 100%
            );
          border-radius: 0 0 0 100%;
          transform-origin: top right;
          animation: curlCorner 1.6s cubic-bezier(0.25, 0.1, 0.25, 1.0) forwards;
          pointer-events: none;
          box-shadow:
            -2px 2px 8px rgba(0,0,0,0.3),
            -4px 4px 15px rgba(0,0,0,0.2);
          border-left: 1px solid rgba(0,0,0,0.1);
          border-bottom: 1px solid rgba(0,0,0,0.1);
        }

        .curl-corner::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom left,
            rgba(255,255,255,0.4) 0%,
            rgba(255,255,255,0.1) 30%,
            transparent 60%
          );
          border-radius: 0 0 0 100%;
        }

        .curl-corner::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            transparent 0%,
            rgba(0,0,0,0.05) 40%,
            rgba(0,0,0,0.15) 70%,
            rgba(0,0,0,0.25) 100%
          );
          border-radius: 0 0 0 100%;
        }

        .curl-shadow {
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 50%;
          background: radial-gradient(
            ellipse at top right,
            rgba(0,0,0,0.4) 0%,
            rgba(0,0,0,0.25) 30%,
            rgba(0,0,0,0.15) 50%,
            rgba(0,0,0,0.05) 70%,
            transparent 100%
          );
          pointer-events: none;
          animation: curlShadow 1.6s cubic-bezier(0.25, 0.1, 0.25, 1.0) forwards;
          transform-origin: top right;
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
        className="w-full h-full p-2 sm:p-3 md:p-4 flex flex-col"
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
        <h2 className="font-blackletter text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-ink text-center mb-0.5 sm:mb-1 tracking-wide overflow-hidden text-ellipsis font-black px-1 leading-none">
          {headline.title}
        </h2>

        {/* Divider line with text on both sides */}
        <div className="relative my-0.5 sm:my-1">
          <hr className="border-t-2 border-ink" />
        </div>

        {/* Large subtitles */}
        <div className="flex-1 flex flex-col justify-center text-center px-1 py-1">
          <p className="font-headline text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-ink font-black leading-[0.9] uppercase mb-0.5">
            {headline.subtitle1}
          </p>
          <p className="font-headline text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-ink font-black leading-[0.9] uppercase">
            {headline.subtitle2}
          </p>
        </div>

        {/* Additional text line - same style as video caption */}
        {headline.customText && (
          <p className="font-body text-sm sm:text-base md:text-lg lg:text-xl text-ink ink-bleed text-center mb-0.5 px-2 leading-snug">
            {headline.customText}
          </p>
        )}

        {/* Arrow pointing down */}
        <div className="text-center mb-0.5">
          <span className="text-ink text-lg sm:text-xl">↓</span>
        </div>

        {/* View More Button */}
        <div className="text-center mb-0.5">
          <a
            href={headline.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-ink text-paper font-headline text-xs sm:text-sm md:text-base lg:text-lg font-bold uppercase px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-2.5 border-2 border-ink hover:bg-paper hover:text-ink transition-colors duration-200"
            style={{ letterSpacing: '0.1em' }}
          >
            FULL STORY
          </a>
        </div>

        <hr className="thick-rule mt-0.5" />
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
      <div className="text-center mt-2 mb-1">
        <span className="text-ink text-xl">↓</span>
      </div>

      {/* View More Button */}
      {headline.link && (
        <div className="text-center mb-2">
          <a
            href={headline.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-ink text-paper font-headline text-xs sm:text-sm md:text-base lg:text-lg font-bold uppercase px-4 sm:px-6 py-2 sm:py-2.5 border-2 border-ink hover:bg-paper hover:text-ink transition-colors duration-200"
            style={{ letterSpacing: '0.1em' }}
          >
            FULL STORY
          </a>
        </div>
      )}

      <hr className="thick-rule my-2" />
    </div>
  );
};

export default FlippingHeadline;
