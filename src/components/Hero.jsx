import React, { useState, useEffect } from 'react';

export default function Hero({ onOpenConsole, onOpenDemo }) {
  // Animated countdown timer for insertion window
  const [secondsLeft, setSecondsLeft] = useState(15735); // ~ 4h 22m 15s

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 15735));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `T-0${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <section id="platform" className="relative px-4 sm:px-6 lg:px-12 pt-8 pb-16 max-w-[1440px] mx-auto w-full flex flex-col items-center">
      {/* Orbital Pill Badge */}
      <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-surface-container-high/80 backdrop-blur-md border border-outline-variant/40 shadow-lg shadow-primary/5 mb-8 hover:border-secondary/50 transition-colors">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
        </span>
        <span className="font-mono text-xs uppercase tracking-widest text-secondary font-medium">
          LAUNCHPAD OS 3.0 • ORBITAL LOGISTICS INFRASTRUCTURE
        </span>
      </div>

      {/* Hero Typography */}
      <div className="text-center max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-on-surface font-bold tracking-tight mb-6 leading-[1.1]">
          The Mission Control Operating System for the{' '}
          <span className="bg-gradient-to-r from-primary via-secondary to-primary-container bg-clip-text text-transparent">
            New Space Economy
          </span>
        </h1>
        <p className="font-sans text-base sm:text-lg text-on-surface-variant max-w-3xl mb-10 leading-relaxed">
          Orchestrate satellite constellations, automate telemetry pipelines, and schedule commercial payload launches
          through one unified API and cloud mission control console.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#pricing"
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-inverse-primary to-primary-container text-on-primary font-sans text-base font-semibold shadow-[0_0_32px_rgba(183,109,255,0.4)] hover:shadow-[0_0_44px_rgba(183,109,255,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Get Started</span>
            <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
              rocket_launch
            </span>
          </a>

          <button
            onClick={() => onOpenDemo('Orbital Mission Demo')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-surface-container/70 backdrop-blur-xl border border-outline-variant/40 text-secondary hover:text-on-surface font-sans text-base font-semibold hover:bg-surface-container-high transition-all shadow-md hover:border-secondary/40"
          >
            <span className="material-symbols-outlined text-[20px] text-secondary">play_circle</span>
            <span>Schedule Orbital Demo</span>
          </button>
        </div>
      </div>

      {/* Live Telemetry Stat Ribbon */}
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 max-w-6xl">
        <div className="p-5 rounded-2xl bg-surface-container-low/70 backdrop-blur-md border border-outline-variant/30 flex flex-col justify-between shadow-sm hover:border-primary/40 transition-all">
          <span className="font-mono text-xs uppercase tracking-wider text-on-surface-variant mb-1">
            Active Constellations
          </span>
          <div className="flex items-baseline gap-1">
            <span className="font-display text-3xl sm:text-4xl font-bold text-on-surface tracking-tight">4,820</span>
            <span className="font-mono text-lg text-primary font-bold">+</span>
          </div>
          <div className="flex items-center gap-1.5 mt-2 text-secondary font-mono text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            <span>Global synchronized</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-surface-container-low/70 backdrop-blur-md border border-outline-variant/30 flex flex-col justify-between shadow-sm hover:border-secondary/40 transition-all">
          <span className="font-mono text-xs uppercase tracking-wider text-on-surface-variant mb-1">
            Uplink Reliability
          </span>
          <div className="flex items-baseline gap-1">
            <span className="font-display text-3xl sm:text-4xl font-bold text-on-surface tracking-tight">99.999</span>
            <span className="font-mono text-lg text-secondary font-bold">%</span>
          </div>
          <div className="flex items-center gap-1.5 mt-2 text-secondary font-mono text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            <span>Zero packet loss lock</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-surface-container-low/70 backdrop-blur-md border border-outline-variant/30 flex flex-col justify-between shadow-sm hover:border-primary/40 transition-all">
          <span className="font-mono text-xs uppercase tracking-wider text-on-surface-variant mb-1">
            Launch Providers
          </span>
          <div className="flex items-baseline gap-1">
            <span className="font-display text-3xl sm:text-4xl font-bold text-on-surface tracking-tight">14</span>
            <span className="font-mono text-xs text-tertiary font-bold ml-1">API Verified</span>
          </div>
          <div className="flex items-center gap-1.5 mt-2 text-primary font-mono text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            <span>Multi-manifest native</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-surface-container-low/70 backdrop-blur-md border border-outline-variant/30 flex flex-col justify-between shadow-sm hover:border-secondary/40 transition-all">
          <span className="font-mono text-xs uppercase tracking-wider text-on-surface-variant mb-1">
            Ground Telemetry Delay
          </span>
          <div className="flex items-baseline gap-1">
            <span className="font-display text-3xl sm:text-4xl font-bold text-secondary tracking-tight">&lt;12</span>
            <span className="font-mono text-lg text-secondary font-bold">ms</span>
          </div>
          <div className="flex items-center gap-1.5 mt-2 text-secondary font-mono text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            <span>Optical sub-reflector array</span>
          </div>
        </div>
      </div>

      {/* Hero Visual Showcase Frame with Overlay Telemetry Cards */}
      <div className="w-full max-w-6xl relative rounded-3xl overflow-hidden bg-surface-container-lowest border border-outline-variant/40 shadow-[0_0_60px_rgba(183,109,255,0.15)] group">
        <div className="relative w-full aspect-[16/9] max-h-[640px]">
          <img
            alt="Orbital space station orchestrating satellite fleet"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV4M8iCPAO7KM6VZ3pMYe3vjmzjbD3HOlXdJXBtLdVYSpRNF9emnBrEIFpOnLiiNHWqhL3oSIidt56ClVkT5jsHK9-cT5NPEliBrCIzudDy0qIB3CTQ_CPK1qcONYfqNt6BhI7ncC-vrSdCQU0FH1ed7PlX1losy_Xwa_h5lcbigaAan6hAj1y0UT38MsiZwRq3wElvLVkY4WWFzoG7A69dJ7jYdV5ESD8sxEzJCMvlK0NThJj_i2r"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/20 to-transparent"></div>
          <div className="absolute inset-0 bg-[#0a0e1a]/30 backdrop-brightness-95"></div>

          {/* Cockpit HUD Grid Lines (Subtle SVG overlay) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient cx="50%" cy="50%" id="crosshairGlow" r="50%">
                <stop offset="0%" stopColor="#ddb7ff" stopOpacity="0.3"></stop>
                <stop offset="100%" stopColor="#00a6e0" stopOpacity="0"></stop>
              </radialGradient>
            </defs>
            <circle className="text-secondary/40 animate-pulse" cx="50%" cy="50%" fill="none" r="220" stroke="currentColor" strokeDasharray="4 6"></circle>
            <circle className="text-primary/30" cx="50%" cy="50%" fill="none" r="380" stroke="currentColor" strokeDasharray="2 12"></circle>
            <line className="text-secondary/15" stroke="currentColor" strokeDasharray="6 6" x1="50%" x2="50%" y1="0" y2="100%"></line>
            <line className="text-secondary/15" stroke="currentColor" strokeDasharray="6 6" x1="0" x2="100%" y1="50%" y2="50%"></line>
          </svg>

          {/* Floating Telemetry Card: Top Left */}
          <div className="absolute top-4 left-4 sm:top-8 sm:left-8 p-4 rounded-xl bg-surface-container-lowest/85 backdrop-blur-2xl border border-secondary/30 shadow-xl max-w-xs transition-all hover:scale-105">
            <div className="flex items-center justify-between gap-3 mb-1">
              <span className="font-mono text-xs text-secondary uppercase font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
                Constellation Alpha-7
              </span>
              <span className="text-[11px] text-on-surface-variant font-mono">NODE #88</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-on-surface font-medium">Synchronized State</span>
              <span className="text-[10px] text-secondary bg-secondary/10 px-2 py-0.5 rounded font-mono font-bold uppercase">
                Nominal
              </span>
            </div>
            <div className="mt-2 w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
              <div className="bg-gradient-to-r from-secondary to-primary h-full w-[96%] animate-pulse"></div>
            </div>
          </div>

          {/* Floating Telemetry Card: Top Right */}
          <div className="absolute top-4 right-4 sm:top-8 sm:right-8 p-4 rounded-xl bg-surface-container-lowest/85 backdrop-blur-2xl border border-primary/30 shadow-xl max-w-xs transition-all hover:scale-105 hidden sm:block">
            <div className="flex items-center gap-2 mb-1">
              <span className="material-symbols-outlined text-primary text-[18px]">satellite_alt</span>
              <span className="font-mono text-xs text-primary uppercase font-bold">Orbital Insertion Window</span>
            </div>
            <div className="font-display text-2xl font-mono text-on-surface tracking-wider font-semibold">
              {formatTime(secondsLeft)}
            </div>
            <div className="flex items-center justify-between mt-1 text-on-surface-variant font-mono text-xs">
              <span>Perigee: 342 km</span>
              <span>Apogee: 550 km</span>
            </div>
          </div>

          {/* Floating Telemetry Card: Bottom Center */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 p-4 rounded-2xl bg-surface-container-lowest/90 backdrop-blur-2xl border border-outline-variant/40 shadow-2xl flex items-center gap-6 max-w-lg w-[calc(100%-2rem)] sm:w-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary border border-secondary/20">
                <span className="material-symbols-outlined text-[24px]">public</span>
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase text-secondary font-bold">Ground Station Mesh</div>
                <div className="text-sm font-sans text-on-surface font-semibold">68 Nodes Connected</div>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4 pl-4 border-l border-outline-variant/30">
              <div>
                <div className="text-[11px] font-mono text-on-surface-variant">Throughput</div>
                <div className="text-sm text-primary font-mono font-bold">142.8 Gbps</div>
              </div>
              <div className="h-6 w-12 flex items-end gap-1">
                <div className="w-2 bg-secondary h-[40%] rounded-t-sm animate-pulse"></div>
                <div className="w-2 bg-secondary h-[70%] rounded-t-sm animate-pulse" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 bg-primary h-[95%] rounded-t-sm animate-pulse" style={{ animationDelay: '300ms' }}></div>
                <div className="w-2 bg-primary-container h-[85%] rounded-t-sm animate-pulse" style={{ animationDelay: '450ms' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
