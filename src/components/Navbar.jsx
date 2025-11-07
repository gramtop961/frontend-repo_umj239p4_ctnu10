import { Menu, Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 grid place-items-center text-white shadow">
            <Rocket className="h-5 w-5" />
          </div>
          <div>
            <p className="font-semibold leading-tight">Analasis Muda.Bola</p>
            <p className="text-xs text-slate-500 -mt-0.5">Beyond the Scoreline</p>
          </div>
          <span className="ml-3 inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ring-emerald-200">
            v4.0
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition">Fitur</a>
          <a href="#live" className="hover:text-slate-900 transition">Live</a>
          <a href="#ai" className="hover:text-slate-900 transition">Muda AI</a>
          <a href="#install" className="hover:text-slate-900 transition">PWA</a>
        </nav>

        <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
