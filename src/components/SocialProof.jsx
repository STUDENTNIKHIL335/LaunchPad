import React from 'react';

const partners = [
  { name: 'AERO_DYNAMICS', icon: 'token', color: 'text-primary' },
  { name: 'NOVA_SPACE', icon: 'adjust', color: 'text-secondary' },
  { name: 'HELIOS_ORBIT', icon: 'deployed_code', color: 'text-tertiary' },
  { name: 'VORTEX_RELAY', icon: 'blur_on', color: 'text-primary' },
  { name: 'POLARIS_DEFENSE', icon: 'grid_4x4', color: 'text-secondary' },
];

export default function SocialProof() {
  return (
    <section className="px-4 sm:px-6 lg:px-12 py-16 max-w-[1440px] mx-auto w-full border-t border-outline-variant/20">
      <div className="flex flex-col items-center">
        <span className="font-mono text-xs uppercase tracking-widest text-on-surface-variant font-semibold mb-10 text-center">
          Trusted by Aerospace Pioneers, Defense Contractors &amp; Constellation Operators
        </span>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center w-full max-w-5xl opacity-80">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-2 font-display text-base sm:text-lg font-bold tracking-tight text-on-surface-variant hover:text-on-surface transition-all cursor-default group hover:scale-105 ${
                idx === 4 ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              <span className={`material-symbols-outlined ${partner.color} text-[24px] group-hover:rotate-12 transition-transform`}>
                {partner.icon}
              </span>
              <span>{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
