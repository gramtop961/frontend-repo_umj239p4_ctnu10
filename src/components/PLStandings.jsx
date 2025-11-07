import { Trophy, TrendingUp } from 'lucide-react';

// Mocked table, styled to resemble the official Premier League table layout
const standings = [
  { pos: 1, team: 'Manchester City', played: 12, won: 10, draw: 1, lost: 1, gf: 31, ga: 8, gd: 23, pts: 31, form: ['W','W','W','D','W'] },
  { pos: 2, team: 'Liverpool', played: 12, won: 9, draw: 2, lost: 1, gf: 28, ga: 11, gd: 17, pts: 29, form: ['W','D','W','W','W'] },
  { pos: 3, team: 'Arsenal', played: 12, won: 9, draw: 1, lost: 2, gf: 24, ga: 10, gd: 14, pts: 28, form: ['W','W','L','W','W'] },
  { pos: 4, team: 'Tottenham', played: 12, won: 8, draw: 2, lost: 2, gf: 25, ga: 14, gd: 11, pts: 26, form: ['D','W','W','L','W'] },
  { pos: 5, team: 'Aston Villa', played: 12, won: 8, draw: 1, lost: 3, gf: 26, ga: 18, gd: 8, pts: 25, form: ['W','W','L','W','L'] },
  { pos: 6, team: 'Manchester United', played: 12, won: 7, draw: 1, lost: 4, gf: 17, ga: 14, gd: 3, pts: 22, form: ['W','W','L','W','D'] },
  { pos: 7, team: 'Newcastle United', played: 12, won: 6, draw: 3, lost: 3, gf: 22, ga: 14, gd: 8, pts: 21, form: ['W','D','W','L','W'] },
  { pos: 8, team: 'Brighton', played: 12, won: 6, draw: 2, lost: 4, gf: 23, ga: 19, gd: 4, pts: 20, form: ['L','W','W','D','L'] },
  { pos: 9, team: 'West Ham', played: 12, won: 5, draw: 3, lost: 4, gf: 18, ga: 17, gd: 1, pts: 18, form: ['W','D','L','D','W'] },
  { pos: 10, team: 'Chelsea', played: 12, won: 5, draw: 2, lost: 5, gf: 19, ga: 17, gd: 2, pts: 17, form: ['W','L','W','D','L'] },
  { pos: 18, team: 'Luton Town', played: 12, won: 2, draw: 2, lost: 8, gf: 11, ga: 22, gd: -11, pts: 8, form: ['L','L','W','L','D'] },
  { pos: 19, team: 'Burnley', played: 12, won: 1, draw: 3, lost: 8, gf: 9, ga: 24, gd: -15, pts: 6, form: ['D','L','L','D','L'] },
  { pos: 20, team: 'Sheffield United', played: 12, won: 1, draw: 2, lost: 9, gf: 8, ga: 29, gd: -21, pts: 5, form: ['L','W','L','L','D'] },
];

function FormDots({ form }) {
  const color = (r) => ({
    W: 'bg-emerald-500',
    D: 'bg-slate-400',
    L: 'bg-rose-500',
  })[r] || 'bg-slate-300';
  return (
    <div className="flex items-center gap-1">
      {form.map((r, i) => (
        <span key={i} className={`inline-block h-2.5 w-2.5 rounded-full ${color(r)}`} title={r} />
      ))}
    </div>
  );
}

export default function PLStandings() {
  return (
    <section className="py-10 sm:py-14 bg-white" id="standings">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-indigo-600 text-white"><Trophy size={20} /></div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold">Premier League Table</h2>
            <p className="text-slate-500 text-sm">Styled like the official site. Data is sample.</p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-3 py-3 text-left font-medium w-10">#</th>
                <th className="px-3 py-3 text-left font-medium">Club</th>
                <th className="px-3 py-3 text-center font-medium">P</th>
                <th className="px-3 py-3 text-center font-medium">W</th>
                <th className="px-3 py-3 text-center font-medium">D</th>
                <th className="px-3 py-3 text-center font-medium">L</th>
                <th className="px-3 py-3 text-center font-medium">GF</th>
                <th className="px-3 py-3 text-center font-medium">GA</th>
                <th className="px-3 py-3 text-center font-medium">GD</th>
                <th className="px-3 py-3 text-center font-medium">Pts</th>
                <th className="px-3 py-3 text-left font-medium">Form</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((row) => {
                const band = row.pos <= 4
                  ? 'border-l-4 border-l-emerald-500'
                  : row.pos <= 6
                  ? 'border-l-4 border-l-indigo-500'
                  : row.pos >= 18
                  ? 'border-l-4 border-l-rose-500'
                  : 'border-l border-l-transparent';
                return (
                  <tr key={row.pos} className={`border-t border-slate-100 hover:bg-slate-50 ${band}`}>
                    <td className="px-3 py-3 text-slate-700 tabular-nums">{row.pos}</td>
                    <td className="px-3 py-3 font-medium">
                      <div className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">
                          {row.team.split(' ').slice(0,2).map(w=>w[0]).join('')}
                        </div>
                        <span>{row.team}</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-center tabular-nums">{row.played}</td>
                    <td className="px-3 py-3 text-center tabular-nums">{row.won}</td>
                    <td className="px-3 py-3 text-center tabular-nums">{row.draw}</td>
                    <td className="px-3 py-3 text-center tabular-nums">{row.lost}</td>
                    <td className="px-3 py-3 text-center tabular-nums">{row.gf}</td>
                    <td className="px-3 py-3 text-center tabular-nums">{row.ga}</td>
                    <td className="px-3 py-3 text-center tabular-nums">{row.gd}</td>
                    <td className="px-3 py-3 text-center font-semibold tabular-nums">{row.pts}</td>
                    <td className="px-3 py-3 text-left"><FormDots form={row.form} /></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="mt-2 text-xs text-slate-500 flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" /> Top 4
          <span className="inline-block h-2 w-2 rounded-full bg-indigo-500" /> European places
          <span className="inline-block h-2 w-2 rounded-full bg-rose-500" /> Relegation
        </div>
      </div>
    </section>
  );
}
