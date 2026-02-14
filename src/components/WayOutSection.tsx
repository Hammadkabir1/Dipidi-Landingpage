const WayOutSection = () => {
  const cards = [
    {
      title: "Learns Your Circle",
      description: "Understands you and your existing friends — preferences, budgets, energy levels, and who fits where.",
    },
    {
      title: "Integrates New People Seamlessly",
      description: "Helps new connections find their place within your current circles so relationships don't fade.",
    },
    {
      title: "Turns Intent Into Real Plans",
      description: "Transforms 'we should hang' into structured, recurring real-world gatherings.",
    },
  ];

  return (
    <section className="max-w-full mx-auto px-2 sm:px-4 py-3 sm:py-4">
      {/* Section header */}
      <div className="flex items-center gap-2 sm:gap-3 mb-3">
        <div className="h-1 flex-1 bg-ink" />
        <h3 className="font-headline text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-ink ink-heavy uppercase tracking-tight text-center px-1" style={{ wordSpacing: '0.3em' }}>
          WHAT DIPIDI DOES
        </h3>
        <div className="h-1 flex-1 bg-ink" />
      </div>

      <p className="font-body text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-ink ink-bleed text-center mb-4 sm:mb-6 px-2" style={{ wordSpacing: '0.2em' }}>
        They want your attention. We want your presence
      </p>

      {/* Three cards with brighter background */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 items-stretch">
        {cards.map((card, index) => (
          <div key={card.title} className="flex items-center gap-2">
            {/* Card */}
            <div
              className="flex-1 p-4 sm:p-5 md:p-5 lg:p-6 border-2 border-ink flex flex-col justify-center"
              style={{
                backgroundImage: 'url(/headline-bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                boxShadow: '0 4px 12px rgba(0,0,0,0.5), inset 0 0 20px rgba(0,0,0,0.07), inset 0 0 40px rgba(0,0,0,0.03)',
                clipPath: 'polygon(0.3% 0.8%, 1.5% 0.2%, 3% 0.6%, 5% 0.3%, 8% 0.7%, 12% 0.4%, 15% 0.8%, 20% 0.5%, 25% 0.7%, 30% 0.3%, 35% 0.6%, 40% 0.4%, 45% 0.7%, 50% 0.3%, 55% 0.6%, 60% 0.4%, 65% 0.7%, 70% 0.5%, 75% 0.8%, 80% 0.4%, 85% 0.6%, 90% 0.5%, 93% 0.7%, 96% 0.4%, 98.5% 0.6%, 99.7% 0.3%, 99.8% 5%, 99.6% 10%, 99.9% 15%, 99.5% 20%, 99.8% 25%, 99.4% 30%, 99.7% 35%, 99.5% 40%, 99.8% 45%, 99.6% 50%, 99.7% 55%, 99.5% 60%, 99.8% 65%, 99.4% 70%, 99.7% 75%, 99.5% 80%, 99.8% 85%, 99.6% 90%, 99.7% 93%, 99.5% 96%, 99.8% 98.5%, 99.4% 99.7%, 98.5% 99.6%, 96% 99.8%, 93% 99.5%, 90% 99.7%, 85% 99.4%, 80% 99.6%, 75% 99.5%, 70% 99.8%, 65% 99.4%, 60% 99.7%, 55% 99.5%, 50% 99.8%, 45% 99.4%, 40% 99.6%, 35% 99.5%, 30% 99.8%, 25% 99.4%, 20% 99.7%, 15% 99.5%, 12% 99.8%, 8% 99.4%, 5% 99.6%, 3% 99.5%, 1.5% 99.8%, 0.3% 99.4%, 0.2% 98.5%, 0.5% 96%, 0.3% 93%, 0.6% 90%, 0.4% 85%, 0.7% 80%, 0.5% 75%, 0.8% 70%, 0.4% 65%, 0.6% 60%, 0.5% 55%, 0.7% 50%, 0.4% 45%, 0.6% 40%, 0.5% 35%, 0.7% 30%, 0.4% 25%, 0.6% 20%, 0.5% 15%, 0.7% 10%, 0.4% 5%)'
              }}
            >
              <h4 className="font-headline text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-ink mb-2 sm:mb-3 text-center">
                {card.title}
              </h4>
              <p className="font-body text-base sm:text-lg md:text-lg lg:text-xl text-ink ink-bleed text-center leading-relaxed">
                {card.description}
              </p>
            </div>

            {/* Arrow between cards (not after last card) */}
            {index < cards.length - 1 && (
              <div className="hidden md:block text-ink text-2xl lg:text-3xl font-black">→</div>
            )}
          </div>
        ))}
      </div>

      {/* Bold divider lines at the end */}
      <hr className="thick-rule mt-4 sm:mt-6 mb-2" />
      <hr className="thick-rule mb-2 sm:mb-3" />
    </section>
  );
};

export default WayOutSection;
