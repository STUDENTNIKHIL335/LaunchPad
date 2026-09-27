import React, { useState } from 'react';

const clusters = {
  leo: {
    id: 'leo',
    icon: 'satellite',
    title: 'LEO Reconnaissance Cluster (Polar)',
    desc: '420km Sun-Synchronous • 92.4 min period',
    status: 'LOCKED',
    statusColor: 'text-secondary bg-secondary/10 border-secondary/30',
    modeTitle: 'SYS_LEO_ORBIT_STREAM // ACTIVE',
    speed: '7.66 km/s',
    alt: '418.2 km',
    snr: '24.8 dB',
    pass: '07m 42s',
    doppler: '+0.024 Hz',
    satellites: [
      { cx: '72%', cy: '32%', fill: '#7bd0ff', r: 6 },
      { cx: '28%', cy: '66%', fill: '#ddb7ff', r: 5 },
      { cx: '85%', cy: '54%', fill: '#a476ff', r: 4 },
      { cx: '45%', cy: '25%', fill: '#7bd0ff', r: 4 },
    ],
  },
  geo: {
    id: 'geo',
    icon: 'hub',
    title: 'GEO Comms Trunk Alpha',
    desc: '35,786km Equatorial • Stationary zero-drift',
    status: 'STANDBY',
    statusColor: 'text-primary bg-primary/10 border-primary/30',
    modeTitle: 'SYS_GEO_STATIC_EQUATORIAL // ACTIVE',
    speed: '3.07 km/s',
    alt: '35,786 km',
    snr: '31.2 dB',
    pass: 'CONTINUOUS',
    doppler: '-0.002 Hz',
    satellites: [
      { cx: '88%', cy: '48%', fill: '#ddb7ff', r: 7 },
      { cx: '14%', cy: '52%', fill: '#7bd0ff', r: 6 },
      { cx: '50%', cy: '12%', fill: '#a476ff', r: 5 },
    ],
  },
  cislunar: {
    id: 'cislunar',
    icon: 'explore',
    title: 'Cislunar Deep-Space Relay',
    desc: 'Lagrange Point L2 • Cryptographic Relay',
    status: 'CALIBRATING',
    statusColor: 'text-tertiary bg-tertiary/10 border-tertiary/30',
    modeTitle: 'SYS_CISLUNAR_L2_RELAY // SYNCED',
    speed: '1.02 km/s',
    alt: '384,400 km',
    snr: '14.6 dB',
    pass: '24h LOCK',
    doppler: '+0.089 Hz',
    satellites: [
      { cx: '92%', cy: '20%', fill: '#a476ff', r: 7 },
      { cx: '80%', cy: '82%', fill: '#ddb7ff', r: 5 },
    ],
  },
};

