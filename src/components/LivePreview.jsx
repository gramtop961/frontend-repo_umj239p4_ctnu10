import { useEffect, useState } from 'react';

// Simple mocked ticker to simulate real-time updates
function useMockTicker() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => (t + 1) % 90), 1500);
    return () => clearInterval(id);
  }, []);
  return tick;
}

export default function LivePreview() {
  const minute = useMockTicker();
  const [home, away] = ['AM FC', 'Rivals'];

  return (
    <section id="live" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Live Match Center</h2>
            <p className="mt-2 text-slate-600">Update real-time, ramah mobile, dan siap WebSocket.</p>
          </div>
          <a href="#ai" className="hidden sm:inline-flex text-sm font-medium text-slate-700 hover:text-slate-900">Buka Analisis AI →</a>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-500">Menit {minute}'</p>
              <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ring-emerald-200">Live</span>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-center">
                <p className="text-slate-900 font-semibold text-lg">{home}</p>
                <p className="text-4xl font-bold">2</p>
              </div>
              <div className="text-center">
                <p className="text-slate-500 text-sm">FT</p>
                <p className="text-slate-400 text-xs">Friendly</p>
              </div>
              <div className="text-center">
                <p className="text-slate-900 font-semibold text-lg">{away}</p>
                <p className="text-4xl font-bold">1</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-xs text-slate-500">xG</p>
                <p className="font-semibold">1.7 vs 1.2</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-xs text-slate-500">Possession</p>
                <p className="font-semibold">58% - 42%</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-xs text-slate-500">Shots</p>
                <p className="font-semibold">10 - 7</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-800 text-white p-6 shadow-sm">
            <h3 className="font-semibold">Tips AI</h3>
            <p className="mt-1 text-sm text-slate-300">Tren pressing meningkat di sayap kanan. Pertimbangkan overlap fullback.</p>
            <div className="mt-4 grid gap-2 text-xs text-slate-300">
              <p>• Expected Threat (xT): +12% dalam 10 menit terakhir</p>
              <p>• Stamina lawan menurun, intensitas sprint -8%</p>
              <p>• Peluang gol berikutnya: 63% untuk {home}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
