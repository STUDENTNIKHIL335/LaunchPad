import React, { useState, useEffect, useRef } from 'react';

export default function LaunchConsoleModal({ isOpen, onClose }) {
  const [logs, setLogs] = useState([
    '[INIT] LaunchPad OS Kernel 3.0 initialized.',
    '[AUTH] Hardware token ED25519-ST validated across 68 ground relays.',
    '[TELEMETRY] Polar Recon Cluster sync established. Doppler +0.024 Hz.',
    '[ATTITUDE] Reaction wheels nominal at 4,200 RPM.',
  ]);
  const [isRunningTest, setIsRunningTest] = useState(false);
  const [testSuccess, setTestSuccess] = useState(false);
  const terminalEndRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      const now = new Date().toISOString().substring(11, 19);
      const metrics = [
        `[SYNC ${now}] Optical cross-link: packet loss 0.000%, latency 1.82ms.`,
        `[HEALTH ${now}] Bus voltage: 28.4V. Solar array power: 1.42 kW.`,
        `[ORBIT ${now}] Apogee: 550.4 km, Perigee: 342.1 km. Decay rate: nominal.`,
        `[EPHEMERIS ${now}] Vector solution verified with Deep Space Network.`,
      ];
      const randomMetric = metrics[Math.floor(Math.random() * metrics.length)];
      setLogs((prev) => [...prev.slice(-20), randomMetric]);
    }, 2500);

    return () => clearInterval(interval);
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  if (!isOpen) return null;

  const handleRunTest = () => {
    setIsRunningTest(true);
    setTestSuccess(false);
    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        '>>> [COMMAND] INITIATE UPLINK FLIGHT STAGE TEST...',
        '>>> [DISPENSER] Solenoid safety pin unlocked.',
        '>>> [AVIONICS] Flight computer handshake acknowledged (200 OK).',
        '>>> [STATUS] ALL MISSION SYSTEMS GO FOR INSERTION.',
      ]);
      setIsRunningTest(false);
      setTestSuccess(true);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0e1a]/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-4xl rounded-2xl bg-[#0f131f] border border-primary/40 shadow-[0_0_50px_rgba(183,109,255,0.25)] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Terminal Header */}
        <div className="px-6 py-4 bg-surface-container-high border-b border-outline-variant/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-error"></div>
            <div className="w-3 h-3 rounded-full bg-secondary"></div>
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span className="font-mono text-xs uppercase tracking-wider text-on-surface font-bold ml-2">
              LaunchPad Mission Control Terminal // Node #88
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-on-surface-variant hover:text-on-surface p-1 rounded-lg hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* System Matrix Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-4 bg-surface-container-low border-b border-outline-variant/20 font-mono text-xs">
          <div className="p-2.5 rounded-lg bg-surface-container/60 border border-outline-variant/30">
            <span className="text-on-surface-variant block text-[10px]">UPLINK CRYPTO</span>
            <span className="text-secondary font-bold">FIPS 140-3 ACTIVE</span>
          </div>
          <div className="p-2.5 rounded-lg bg-surface-container/60 border border-outline-variant/30">
            <span className="text-on-surface-variant block text-[10px]">VECTOR LOCK</span>
            <span className="text-primary font-bold">POLAR SYNCHRONOUS</span>
          </div>
          <div className="p-2.5 rounded-lg bg-surface-container/60 border border-outline-variant/30">
            <span className="text-on-surface-variant block text-[10px]">DISPENSER SOLENOID</span>
            <span className="text-secondary font-bold">ARMED &amp; READY</span>
          </div>
          <div className="p-2.5 rounded-lg bg-surface-container/60 border border-outline-variant/30">
            <span className="text-on-surface-variant block text-[10px]">DOWNLINK BANDWIDTH</span>
            <span className="text-primary font-bold">142.8 GBPS</span>
          </div>
        </div>

        {/* Console Log Body */}
        <div className="flex-1 p-6 overflow-y-auto font-mono text-xs text-on-surface space-y-2 bg-[#0a0e1a]/90 min-h-[260px]">
          {logs.map((log, i) => (
            <div
              key={i}
              className={`${
                log.startsWith('>>>')
                  ? 'text-secondary font-bold bg-secondary/10 p-1.5 rounded'
                  : log.includes('ERR')
                  ? 'text-error'
                  : 'text-on-surface-variant'
              }`}
            >
              <span className="text-primary/70 mr-2">&gt;</span>
              {log}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Terminal Footer Controls */}
        <div className="p-4 bg-surface-container-high border-t border-outline-variant/30 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
            <span className="font-mono text-xs text-secondary font-semibold">
              Telemetry Stream: 100% Operational
            </span>
          </div>
          <div className="flex items-center gap-3">
            {testSuccess && (
              <span className="text-xs font-mono text-primary font-bold bg-primary/10 px-3 py-1.5 rounded border border-primary/30">
                ✓ ALL STAGES NOMINAL
              </span>
            )}
            <button
              onClick={handleRunTest}
              disabled={isRunningTest}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-inverse-primary to-primary-container text-on-primary font-sans text-xs uppercase tracking-wider font-bold shadow-lg hover:shadow-primary/40 disabled:opacity-50 transition-all"
            >
              {isRunningTest ? 'Simulating Uplink...' : 'Initiate Flight Stage Test'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
