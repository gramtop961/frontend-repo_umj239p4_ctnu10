import { Star } from 'lucide-react';

const mockPlayers = [
  { team: 'Manchester City', name: 'Erling Haaland', rating: 8.1 },
  { team: 'Liverpool', name: 'Mohamed Salah', rating: 7.9 },
  { team: 'Arsenal', name: 'Bukayo Saka', rating: 7.8 },
  { team: 'Tottenham', name: 'Son Heung-min', rating: 7.7 },
];

export default function PLPlayerRatings() {
  return (
    <section className="py-10 sm:py-14 bg-white" id="ratings">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-indigo-600 text-white"><Star size={20} /></div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold">Rating Pemain (Premier League)</h2>
            <p className="text-slate-500 text-sm">Mock list — akan terhubung ke data real.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mockPlayers.map((p) => (
            <div key={p.name} className="rounded-xl border border-slate-200 p-4">
              <div className="text-xs text-slate-500 mb-1">{p.team}</div>
              <div className="font-semibold">{p.name}</div>
              <div className="mt-2 inline-flex items-center gap-2 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                <Star size={16} className="fill-emerald-600 text-emerald-600" />
                <span className="font-semibold tabular-nums">{p.rating.toFixed(1)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
