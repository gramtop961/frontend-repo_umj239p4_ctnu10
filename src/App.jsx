import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import LivePreview from './components/LivePreview';
import AIWidget from './components/AIWidget';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <LivePreview />
      <AIWidget />

      <footer id="install" className="py-12 border-t border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600">© 2024 Analasis Muda Team — Rilis 2024-12-01</p>
            <div className="text-xs text-slate-500">Tech: Vue.js (inspirasi), React + Vite, MongoDB, WebSocket, Chart.js, Redis, Socket.IO</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
