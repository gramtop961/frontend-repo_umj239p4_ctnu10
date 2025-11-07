import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] grid place-items-center overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 px-6 sm:px-8 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200 mb-4">
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Real-time + AI Insights
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
          Platform Analisis Sepak Bola Canggih
        </h1>
        <p className="mt-4 text-slate-700 text-lg max-w-2xl mx-auto">
          Beyond the Scoreline — insight mendalam, data real-time, dan visualisasi interaktif untuk pecinta sepak bola modern.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#live" className="rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-slate-800">Lihat Live Match Center</a>
          <a href="#ai" className="rounded-lg bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow ring-1 ring-slate-200 hover:bg-slate-50">Coba Muda AI</a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
    </section>
  );
}
