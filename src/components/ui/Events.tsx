"use client";

import { motion } from "framer-motion";

const events = [
  {
    date: "22 Haziran 2024",
    title: "Işığın Sessizliği",
    place: "İstanbul — Bağımsız Sergi Alanı",
    desc: "Doğal ışıkla üretilmiş seçili fotoğrafların sergi sunumu.",
    status: "Yaklaşan",
  },
  {
    date: "10 Mayıs 2024",
    title: "Minimal Kompozisyonlar",
    place: "Online Kürasyon",
    desc: "Dijital seçki ve editoryal sunum.",
    status: "Tamamlandı",
  },
  {
    date: "3 Nisan 2024",
    title: "Sessiz Alanlar",
    place: "Ankara — Kolektif Alan",
    desc: "Boşluk ve mekân ilişkisini konu alan grup sergisi.",
    status: "Tamamlandı",
  },
];

export default function Events() {
  return (
    <section className="relative px-6 pb-32">
      <motion.div
        className="mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Başlık */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-pink-500 font-semibold">
            Etkinlikler
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-light text-slate-900">
            Sergiler & Katılımlar
          </h2>
        </div>

        {/* Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group rounded-3xl bg-white/50 backdrop-blur-xl border border-white/60 p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
            >
              {/* Durum */}
              <span
                className={`inline-block mb-4 text-xs px-3 py-1 rounded-full ${
                  event.status === "Yaklaşan"
                    ? "bg-pink-500/10 text-pink-500"
                    : "bg-slate-500/10 text-slate-500"
                }`}
              >
                {event.status}
              </span>

              {/* İçerik */}
              <h3 className="text-xl font-medium text-slate-800 mb-1">
                {event.title}
              </h3>
              <p className="text-sm text-slate-500 mb-3">{event.place}</p>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {event.desc}
              </p>

              {/* Tarih */}
              <div className="text-sm text-slate-400">{event.date}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
