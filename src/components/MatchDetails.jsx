import { BarChart3, Users, X } from 'lucide-react';

// Mock analytics for selected match
function generateMockMatchData(match) {
  if (!match) return null;
  const base = match.id.charCodeAt(match.id.length - 1) % 5; // just to vary numbers
  return {
    xgHome: (1.0 + base * 0.3).toFixed(2),
    xgAway: (0.8 + base * 0.25).toFixed(2),
    possessionHome: 48 + base * 2,
    shotsHome: 8 + base * 3,
    shotsAway: 6 + base * 2,
    ratings: [
      { name: 'Erling Haaland', rating: 7.8 + base * 0.1 },
      { name: 'Kevin De Bruyne', rating: 8.1 + base * 0.1 },
      { name: 'Mohamed Salah', rating: 7.5 + base * 0.1 },
      { name: 'Virgil van Dijk', rating: 7.4 + base * 0.1 },
    ],
  };
}

export default function MatchDetails({ match, onClose }) {
  const data = generateMockMatchData(match);
  if (!match || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 p-4">
      <div className="w-full sm:max-w-3xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <div>
            <div className="text-xs text-slate-500">Premier League • Analytics</div>
            <div className="font-semibold">{match.home} vs {match.away}</div>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-slate-50 active:bg-slate-100">
            <X size={18} />
          </button>
        </div>

        <div className="px-5 py-5 grid sm:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-200 p-4">
            <div className="flex items-center gap-2 mb-2 text-slate-700"><BarChart3 size={18} /><span className="font-medium">xG & Statistik</span></div>
            <ul className="text-sm space-y-2">
              <li className="flex justify-between"><span>xG {match.home}</span><span className="font-semibold">{data.xgHome}</span></li>
              <li className="flex justify-between"><span>xG {match.away}</span><span className="font-semibold">{data.xgAway}</span></li>
              <li className="flex justify-between"><span>Possession {match.home}</span><span className="font-semibold">{data.possessionHome}%</span></li>
              <li className="flex justify-between"><span>Shots {match.home}</span><span className="font-semibold">{data.shotsHome}</span></li>
              <li className="flex justify-between"><span>Shots {match.away}</span><span className="font-semibold">{data.shotsAway}</span></li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 p-4">
            <div className="flex items-center gap-2 mb-2 text-slate-700"><Users size={18} /><span className="font-medium">Rating Pemain (contoh)</span></div>
            <ul className="text-sm divide-y">
              {data.ratings.map((p) => (
                <li key={p.name} className="py-2 flex items-center justify-between">
                  <span>{p.name}</span>
                  <span className="inline-flex items-center justify-center w-10 h-7 rounded-md bg-emerald-50 text-emerald-700 font-semibold tabular-nums">{p.rating.toFixed(1)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
