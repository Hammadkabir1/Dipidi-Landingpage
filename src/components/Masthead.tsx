const Masthead = () => {
  return (
    <header className="text-center py-4 sm:py-6 px-2 sm:px-4 border-b-2 border-ink">
      {/* Top FULL WIDTH divider line */}
      <hr className="thick-rule w-full mb-2 sm:mb-3" />

      {/* Main header row - VOL | DIPIDI | SPECIAL REPORT on same line */}
      <div className="flex items-center justify-between w-full gap-0.5 sm:gap-2 md:gap-4 my-2 sm:my-3">
        {/* Left: VOL. 001 with EXPANDING divider lines */}
        <div className="flex-1 text-left flex flex-col items-start min-w-0 max-w-[28%] sm:max-w-none">
          <hr className="border-t-2 border-ink w-full mb-1" />
          <div className="w-full">
            <p className="font-typewriter text-[0.65rem] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-tight sm:tracking-widest uppercase text-ink font-black leading-tight">
              <span className="block sm:inline">VOL. 001</span>
              <span className="block sm:inline text-[0.5rem] sm:text-xs md:text-sm lg:text-base xl:text-lg"> - social operator</span>
            </p>
          </div>
          <hr className="border-t-2 border-ink w-full mt-1" />
        </div>

        {/* Center: DIPIDI (bigger & bolder) */}
        <div className="flex-shrink-0 px-0.5 sm:px-2 md:px-4">
          <h1 className="font-blackletter text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[11rem] text-ink font-black tracking-wide whitespace-nowrap" style={{ fontWeight: 900 }}>
            Dipidi
          </h1>
        </div>

        {/* Right: iOS & Android Apps Coming Soon with EXPANDING divider lines */}
        <div className="flex-1 text-right flex flex-col items-end min-w-0 max-w-[28%] sm:max-w-none">
          <hr className="border-t-2 border-ink w-full mb-1" />
          <div className="w-full">
            <p className="font-typewriter text-[0.65rem] sm:text-sm md:text-base lg:text-lg xl:text-xl tracking-tight sm:tracking-widest uppercase text-ink font-black leading-tight text-right">
              <span className="hidden md:inline whitespace-nowrap">iOS & Android Apps Coming Soon</span>
              <span className="md:hidden">iOS Apps Coming Soon</span>
            </p>
          </div>
          <hr className="border-t-2 border-ink w-full mt-1" />
        </div>
      </div>

      {/* Bottom FULL WIDTH divider line with "The" sitting on it */}
      <div className="relative">
        <hr className="thick-rule w-full mt-3" />
        <p className="absolute left-[30%] sm:left-1/3 top-0 transform -translate-x-1/2 -translate-y-[70%] font-blackletter text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-ink font-black">
          The
        </p>
      </div>

      {/* Subhead bar with dates on same line */}
      <div className="double-line max-w-full mx-auto mt-2">
        <div className="flex items-center justify-between gap-0.5 sm:gap-2 md:gap-4">
          {/* Left date */}
          <span className="font-typewriter text-[0.6rem] sm:text-sm md:text-base lg:text-lg tracking-tight sm:tracking-wider uppercase text-ink font-bold whitespace-nowrap">
            Feb 14, 2026
          </span>

          {/* Center heading with stars */}
          <p className="font-headline text-[0.55rem] sm:text-xs md:text-sm lg:text-base tracking-[0.05em] sm:tracking-[0.2em] md:tracking-[0.35em] uppercase text-ink font-bold text-center flex-1 px-0.5 sm:px-1">
            ★ The Social Revolutionary Report of Record ★
          </p>

          {/* Right date */}
          <span className="font-typewriter text-[0.6rem] sm:text-sm md:text-base lg:text-lg tracking-tight sm:tracking-wider uppercase text-ink font-bold whitespace-nowrap">
            Gen Z, 2026
          </span>
        </div>
      </div>
    </header>
  );
};

export default Masthead;
