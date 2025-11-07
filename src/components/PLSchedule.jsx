import { CalendarDays, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const mockFixtures = [
  {
    id: 'pl-001',
    date: 'Sab, 16 Nov 2025',
    time: '19:30',
    home: 'Manchester City',
    away: 'Liverpool',
    venue: 'Etihad Stadium',
  },
  {
    id: 'pl-002',
    date: 'Sab, 16 Nov 2025',
    time: '22:00',
    home: 'Arsenal',
    away: 'Tottenham',
    venue: 'Emirates Stadium',
  },
  {
    id: 'pl-003',
    date: 'Min, 17 Nov 2025',
    time: '01:30',
    home: 'Chelsea',
    away: 'Manchester United',
    venue: 'Stamford Bridge',
  },
];

export default function PLSchedule({ onSelectMatch }) {
  const [selected, setSelected] = useState(null);

  const handleClick = (match) => {
    setSelected(match.id);
    onSelectMatch?.(match);
  };

  return (
    <section className="py-10 sm:py-14 bg-white" id="schedule">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-indigo-600 text-white"><CalendarDays size={20} /></div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold">Jadwal Premier League</h2>
            <p className="text-slate-500 text-sm">Klik satu pertandingan untuk melihat xG dan rating pemain.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockFixtures.map((m) => (
            <button
              key={m.id}
              onClick={() => handleClick(m)}
              className={`text-left rounded-xl border transition focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ${selected === m.id ? 'border-indigo-600 ring-1 ring-indigo-600' : 'border-slate-200 hover:border-slate-300'}`}
            >
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-slate-500">{m.date} • {m.time}</div>
                  <ChevronRight className="text-slate-400" size={18} />
                </div>
                <div className="mt-2 font-semibold">{m.home} vs {m.away}</div>
                <div className="text-sm text-slate-500">{m.venue}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
