import React, { useState } from 'react';

export default function Pricing({ onOpenConsole, onOpenDemo }) {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const isAnnual = billingPeriod === 'annual';

  return (
    <section id="pricing" className="px-4 sm:px-6 lg:px-12 py-20 max-w-[1440px] mx-auto w-full">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary-container/20 border border-primary/30 text-primary font-mono text-xs uppercase tracking-wider mb-4 font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          <span>Payload &amp; Uplink Licensing</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight mb-4">
          Predictable Pricing for Ground &amp; Orbit
        </h2>
        <p className="font-sans text-base text-on-surface-variant mb-8 leading-relaxed">
          Transparent mission billing. Scale effortlessly from experimental university CubeSats to multi-satellite
          sovereign space programs.
        </p>

        {/* Monthly / Annual Toggle */}
        <div className="flex items-center gap-2 p-1.5 rounded-full bg-surface-container-high border border-outline-variant/40 shadow-inner">
          <button
            onClick={() => setBillingPeriod('monthly')}
            className={`px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all font-bold ${
              !isAnnual ? 'bg-primary-container text-on-primary shadow-md' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setBillingPeriod('annual')}
            className={`px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 ${
              isAnnual ? 'bg-primary-container text-on-primary font-bold shadow-md' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span>Annual Contract</span>
            <span className="text-secondary text-[11px] font-mono font-bold bg-secondary/15 px-1.5 py-0.5 rounded border border-secondary/30">
              -20%
            </span>
          </button>
        </div>
      </div>

      {/* 3 Tiered Glassmorphic Plans */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {/* Tier 1: Sub-Orbital Pioneer */}
        <div className="rounded-3xl bg-surface-container-low/70 backdrop-blur-xl border border-outline-variant/30 p-8 flex flex-col justify-between shadow-xl transition-all duration-300 hover:scale-[1.01] hover:border-outline/50">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-on-surface-variant font-bold">
                  Sub-Orbital
                </span>
                <h3 className="font-display text-2xl font-bold text-on-surface">Pioneer</h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-on-surface-variant">
                <span className="material-symbols-outlined text-[20px]">flight</span>
              </div>
            </div>
            <p className="font-sans text-sm text-on-surface-variant mb-6 min-h-[40px]">
              Ideal for early CubeSat trials, technological demos &amp; university educational research missions.
            </p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="font-display text-4xl font-bold text-on-surface font-mono">
                {isAnnual ? '$1,199' : '$1,499'}
              </span>
              <span className="font-mono text-xs text-on-surface-variant">/ month</span>
            </div>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2.5 text-sm text-on-surface">
                <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                <span>Up to 3 active satellites</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-on-surface">
                <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                <span>5 GB daily telemetry downlink</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-on-surface">
                <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                <span>Standard ground station access (S-Band)</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-on-surface">
                <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                <span>Community SLA &amp; orbital discord triage</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-on-surface-variant opacity-50">
                <span className="material-symbols-outlined text-[18px]">block</span>
                <span>Autonomous station-keeping AI</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => onOpenDemo('Pioneer Plan Trial')}
            className="w-full py-3.5 px-4 rounded-xl bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/40 text-on-surface text-center font-sans text-sm font-semibold transition-all hover:border-outline/60"
          >
            Start Trial
          </button>
        </div>

        {/* Tier 2: Constellation Pro (POPULAR / HIGHLIGHTED) */}
        <div className="relative rounded-3xl bg-surface-container/90 backdrop-blur-2xl border-2 border-primary/50 p-8 flex flex-col justify-between shadow-[0_0_40px_rgba(183,109,255,0.25)] lg:scale-105 transition-all duration-300">
          {/* Luminous Purple Popular Badge */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-container to-secondary text-on-primary font-mono text-[11px] uppercase tracking-widest font-bold px-4 py-1 rounded-full shadow-lg">
            POPULAR • MISSION READY
          </div>
          <div>
            <div className="flex items-center justify-between mb-4 mt-2">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-primary font-bold">
                  Commercial Grade
                </span>
                <h3 className="font-display text-2xl font-bold text-on-surface">Constellation Pro</h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-primary-container/20 border border-primary/40 flex items-center justify-center text-primary shadow-[0_0_12px_rgba(183,109,255,0.3)]">
                <span className="material-symbols-outlined text-[20px]">all_inclusive</span>
              </div>
            </div>
            <p className="font-sans text-sm text-on-surface-variant mb-6 min-h-[40px]">
              Designed for commercial satellite operators requiring real-time orbital control and global mesh ingestion.
            </p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="font-display text-4xl font-bold text-on-surface font-mono">
                {isAnnual ? '$3,919' : '$4,899'}
              </span>
              <span className="font-mono text-xs text-on-surface-variant">/ month</span>
            </div>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2.5 text-sm text-on-surface font-medium">
                <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                <span>Up to 25 commercial satellites</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-on-surface font-medium">
                <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                <span>Unlimited telemetry &amp; sensory downlink</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-on-surface font-medium">
                <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                <span>Autonomous station-keeping &amp; anti-drift AI</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-on-surface font-medium">
                <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                <span>99.99% Uplink SLA guarantee</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-on-surface font-medium">
                <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                <span>24/7 dedicated orbital flight controllers</span>
              </div>
            </div>
          </div>
          <button
            onClick={onOpenConsole}
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-inverse-primary to-primary-container text-on-primary text-center font-sans text-sm font-bold shadow-[0_0_24px_rgba(183,109,255,0.4)] hover:shadow-[0_0_36px_rgba(183,109,255,0.65)] hover:scale-[1.01] active:scale-[0.98] transition-all"
          >
            Launch Constellation Pro
          </button>
        </div>

        {/* Tier 3: Deep Space Enterprise */}
        <div className="rounded-3xl bg-surface-container-low/70 backdrop-blur-xl border border-outline-variant/30 p-8 flex flex-col justify-between shadow-xl transition-all duration-300 hover:scale-[1.01] hover:border-outline/50">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-secondary font-bold">
                  Planetary Fleet
                </span>
                <h3 className="font-display text-2xl font-bold text-on-surface">Deep Space Enterprise</h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-secondary-container/20 border border-secondary/40 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[20px]">rocket</span>
              </div>
            </div>
            <p className="font-sans text-sm text-on-surface-variant mb-6 min-h-[40px]">
              For sovereign defense commands, lunar transport operators, and global telecommunication consortia.
            </p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="font-display text-4xl font-bold text-on-surface font-mono">Custom</span>
              <span className="font-mono text-xs text-on-surface-variant">/ bespoke contract</span>
            </div>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2.5 text-sm text-on-surface">
                <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                <span>Dedicated dish arrays &amp; steerable ground relays</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-on-surface">
                <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                <span>Custom crypto keys (FIPS 140-3 Type 1)</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-on-surface">
                <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                <span>Unlimited constellation telemetry pipeline</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-on-surface">
                <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                <span>On-premise hardware edge server appliances</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-on-surface">
                <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                <span>Bespoke rideshare manifest &amp; launch staging</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => onOpenDemo('Deep Space Enterprise')}
            className="w-full py-3.5 px-4 rounded-xl bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/40 text-on-surface text-center font-sans text-sm font-semibold transition-all hover:border-outline/60"
          >
            Contact Mission Command
          </button>
        </div>
      </div>
    </section>
  );
}
