import { useState } from 'react';
import { Mic, Send, Sparkles } from 'lucide-react';

export default function AIWidget() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hai! Saya Muda AI. Tanya apa saja tentang pertandingan ini.' }
  ]);

  const onSend = () => {
    if (!input.trim()) return;
    setMessages((m) => [...m, { role: 'user', content: input }, { role: 'assistant', content: 'Analisis cepat: peluang meningkat di sisi kiri, eksploit overlap.' }]);
    setInput('');
  };

  return (
    <section id="ai" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Muda AI Mobile</h2>
            <p className="mt-2 text-slate-600">Asisten mengambang dengan input suara dan analisis waktu nyata.</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl ring-1 ring-slate-200 bg-white shadow-sm p-6">
            <div className="h-64 overflow-y-auto space-y-3 pr-2">
              {messages.map((m, i) => (
                <div key={i} className={m.role === 'assistant' ? 'bg-slate-50 rounded-lg p-3 text-slate-800' : 'bg-indigo-50 rounded-lg p-3 text-slate-900'}>
                  {m.role === 'assistant' && (
                    <span className="inline-flex items-center gap-1 text-xs text-indigo-600 mb-1"><Sparkles className="h-3 w-3"/>Muda AI</span>
                  )}
                  <p className="text-sm leading-relaxed">{m.content}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2">
              <button title="Voice" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50">
                <Mic className="h-4 w-4" />
              </button>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 h-10 rounded-lg border border-slate-200 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Tanyakan analisis..."
              />
              <button onClick={onSend} className="inline-flex items-center gap-1 rounded-lg bg-indigo-600 text-white h-10 px-4 text-sm font-medium hover:bg-indigo-500">
                <Send className="h-4 w-4" />
                Kirim
              </button>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-b from-indigo-600 to-fuchsia-600 text-white p-6 shadow-sm">
            <h3 className="font-semibold">Fitur Mobile-First</h3>
            <ul className="mt-3 space-y-2 text-sm text-indigo-50">
              <li>• Gestur swipe untuk kartu pemain</li>
              <li>• Prefetch & lazy loading untuk hemat data</li>
              <li>• PWA + offline cache untuk statistik</li>
              <li>• Notifikasi push gol & kartu</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
