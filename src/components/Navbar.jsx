import React, { useState } from 'react';

export default function Navbar({ onOpenConsole, onOpenDemo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e1a]/85 backdrop-blur-xl border-b border-[#4d4354]/30">
      <div className="h-20 w-full px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4 max-w-[1440px] mx-auto">
        {/* Brand / Logo */}
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-container to-secondary flex items-center justify-center shadow-[0_0_16px_rgba(183,109,255,0.4)] group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[#0a0e1a] text-[24px] font-bold">rocket_launch</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-xl text-on-surface font-bold tracking-tight">LaunchPad</span>
              <span className="text-[10px] text-primary tracking-widest uppercase font-mono font-semibold -mt-1">OS 3.0</span>
            </div>
          </a>

          {/* LEO Status Badge */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full border border-outline-variant/40 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="font-label-sm text-[11px] text-secondary uppercase tracking-widest font-mono">LEO Net: Active</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-surface-container-low/70 border border-outline-variant/30">
          <a
            href="#platform"
            className="px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-full transition-all"
          >
            Platform
          </a>
          <a
            href="#features"
            className="px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-full transition-all"
          >
            Architecture
          </a>
          <a
            href="#telemetry"
            className="px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-full transition-all"
          >
            Orbital Telemetry
          </a>
          <a
            href="#calculator"
            className="px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-secondary font-semibold hover:bg-surface-container-high rounded-full transition-all flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            Payload HUD
          </a>
          <a
            href="#pricing"
            className="px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-full transition-all"
          >
            Pricing
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenDemo('Sign In')}
            className="hidden sm:inline-block font-label-md text-xs uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors px-3 py-2"
          >
            Sign In
          </button>

          <button
            onClick={onOpenConsole}
            className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-inverse-primary to-primary-container text-on-primary font-label-md text-xs uppercase tracking-wider font-semibold shadow-[0_0_20px_rgba(183,109,255,0.35)] hover:shadow-[0_0_28px_rgba(183,109,255,0.55)] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="material-symbols-outlined text-[16px]">terminal</span>
            <span>Launch Console</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0f131f]/95 backdrop-blur-2xl border-b border-outline-variant/30 px-6 py-4 flex flex-col gap-3">
          <a
            href="#platform"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-sm font-mono uppercase tracking-wider text-on-surface hover:text-primary transition-colors"
          >
            Platform
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-sm font-mono uppercase tracking-wider text-on-surface hover:text-primary transition-colors"
          >
            Architecture
          </a>
          <a
            href="#telemetry"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-sm font-mono uppercase tracking-wider text-on-surface hover:text-primary transition-colors"
          >
            Orbital Telemetry
          </a>
          <a
            href="#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-sm font-mono uppercase tracking-wider text-secondary font-semibold hover:text-secondary-fixed transition-colors"
          >
            Payload HUD Calculator
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-sm font-mono uppercase tracking-wider text-on-surface hover:text-primary transition-colors"
          >
            Pricing
          </a>
          <div className="pt-2 border-t border-outline-variant/30 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo('Sign In');
              }}
              className="text-xs uppercase font-mono tracking-wider text-on-surface-variant hover:text-on-surface"
            >
              Sign In
            </button>
            <div className="flex items-center gap-1.5 text-xs text-secondary font-mono">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              LEO Net: Active
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
