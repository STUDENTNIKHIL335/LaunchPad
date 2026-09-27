import React, { useState } from 'react';

const ORBITS = [
  { id: 'leo', name: 'Low Earth Orbit (LEO)', alt: '400 km', inc: '51.6°', baseDeltaV: 9.4, costPerKg: 3500 },
  { id: 'sso', name: 'Sun-Synchronous (SSO)', alt: '600 km', inc: '97.8°', baseDeltaV: 9.8, costPerKg: 4200 },
  { id: 'meo', name: 'Medium Earth Orbit (MEO)', alt: '2,020 km', inc: '55.0°', baseDeltaV: 11.2, costPerKg: 5800 },
  { id: 'geo', name: 'Geostationary (GTO)', alt: '35,786 km', inc: '0.0°', baseDeltaV: 12.8, costPerKg: 8900 },
];

const VEHICLES = [
  { id: 'falcon', name: 'Falcon 9 Rideshare', provider: 'SpaceX', maxPayload: 1500, leadTime: '45 days' },
  { id: 'electron', name: 'Electron Dedicated', provider: 'Rocket Lab', maxPayload: 300, leadTime: '21 days' },
  { id: 'ariane', name: 'Ariane 6 Secondary', provider: 'Arianespace', maxPayload: 1000, leadTime: '60 days' },
];

