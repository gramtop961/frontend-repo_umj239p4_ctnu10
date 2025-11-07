import { useEffect, useMemo, useRef, useState } from 'react';
import { Radio, Activity, WifiOff } from 'lucide-react';

function getBackendBase() {
  const env = import.meta.env.VITE_BACKEND_URL;
  if (env) return env.replace(/\/$/, '');
  try {
    const u = new URL(window.location.href);
    // Assume backend on 8000
    u.port = '8000';
    return `${u.protocol}//${u.hostname}:${u.port}`;
  } catch {
    return 'http://localhost:8000';
  }
}

function toWsUrl(base) {
  try {
    const u = new URL(base);
    u.protocol = u.protocol === 'https:' ? 'wss:' : 'ws:';
    u.pathname = (u.pathname.replace(/\/$/, '')) + '/ws/live';
    return u.toString();
  } catch {
    return base.replace(/^http/, 'ws') + '/ws/live';
  }
}

export default function LiveTicker({ onSelectMatch }) {
  const [connected, setConnected] = useState(false);
  const [live, setLive] = useState({}); // id -> state
  const wsRef = useRef(null);

  const wsUrl = useMemo(() => toWsUrl(getBackendBase()), []);

  useEffect(() => {
    let ws;
    let retryTimer;

    const connect = () => {
      ws = new WebSocket(wsUrl);
      wsRef.current = ws;

      ws.onopen = () => setConnected(true);
      ws.onclose = () => {
        setConnected(false);
        retryTimer = setTimeout(connect, 1500);
      };
      ws.onerror = () => {
        try { ws.close(); } catch {}
      };
      ws.onmessage = (ev) => {
        try {
          const msg = JSON.parse(ev.data);
          if (!msg?.id) return;
          setLive((prev) => ({ ...prev, [msg.id]: msg }));
        } catch {}
      };
    };

    connect();

    return () => {
      if (retryTimer) clearTimeout(retryTimer);
      if (wsRef.current) wsRef.current.close();
    };
  }, [wsUrl]);

  const matches = Object.values(live).sort((a, b) => a.id.localeCompare(b.id));

  return (
    <section id="live" className="py-8 sm:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-rose-600 text-white"><Radio size={18} /></div>
            <div>
              <h2 className="text-lg sm:text-xl font-semibold">Live Match Ticker</h2>
              <p className="text-slate-500 text-sm">Skor langsung, menit berjalan, xG, dan tembakan.</p>
            </div>
          </div>
          <div className="text-xs inline-flex items-center gap-1 rounded-full px-2.5 py-1 ring-1 ring-inset 
            ${connected ? 'bg-emerald-50 text-emerald-700 ring-emerald-200' : 'bg-amber-50 text-amber-700 ring-amber-200'}">
            {connected ? <Activity size={14} /> : <WifiOff size={14} />}
            <span className="font-medium">{connected ? 'Connected' : 'Reconnecting...'}</span>
          </div>
        </div>

        {matches.length === 0 ? (
          <div className="text-sm text-slate-500 border border-dashed border-slate-300 rounded-xl p-6">
            Menunggu data langsung dari server...
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {matches.map((m) => (
              <button
                key={m.id}
                onClick={() => onSelectMatch?.(m)}
                className="text-left rounded-xl border border-slate-200 hover:border-slate-300 transition focus:outline-none focus:ring-2 focus:ring-rose-500/40"
              >
                <div className="p-4">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Min {m.minute} • {m.status}</span>
                    <span className="font-medium text-slate-700">{m.home} vs {m.away}</span>
                  </div>
                  <div className="mt-2 flex items-end justify-between">
                    <div className="text-2xl font-bold tabular-nums">
                      {m.scoreHome} - {m.scoreAway}
                    </div>
                    <div className="text-right text-sm text-slate-600">
                      <div>xG {m.home}: <span className="font-semibold">{m.xgHome.toFixed ? m.xgHome.toFixed(2) : m.xgHome}</span></div>
                      <div>xG {m.away}: <span className="font-semibold">{m.xgAway.toFixed ? m.xgAway.toFixed(2) : m.xgAway}</span></div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs text-slate-600">
                    <span>Shots H/A: <span className="font-semibold tabular-nums">{m.shotsHome}/{m.shotsAway}</span></span>
                    <span>Poss H: <span className="font-semibold tabular-nums">{m.possessionHome}%</span></span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
