import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0e1a] border-t border-outline-variant/30 text-on-surface-variant">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-container to-secondary flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[#0a0e1a] text-[20px] font-bold">rocket_launch</span>
            </div>
            <span className="font-display text-xl text-on-surface font-bold">LaunchPad</span>
          </div>
          <p className="font-sans text-sm text-on-surface-variant max-w-sm leading-relaxed">
            Autonomous orbital logistics, high-velocity mission architecture, and deep-space infrastructure operating
            system.
          </p>
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 w-fit">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
            </span>
            <span className="font-mono text-xs text-on-surface uppercase">
              Low Earth Orbit Network: Optimal
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-mono text-xs uppercase tracking-wider text-on-surface font-bold">Platform</h4>
          <a href="#platform" className="font-sans text-sm text-on-surface-variant hover:text-secondary transition-colors">
            Orbital Fleet Vector
          </a>
          <a href="#features" className="font-sans text-sm text-on-surface-variant hover:text-secondary transition-colors">
            Propulsion Engine OS
          </a>
          <a href="#telemetry" className="font-sans text-sm text-on-surface-variant hover:text-secondary transition-colors">
            Real-Time Avionics
          </a>
          <a href="#pricing" className="font-sans text-sm text-on-surface-variant hover:text-secondary transition-colors">
            Payload Pricing Matrix
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-mono text-xs uppercase tracking-wider text-on-surface font-bold">Engineering</h4>
          <a href="#telemetry" className="font-sans text-sm text-on-surface-variant hover:text-secondary transition-colors">
            Telemetry API Docs
          </a>
          <a href="#calculator" className="font-sans text-sm text-on-surface-variant hover:text-secondary transition-colors">
            Trajectory Calculators
          </a>
          <a href="#" className="font-sans text-sm text-on-surface-variant hover:text-secondary transition-colors">
            SDKs &amp; Micro-Kernels
          </a>
          <a href="#" className="font-sans text-sm text-on-surface-variant hover:text-secondary transition-colors">
            Sub-orbital Relays
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-mono text-xs uppercase tracking-wider text-on-surface font-bold">Compliance &amp; Relay</h4>
          <a href="#" className="font-sans text-sm text-on-surface-variant hover:text-secondary transition-colors">
            ITU Spectrum Licenses
          </a>
          <a href="#" className="font-sans text-sm text-on-surface-variant hover:text-secondary transition-colors">
            ISO 27001 Orbital Security
          </a>
          <a href="#" className="font-sans text-sm text-on-surface-variant hover:text-secondary transition-colors">
            COSPAR Planetary Guidelines
          </a>
          <a href="#" className="font-sans text-sm text-on-surface-variant hover:text-secondary transition-colors">
            De-orbit Protocols
          </a>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-6 border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-on-surface-variant">
          &copy; 2026 LaunchPad Aeronautics &amp; Space Infrastructure Inc. All orbital parameters reserved.
        </div>
        <div className="flex items-center gap-4 text-on-surface-variant">
          <a href="#" className="hover:text-primary transition-colors" title="Telemetry Terminal">
            <span className="material-symbols-outlined text-[20px]">terminal</span>
          </a>
          <a href="#" className="hover:text-primary transition-colors" title="Constellation Mesh">
            <span className="material-symbols-outlined text-[20px]">hub</span>
          </a>
          <a href="#" className="hover:text-primary transition-colors" title="Telemetry Broadcast">
            <span className="material-symbols-outlined text-[20px]">share</span>
          </a>
          <a href="#" className="hover:text-primary transition-colors" title="Global Ground Network">
            <span className="material-symbols-outlined text-[20px]">public</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