export default function PayloadCalculator({ onOpenConsole }) {
  const [selectedOrbit, setSelectedOrbit] = useState(ORBITS[1]);
  const [selectedVehicle, setSelectedVehicle] = useState(VEHICLES[0]);
  const [massKg, setMassKg] = useState(250);

  // Calculations
  const totalCost = massKg * selectedOrbit.costPerKg;
  const capacityPct = Math.min(100, Math.round((massKg / selectedVehicle.maxPayload) * 100));

  return (
    <section id="calculator" className="px-4 sm:px-6 lg:px-12 py-20 max-w-[1440px] mx-auto w-full">
      <div className="rounded-3xl bg-surface-container-low/80 border border-outline-variant/40 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden backdrop-blur-xl">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Left Inputs */}
          <div className="w-full lg:w-6/12 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary-container/20 border border-primary/30 text-primary font-mono text-xs uppercase tracking-widest w-fit mb-4 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span>Bespoke Domain Component</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-on-surface mb-3 tracking-tight">
              Orbital Payload &amp; Trajectory Calculator
            </h2>

            <p className="font-sans text-sm sm:text-base text-on-surface-variant mb-8 leading-relaxed">
              Dynamically model delta-V budgets, rideshare payload allocation, and real-time commercial launch integration.
            </p>

            {/* Orbit Target Selector */}
            <div className="mb-6">
              <label className="block font-mono text-xs uppercase tracking-wider text-on-surface-variant mb-2 font-semibold">
                Target Insertion Orbit
              </label>
              <div className="grid grid-cols-2 gap-2">
                {ORBITS.map((orbit) => (
                  <button
                    key={orbit.id}
                    onClick={() => setSelectedOrbit(orbit)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedOrbit.id === orbit.id
                        ? 'bg-surface-container-high border-secondary text-on-surface shadow-md'
                        : 'bg-surface-container-lowest/60 border-outline-variant/30 text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                    }`}
                  >
                    <div className="font-sans text-xs font-bold text-on-surface">{orbit.name}</div>
                    <div className="font-mono text-[11px] text-secondary">
                      {orbit.alt} • {orbit.inc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Payload Mass Slider */}
            <div className="mb-6 p-4 rounded-2xl bg-surface-container-lowest/80 border border-outline-variant/30">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs uppercase tracking-wider text-on-surface-variant font-semibold">
                  Payload Mass
                </span>
                <span className="font-display text-2xl font-mono text-primary font-bold">{massKg} kg</span>
              </div>
              <input
                type="range"
                min="10"
                max={selectedVehicle.maxPayload}
                step="5"
                value={massKg}
                onChange={(e) => setMassKg(Number(e.target.value))}
                className="w-full accent-[#b76dff] cursor-pointer h-2 bg-surface-container rounded-lg"
              />
              <div className="flex items-center justify-between text-[11px] font-mono text-on-surface-variant mt-1">
                <span>10 kg (CubeSat 6U)</span>
                <span>Max: {selectedVehicle.maxPayload} kg</span>
              </div>
            </div>

            {/* Launch Vehicle Provider */}
            <div>
              <label className="block font-mono text-xs uppercase tracking-wider text-on-surface-variant mb-2 font-semibold">
                Verified Launch Vehicle Manifest
              </label>
              <div className="grid grid-cols-3 gap-2">
                {VEHICLES.map((veh) => (
                  <button
                    key={veh.id}
                    onClick={() => {
                      setSelectedVehicle(veh);
                      if (massKg > veh.maxPayload) setMassKg(veh.maxPayload);
                    }}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      selectedVehicle.id === veh.id
                        ? 'bg-surface-container-high border-primary text-on-surface shadow-md'
                        : 'bg-surface-container-lowest/60 border-outline-variant/30 text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    <div className="font-sans text-xs font-semibold text-on-surface">{veh.name}</div>
                    <div className="font-mono text-[10px] text-tertiary">{veh.provider}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Calculations & HUD Bar */}
          <div className="w-full lg:w-5/12 flex flex-col justify-between self-stretch bg-surface-container-lowest/90 border border-outline-variant/40 p-6 sm:p-8 rounded-2xl shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30 mb-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-on-surface-variant">
                    Estimated Mission Investment
                  </span>
                  <div className="font-display text-3xl sm:text-4xl font-mono text-on-surface font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mt-1">
                    ${totalCost.toLocaleString()}
                  </div>
                </div>
                <span className="material-symbols-outlined text-secondary text-[32px]">orbit</span>
              </div>

              {/* Segmented Payload Capacity Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-on-surface-variant uppercase">
                    Dispenser Payload Allocation
                  </span>
                  <span
                    className={`font-mono text-xs font-bold ${
                      capacityPct > 85 ? 'text-error' : capacityPct > 60 ? 'text-primary' : 'text-secondary'
                    }`}
                  >
                    {capacityPct}% Capacity
                  </span>
                </div>

                <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden p-0.5 border border-outline-variant/30">
                  <div
                    className="h-full rounded-full transition-all duration-300 bg-gradient-to-r from-secondary via-primary to-primary-container"
                    style={{ width: `${capacityPct}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono text-on-surface-variant mt-1.5">
                  <span>Standard Margin</span>
                  <span>{selectedVehicle.maxPayload - massKg} kg remaining reserve</span>
                </div>
              </div>

              {/* Mission Specs Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20">
                  <span className="font-mono text-[11px] text-on-surface-variant block uppercase">Delta-V Budget</span>
                  <span className="font-mono text-base font-bold text-on-surface">
                    {selectedOrbit.baseDeltaV} km/s
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20">
                  <span className="font-mono text-[11px] text-on-surface-variant block uppercase">Insertion SLA</span>
                  <span className="font-mono text-base font-bold text-secondary">±1.2 km precision</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20">
                  <span className="font-mono text-[11px] text-on-surface-variant block uppercase">Next Window</span>
                  <span className="font-mono text-base font-bold text-tertiary">
                    {selectedVehicle.leadTime}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20">
                  <span className="font-mono text-[11px] text-on-surface-variant block uppercase">Crypto Uplink</span>
                  <span className="font-mono text-base font-bold text-primary">Pre-Configured</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenConsole}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-inverse-primary to-primary-container text-on-primary font-sans text-sm uppercase tracking-wider font-bold shadow-[0_0_24px_rgba(183,109,255,0.4)] hover:shadow-[0_0_36px_rgba(183,109,255,0.65)] hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">lock_clock</span>
              <span>Reserve Manifest Slot</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
