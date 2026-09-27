import React from 'react';

export default function CtaBanner({ onOpenConsole, onOpenDemo }) {
  return (
    <section className="px-4 sm:px-6 lg:px-12 pt-12 pb-24 max-w-[1440px] mx-auto w-full">
      <div className="relative rounded-3xl bg-gradient-to-b from-surface-container-high via-surface-container to-surface-container-lowest border border-outline-variant/40 p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl flex flex-col items-center text-center">
        {/* Glow ambient backdrop */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-container/25 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-primary-container/20 border border-primary/40 flex items-center justify-center text-primary mb-6 shadow-xl shadow-primary/10">
            <span className="material-symbols-outlined text-[36px]">satellite_alt</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface mb-6 tracking-tight">
            Ready to launch your orbital infrastructure?
          </h2>

          <p className="font-sans text-base sm:text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
            Connect your flight hardware to the LaunchPad OS telemetry kernel in under 48 hours. Zero ground station capex.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#pricing"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-inverse-primary to-primary-container text-on-primary font-sans text-base font-semibold shadow-[0_0_30px_rgba(183,109,255,0.4)] hover:shadow-[0_0_40px_rgba(183,109,255,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Get Started Now
            </a>
            <button
              onClick={() => onOpenDemo('Aerospace Consultation')}
              className="px-8 py-3.5 rounded-xl bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/40 text-on-surface font-sans text-base font-semibold transition-all hover:border-secondary/40"
            >
              Talk to Aerospace Engineer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
