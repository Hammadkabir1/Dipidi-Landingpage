const NewspaperFooter = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center">
      {/* Email signup section with footer background */}
      <div
        className="w-full px-2 sm:px-4 py-8 sm:py-10 md:py-12 mt-6 sm:mt-8 min-h-[350px] sm:min-h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: 'url(/footer-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundAttachment: 'scroll',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Centered card with email signup */}
        <div
          className="max-w-2xl w-full p-3 sm:p-4 md:p-5 lg:p-6 border-2 border-ink mx-2"
          style={{
            backgroundImage: 'url(/headline-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            boxShadow: '0 6px 16px rgba(0,0,0,0.6), inset 0 0 20px rgba(0,0,0,0.07), inset 0 0 40px rgba(0,0,0,0.03)',
            clipPath: 'polygon(0.3% 0.8%, 1.5% 0.2%, 3% 0.6%, 5% 0.3%, 8% 0.7%, 12% 0.4%, 15% 0.8%, 20% 0.5%, 25% 0.7%, 30% 0.3%, 35% 0.6%, 40% 0.4%, 45% 0.7%, 50% 0.3%, 55% 0.6%, 60% 0.4%, 65% 0.7%, 70% 0.5%, 75% 0.8%, 80% 0.4%, 85% 0.6%, 90% 0.5%, 93% 0.7%, 96% 0.4%, 98.5% 0.6%, 99.7% 0.3%, 99.8% 5%, 99.6% 10%, 99.9% 15%, 99.5% 20%, 99.8% 25%, 99.4% 30%, 99.7% 35%, 99.5% 40%, 99.8% 45%, 99.6% 50%, 99.7% 55%, 99.5% 60%, 99.8% 65%, 99.4% 70%, 99.7% 75%, 99.5% 80%, 99.8% 85%, 99.6% 90%, 99.7% 93%, 99.5% 96%, 99.8% 98.5%, 99.4% 99.7%, 98.5% 99.6%, 96% 99.8%, 93% 99.5%, 90% 99.7%, 85% 99.4%, 80% 99.6%, 75% 99.5%, 70% 99.8%, 65% 99.4%, 60% 99.7%, 55% 99.5%, 50% 99.8%, 45% 99.4%, 40% 99.6%, 35% 99.5%, 30% 99.8%, 25% 99.4%, 20% 99.7%, 15% 99.5%, 12% 99.8%, 8% 99.4%, 5% 99.6%, 3% 99.5%, 1.5% 99.8%, 0.3% 99.4%, 0.2% 98.5%, 0.5% 96%, 0.3% 93%, 0.6% 90%, 0.4% 85%, 0.7% 80%, 0.5% 75%, 0.8% 70%, 0.4% 65%, 0.6% 60%, 0.5% 55%, 0.7% 50%, 0.4% 45%, 0.6% 40%, 0.5% 35%, 0.7% 30%, 0.4% 25%, 0.6% 20%, 0.5% 15%, 0.7% 10%, 0.4% 5%)'
          }}
        >
        {/* Text content */}
        <div className="text-center mb-3 sm:mb-4">
          <p className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-ink font-bold mb-1 sm:mb-2 px-1">
            <span className="font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl">They</span> optimized for addiction.
          </p>
          <p className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-ink font-bold mb-3 sm:mb-4 px-1">
            <span className="font-black text-base text-xl sm:text-2xl md:text-3xl lg:text-4xl">We're</span> optimizing for presence.
          </p>
        </div>

        {/* Email input */}
        <div className="mb-2 sm:mb-3">
          <input
            type="email"
            placeholder="Join the waitlist for early access"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-ink bg-paper font-body text-sm sm:text-base md:text-lg text-ink placeholder-ink/60 focus:outline-none focus:border-ink focus:ring-2 focus:ring-ink/20"
          />
        </div>

        {/* Submit button */}
        <div className="text-center mb-2 sm:mb-3">
          <button className="font-headline text-sm sm:text-base md:text-lg lg:text-xl font-bold text-paper bg-ink border-l-2 border-r-2 border-ink px-6 sm:px-8 py-2 sm:py-3 uppercase tracking-wider sm:tracking-widest transition-all duration-300 hover:bg-paper hover:text-ink hover:scale-105 w-full sm:w-auto">
            Join Rebellion
          </button>
        </div>

        {/* Text below button */}
        <div className="text-center">
          <p className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-ink font-bold px-1">
            The shift starts with us.
          </p>
        </div>
        </div>
      </div>

      {/* Legal Information Section */}
      <div className="w-full mt-8 sm:mt-12 md:mt-16 px-4 py-6 sm:py-8">
        <div className="max-w-5xl mx-auto">
          {/* Row 1: Links with horizontal lines */}
          <div className="mb-6 sm:mb-8">
            <hr className="border-t-2 border-ink mb-3 sm:mb-4" />
            <div className="text-center">
              <a
                href="src\assets\PRIVACY POLICY Dipidi.docx"
                className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-ink hover:font-bold transition-all"
              >
                Privacy Policy
              </a>
              <span className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-ink mx-2 sm:mx-3">|</span>
              <a
                href="src\assets\TERMS OF SERVICE Dipidi.docx"
                className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-ink hover:font-bold transition-all"
              >
                Terms of Service
              </a>
            </div>
            <hr className="border-t-2 border-ink mt-3 sm:mt-4" />
          </div>

          {/* Row 2: Company Information - Centered */}
          <div className="text-center font-body text-xs sm:text-sm md:text-base lg:text-lg text-ink pb-4">
            <p className="mb-1">
              Dipidi™ is operated by JeneeUS, LLC, a Delaware limited liability company.
            </p>
            <p className="mb-1">
              Patent Pending.
            </p>
            <p>
              © 2026 JeneeUS, LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewspaperFooter;
