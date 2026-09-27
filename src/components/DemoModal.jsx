import React, { useState } from 'react';

export default function DemoModal({ isOpen, onClose, initialMission = 'Orbital Mission Demo' }) {
  const [missionType, setMissionType] = useState(initialMission);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    satCount: '1-5',
    orbitTarget: 'LEO',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0e1a]/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-lg rounded-3xl bg-[#0f131f] border border-secondary/40 shadow-[0_0_50px_rgba(56,189,248,0.2)] p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-on-surface-variant hover:text-on-surface p-1 rounded-lg hover:bg-surface-container transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {submitted ? (
          <div className="py-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-secondary/20 border border-secondary/50 flex items-center justify-center text-secondary mb-4 shadow-[0_0_20px_rgba(56,189,248,0.4)]">
              <span className="material-symbols-outlined text-[32px]">check_circle</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-on-surface mb-2">
              Mission Consultation Scheduled
            </h3>
            <p className="font-sans text-sm text-on-surface-variant max-w-sm mb-6">
              Our orbital flight operations engineering team will contact you within 4 hours with dedicated uplink
              parameters and simulator credentials.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/40 text-on-surface font-sans text-sm font-semibold transition-all"
            >
              Return to Flight Deck
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-secondary font-bold">
                Aerospace Consultation
              </span>
            </div>
            <h3 className="font-display text-2xl font-bold text-on-surface mb-2">
              {missionType.includes('Sign In') ? 'Sign In to LaunchPad' : 'Schedule Mission Demo'}
            </h3>
            <p className="font-sans text-xs text-on-surface-variant mb-6">
              Connect your spacecraft engineering team with our primary mission flight directors.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-on-surface-variant mb-1 font-semibold">
                  Flight Director / Lead Engineer Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Elena Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0a0e1a]/90 border border-outline-variant/40 text-on-surface placeholder:text-on-surface-variant/40 text-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30 transition-all"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-on-surface-variant mb-1 font-semibold">
                  Defense / Aerospace Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="elena@space-enterprise.aero"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0a0e1a]/90 border border-outline-variant/40 text-on-surface placeholder:text-on-surface-variant/40 text-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30 transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-on-surface-variant mb-1 font-semibold">
                    Target Orbit
                  </label>
                  <select
                    value={formData.orbitTarget}
                    onChange={(e) => setFormData({ ...formData, orbitTarget: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#0a0e1a] border border-outline-variant/40 text-on-surface text-sm focus:outline-none focus:border-secondary transition-all"
                  >
                    <option value="LEO">LEO (Polar / ISS)</option>
                    <option value="SSO">SSO (Sun-Synchronous)</option>
                    <option value="GEO">GEO (Geostationary)</option>
                    <option value="CISLUNAR">Cislunar / Lunar Orbit</option>
                  </select>
                </div>
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-on-surface-variant mb-1 font-semibold">
                    Constellation Fleet Size
                  </label>
                  <select
                    value={formData.satCount}
                    onChange={(e) => setFormData({ ...formData, satCount: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#0a0e1a] border border-outline-variant/40 text-on-surface text-sm focus:outline-none focus:border-secondary transition-all"
                  >
                    <option value="1-5">1 - 5 satellites</option>
                    <option value="6-25">6 - 25 satellites</option>
                    <option value="26-100">26 - 100 satellites</option>
                    <option value="100+">100+ Mega-fleet</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 px-4 rounded-xl bg-gradient-to-r from-inverse-primary to-primary-container text-on-primary font-sans text-sm font-bold shadow-[0_0_24px_rgba(183,109,255,0.4)] hover:shadow-[0_0_36px_rgba(183,109,255,0.65)] hover:scale-[1.01] active:scale-[0.98] transition-all"
              >
                Confirm Mission Session
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
