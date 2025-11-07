import { useState } from 'react';
import Navbar from './components/Navbar';
import PLSchedule from './components/PLSchedule';
import PLStandings from './components/PLStandings';
import PLPlayerRatings from './components/PLPlayerRatings';
import MatchDetails from './components/MatchDetails';

function App() {
  const [selectedMatch, setSelectedMatch] = useState(null);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <header className="bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10 sm:py-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200 mb-3">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Premier League Only
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">Analisis Premier League</h1>
          <p className="mt-3 text-slate-600 max-w-2xl">Klasemen terkini, rating pemain, dan jadwal pertandingan. Klik pertandingan untuk melihat xG, statistik, dan rating pemain.</p>
        </div>
      </header>

      <PLSchedule onSelectMatch={setSelectedMatch} />
      <PLStandings />
      <PLPlayerRatings />

      {selectedMatch && (
        <MatchDetails match={selectedMatch} onClose={() => setSelectedMatch(null)} />
      )}

      <footer className="py-12 border-t border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600">© 2024 Analasis Muda Team — Fokus Premier League</p>
            <div className="text-xs text-slate-500">Built with React + Tailwind • Mock data for demo</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