export default function OrbitalTelemetry() {
  const [selectedCluster, setSelectedCluster] = useState('leo');
  const activeData = clusters[selectedCluster];

  return (
    <section id="telemetry" className="px-4 sm:px-6 lg:px-12 py-20 max-w-[1440px] mx-auto w-full">
      <div className="rounded-3xl bg-surface-container-lowest border border-outline-variant/30 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
        {/* Background technical dot grid */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ddb7ff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-10 relative z-10">
          {/* Left Column: Interactive Controls */}
          <div className="w-full lg:w-5/12 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-secondary-container/20 border border-secondary/30 text-secondary font-mono text-xs uppercase tracking-widest w-fit mb-4 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                <span>Real-Time Constellation Mesh</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-on-surface mb-4 tracking-tight">
                Planetary Vector Tracking &amp; Cryptographic Uplink
              </h2>

              <p className="font-sans text-sm sm:text-base text-on-surface-variant mb-8 leading-relaxed">
                Live telemetry ingestion across 6 continental ground station clusters with Zero-Trust hardware token
                authentication per individual microsatellite node.
              </p>

              {/* Interactive Cluster Selector Tabs */}
              <div className="flex flex-col gap-3 mb-8">
                {Object.values(clusters).map((cluster) => {
                  const isActive = selectedCluster === cluster.id;
                  return (
                    <button
                      key={cluster.id}
                      onClick={() => setSelectedCluster(cluster.id)}
                      className={`flex items-center justify-between p-4 rounded-2xl text-left transition-all border ${
                        isActive
                          ? 'bg-surface-container-high border-secondary/50 shadow-lg shadow-secondary/5 text-on-surface'
                          : 'bg-surface-container-low/70 border-outline-variant/30 text-on-surface-variant hover:text-on-surface hover:bg-surface-container hover:border-outline/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                            isActive ? 'bg-secondary/20 text-secondary' : 'bg-surface-container text-on-surface-variant'
                          }`}
                        >
                          <span className="material-symbols-outlined text-[20px]">{cluster.icon}</span>
                        </div>
                        <div>
                          <div className="font-sans text-sm font-semibold text-on-surface">{cluster.title}</div>
                          <div className="font-mono text-xs text-on-surface-variant">{cluster.desc}</div>
                        </div>
                      </div>
                      <span
                        className={`font-mono text-[11px] px-2.5 py-1 rounded border font-bold tracking-wider ${cluster.statusColor}`}
                      >
                        {cluster.status}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Hardware crypto token badge */}
            <div className="p-4 rounded-xl bg-surface-container-low/90 border border-outline-variant/40 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-secondary text-[22px]">lock</span>
                <span className="font-mono text-xs uppercase tracking-wider text-on-surface">
                  FIPS 140-3 Hardware Crypto
                </span>
              </div>
              <span className="font-mono text-xs text-secondary font-bold bg-secondary/10 px-2 py-0.5 rounded border border-secondary/20">
                ED25519-ST
              </span>
            </div>
          </div>

          {/* Right Column: Telemetry Canvas Display HUD */}
          <div className="w-full lg:w-7/12 flex flex-col justify-between">
            <div className="relative w-full aspect-[4/3] rounded-2xl bg-surface-container-low border border-outline-variant/40 p-6 flex flex-col justify-between overflow-hidden shadow-inner">
              {/* Simulated Vector Radar HUD SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="orbitGrad" x1="0%" x2="100%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#ddb7ff" stopOpacity="0.8"></stop>
                    <stop offset="50%" stopColor="#00a6e0" stopOpacity="0.4"></stop>
                    <stop offset="100%" stopColor="#ddb7ff" stopOpacity="0.8"></stop>
                  </linearGradient>
                </defs>

                {/* Grid crosshairs */}
                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />

                {/* Orbital Rings with Slow Spin */}
                <ellipse
                  className="animate-[spin_40s_linear_infinite] origin-center"
                  cx="50%"
                  cy="50%"
                  fill="none"
                  rx="44%"
                  ry="32%"
                  stroke="url(#orbitGrad)"
                  strokeDasharray="6 4"
                  strokeWidth="1.5"
                ></ellipse>
                <ellipse
                  className="text-secondary/30"
                  cx="50%"
                  cy="50%"
                  fill="none"
                  rx="30%"
                  ry="20%"
                  stroke="currentColor"
                  strokeWidth="1"
                ></ellipse>
                <ellipse
                  className="text-primary/30"
                  cx="50%"
                  cy="50%"
                  fill="none"
                  rx="18%"
                  ry="10%"
                  stroke="currentColor"
                  strokeDasharray="3 3"
                  strokeWidth="1"
                ></ellipse>

                {/* Center Planetary Node */}
                <circle cx="50%" cy="50%" fill="#1b1f2c" r="28" stroke="#ddb7ff" strokeWidth="2"></circle>
                <circle className="animate-pulse" cx="50%" cy="50%" fill="#00a6e0" r="14"></circle>

                {/* Dynamic Satellite Positions */}
                <g className="transition-all duration-700">
                  {activeData.satellites.map((sat, idx) => (
                    <g key={idx}>
                      <line
                        x1="50%"
                        y1="50%"
                        x2={sat.cx}
                        y2={sat.cy}
                        stroke={sat.fill}
                        strokeDasharray="2 4"
                        strokeWidth="1"
                        opacity="0.6"
                      />
                      <circle cx={sat.cx} cy={sat.cy} fill={sat.fill} r={sat.r} className="animate-ping opacity-40" />
                      <circle cx={sat.cx} cy={sat.cy} fill={sat.fill} r={sat.r} />
                    </g>
                  ))}
                </g>
              </svg>

              {/* Screen Upper Metadata */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2 bg-surface-container-highest/90 border border-outline-variant/40 px-3.5 py-1 rounded-full backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  <span className="font-mono text-xs uppercase text-on-surface font-semibold">
                    {activeData.modeTitle}
                  </span>
                </div>
                <div className="font-mono text-xs text-secondary bg-secondary/10 border border-secondary/20 px-3 py-1 rounded">
                  DOPPLER: {activeData.doppler}
                </div>
              </div>

              {/* Screen Center Crosshairs Coordinates */}
              <div className="relative z-10 flex flex-col items-center pointer-events-none py-6">
                <div className="font-display text-4xl sm:text-5xl font-mono text-on-surface font-bold tracking-tight">
                  {activeData.speed}
                </div>
                <div className="font-mono text-xs text-primary uppercase tracking-widest mt-1">
                  Current Orbital Velocity
                </div>
              </div>

              {/* Screen Bottom Console Readout */}
              <div className="relative z-10 grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-outline-variant/40 bg-surface-container-lowest/90 backdrop-blur-md p-4 rounded-xl border">
                <div>
                  <span className="font-mono text-[11px] text-on-surface-variant block uppercase">Elevation</span>
                  <span className="font-display text-lg sm:text-xl font-mono text-on-surface font-semibold">
                    {activeData.alt}
                  </span>
                </div>
                <div>
                  <span className="font-mono text-[11px] text-on-surface-variant block uppercase">Downlink SNR</span>
                  <span className="font-display text-lg sm:text-xl font-mono text-secondary font-semibold">
                    {activeData.snr}
                  </span>
                </div>
                <div>
                  <span className="font-mono text-[11px] text-on-surface-variant block uppercase">Pass Window</span>
                  <span className="font-display text-lg sm:text-xl font-mono text-primary font-semibold">
                    {activeData.pass}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
