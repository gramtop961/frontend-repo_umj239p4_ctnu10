import { Trophy, TrendingUp } from 'lucide-react';

const mockStandings = [
  { pos: 1, team: 'Manchester City', played: 12, won: 9, draw: 2, lost: 1, gf: 28, ga: 9, pts: 29, form: 'W W D W W' },
  { pos: 2, team: 'Liverpool', played: 12, won: 8, draw: 3, lost: 1, gf: 26, ga: 11, pts: 27, form: 'W D W W D' },
  { pos: 3, team: 'Arsenal', played: 12, won: 8, draw: 2, lost: 2, gf: 22, ga: 10, pts: 26, form: 'L W W D W' },
  { pos: 4, team: 'Tottenham', played: 12, won: 7, draw: 3, lost: 2, gf: 24, ga: 15, pts: 24, form: 'W W L D D' },
  { pos: 5, team: 'Aston Villa', played: 12, won: 7, draw: 2, lost: 3, gf: 23, ga: 17, pts: 23, form: 'W L W W L' },
  { pos: 6, team: 'Manchester United', played: 12, won: 6, draw: 2, lost: 4, gf: 15, ga: 14, pts: 20, form: 'W W L W D' },
];

export default function PLStandings() {
  return (
    <section className="py-10 sm:py-14 bg-white" id="standings">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-indigo-600 text-white"><Trophy size={20} /></div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold">Premier League Klasemen</h2>
            <p className="text-slate-500 text-sm">Update mock — hanya contoh tampilan.</p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3 text-left font-medium">#</th>
                <th className="px-4 py-3 text-left font-medium">Tim</th>
                <th className="px-4 py-3 text-center font-medium">M</th>
                <th className="px-4 py-3 text-center font-medium">M</th>
                <th className="px-4 py-3 text-center font-medium">S</th>
                <th className="px-4 py-3 text-center font-medium">K</th>
                <th className="px-4 py-3 text-center font-medium">GM</th>
                <th className="px-4 py-3 text-center font-medium">GK</th>
                <th className="px-4 py-3 text-center font-medium">Pts</th>
                <th className="px-4 py-3 text-left font-medium">Form</th>
              </tr>
            </thead>
            <tbody>
              {mockStandings.map((row) => (
                <tr key={row.pos} className="border-t border-slate-100 hover:bg-slate-50">
                  <td className="px-4 py-3 text-slate-700">{row.pos}</td>
                  <td className="px-4 py-3 font-medium">{row.team}</td>
                  <td className="px-4 py-3 text-center">{row.played}</td>
                  <td className="px-4 py-3 text-center">{row.won}</td>
                  <td className="px-4 py-3 text-center">{row.draw}</td>
                  <td className="px-4 py-3 text-center">{row.lost}</td>
                  <td className="px-4 py-3 text-center">{row.gf}</td>
                  <td className="px-4 py-3 text-center">{row.ga}</td>
                  <td className="px-4 py-3 text-center font-semibold">{row.pts}</td>
                  <td className="px-4 py-3 text-left">
                    <div className="inline-flex items-center gap-2"><TrendingUp size={16} className="text-emerald-600" /><span className="tabular-nums">{row.form}</span></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
