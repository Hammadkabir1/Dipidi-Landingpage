import OptimizedImage from "@/components/OptimizedImage";

const RevolutionHeroSection = () => {
  return (
    <section className="max-w-full mx-auto px-2 sm:px-3 md:px-5 py-3 sm:py-4 md:py-6">
      {/* Full-width image background container - Responsive height */}
      <div
        className="relative w-full overflow-hidden min-h-[350px] sm:min-h-[420px] md:min-h-[470px] lg:min-h-[570px]"
        style={{
          border: '2px solid #1d1a16',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.6), inset 0 1px 2px rgba(0, 0, 0, 0.5)'
        }}
      >
        {/* IMAGE FILLS ENTIRE RECTANGLE - Background */}
        <OptimizedImage
          src="/revolution-hero.webp"
          alt="Break the Black Mirror - Join the Revolution"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: 'center center'
          }}
        />

        {/* TEXT OVERLAID ON TOP OF IMAGE */}
        <div className="relative z-10 px-4 pb-4 sm:p-6 md:p-8 lg:p-12 flex flex-col min-h-[350px] sm:min-h-[420px] md:min-h-[470px] lg:min-h-[570px] max-w-2xl">
          <div className="mt-auto pt-48 sm:pt-56 md:pt-64 lg:pt-32 xl:pt-24">
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-paper uppercase tracking-tight leading-none mb-2 sm:mb-3 md:mb-4 lg:mb-6"
                style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9), 0 0 15px rgba(0, 0, 0, 0.5)'
                }}>
              BREAK THE<br />
              BLACK MIRROR.
            </h2>

            <div className="space-y-0.5 sm:space-y-1 md:space-y-2 mb-4 sm:mb-6 lg:mb-8">
              <p className="font-body text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-paper leading-relaxed"
                 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}>
                Connection didn't disappear.
              </p>
              <p className="font-body text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-paper leading-relaxed"
                 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}>
                It was rerouted.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative film grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-20"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
            backgroundSize: '200px 200px'
          }}
        ></div>
      </div>
    </section>
  );
};

export default RevolutionHeroSection;
