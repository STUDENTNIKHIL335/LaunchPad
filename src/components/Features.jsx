import React from 'react';

const features = [
  {
    category: 'Autonomy Engine',
    categoryColor: 'text-primary',
    iconBg: 'bg-primary-container/20 text-primary',
    icon: 'route',
    title: 'Autonomous Constellation Routing',
    description:
      'Real-time collision avoidance, orbital decay prediction, and AI-driven inter-satellite laser mesh coordination across dynamic polar orbits.',
    metric1: { label: 'Laser Link Latency', value: '1.8 ms', color: 'text-secondary' },
    metric2: { label: 'Conjunction Warning SLA', value: '< 30 sec', color: 'text-primary' },
  },
  {
    category: 'Avionics Ingestion',
    categoryColor: 'text-secondary',
    iconBg: 'bg-secondary-container/20 text-secondary',
    icon: 'sensors',
    title: 'Unified Telemetry & Downlink Stream',
    description:
      'Edge-processed payload sensor data, multi-band radio ingestion (S, X, Ka-band), with sub-second earth transmission pipelines and real-time indexing.',
    metric1: { label: 'Band Frequencies', value: 'S / X / Ka / Optical', color: 'text-secondary' },
    metric2: { label: 'Burst Downlink Rate', value: '10 Gbps', color: 'text-primary' },
  },
  {
    category: 'Rideshare Dispatch',
    categoryColor: 'text-tertiary',
    iconBg: 'bg-tertiary-container/20 text-tertiary',
    icon: 'flight_takeoff',
    title: 'Commercial Launch Orchestration',
    description:
      'Automated rideshare slot bidding, payload manifest compliance verification, and standardized multi-manifest deployment triggers across global spaceports.',
    metric1: { label: 'Launch Sites', value: '18 Global Pads', color: 'text-secondary' },
    metric2: { label: 'Dispenser Protocols', value: 'QuadPack / ISIPOD', color: 'text-primary' },
  },
];

export default function Features() {
  return (
    <section id="features" className="px-4 sm:px-6 lg:px-12 py-20 max-w-[1440px] mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-high border border-outline-variant/40 text-primary font-mono text-xs uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            <span>Telemetry Architecture</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-on-surface font-bold tracking-tight">
            Engineered for Aerospace Scale
          </h2>
        </div>
        <p className="font-sans text-base text-on-surface-variant max-w-md leading-relaxed">
          From CubeSat fleets to mega-constellations, build on orbital infrastructure designed for zero downtime and
          millisecond mission execution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="group relative rounded-3xl bg-surface-container-low/60 backdrop-blur-xl border border-outline-variant/30 p-8 flex flex-col justify-between shadow-xl hover:bg-surface-container/80 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1.5"
          >
            <div className="w-full">
              <div
                className={`w-14 h-14 rounded-2xl ${feature.iconBg} border border-current/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
              >
                <span className="material-symbols-outlined text-[30px]">{feature.icon}</span>
              </div>
              <span className={`font-mono text-xs uppercase tracking-widest font-bold ${feature.categoryColor}`}>
                {feature.category}
              </span>
              <h3 className="font-display text-xl font-semibold text-on-surface mt-2 mb-3">
                {feature.title}
              </h3>
              <p className="font-sans text-sm text-on-surface-variant mb-6 leading-relaxed">
                {feature.description}
              </p>
            </div>

            <div className="w-full pt-4 border-t border-outline-variant/20 flex flex-col gap-2">
              <div className="flex items-center justify-between text-on-surface-variant font-mono text-xs">
                <span>{feature.metric1.label}</span>
                <span className={`${feature.metric1.color} font-bold`}>{feature.metric1.value}</span>
              </div>
              <div className="flex items-center justify-between text-on-surface-variant font-mono text-xs">
                <span>{feature.metric2.label}</span>
                <span className={`${feature.metric2.color} font-bold`}>{feature.metric2.value}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
