import { Activity, BarChart3, Cpu, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Activity,
    title: 'Data Real-time',
    desc: 'Skor langsung, statistik pertandingan, dan update instan via WebSocket.'
  },
  {
    icon: BarChart3,
    title: 'Visualisasi Canggih',
    desc: 'Grafik interaktif dengan Chart.js untuk heatmap, xG, dan tren performa.'
  },
  {
    icon: Cpu,
    title: 'AI Insights',
    desc: 'Rekomendasi taktik dan prediksi hasil pertandingan berbasis AI.'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First + PWA',
    desc: 'Optimasi baterai, 60fps animasi, dan dukungan offline siap pakai.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Kenapa Analasis Muda.Bola?</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">Platform analisis sepak bola canggih dengan AI-powered insights dan real-time data.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-slate-900 text-white grid place-items-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
