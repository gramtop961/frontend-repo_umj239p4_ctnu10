import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import PLSchedule from './components/PLSchedule';
import PLStandings from './components/PLStandings';
import PLPlayerRatings from './components/PLPlayerRatings';
import MatchDetails from './components/MatchDetails';
import LiveTicker from './components/LiveTicker';

function App() {
  const [selectedMatch, setSelectedMatch] = useState(null);

  // If a match is selected from LiveTicker it already includes live fields.
  // Fallback to schedule match structure to keep modal working.
  const normalizedMatch = selectedMatch && {
    id: selectedMatch.id,
    home: selectedMatch.home,
    away: selectedMatch.away,
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <header className="bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10 sm:py-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200 mb-3">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Premier League Only • Now with Live Ticker
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">Analisis Premier League</h1>
          <p className="mt-3 text-slate-600 max-w-2xl">Klasemen terkini, rating pemain, jadwal, dan skor langsung. Klik pertandingan untuk membuka analitik xG & statistik.</p>
        </div>
      </header>

      <LiveTicker onSelectMatch={setSelectedMatch} />
      <PLSchedule onSelectMatch={setSelectedMatch} />
      <PLStandings />
      <PLPlayerRatings />

      {normalizedMatch && (
        <MatchDetails match={normalizedMatch} onClose={() => setSelectedMatch(null)} />
      )}

      <footer className="py-12 border-t border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600">© 2024 Analasis Muda Team — Fokus Premier League</p>
            <div className="text-xs text-slate-500">Built with React + Tailwind • Live via WebSocket</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
