"use client";

import { motion } from "framer-motion";

const announcements = [
  {
    date: "Haz 2024",
    title: "Yeni Seri Yayında",
    desc: "Işık ve boşluk temalı yeni çalışmalar galeriye eklendi.",
  },
  {
    date: "May 2024",
    title: "Portfolyo Güncellendi",
    desc: "Seçili işler yeniden düzenlendi, görsel kalite artırıldı.",
  },
  {
    date: "Nis 2024",
    title: "Editoryal Seçki",
    desc: "Minimal kompozisyonlardan oluşan kürasyon hazırlandı.",
  },
];

export default function Announcements() {
  return (
    <section className="relative px-6 pb-32">
      <motion.div
        className="mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-pink-500 font-semibold">
            Duyurular
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-light text-slate-900">
            Güncel Notlar
          </h2>
        </div>

        {/* Liste */}
        <div className="divide-y divide-slate-200/60 rounded-3xl bg-white/50 backdrop-blur-lg border border-white/60">
          {announcements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group px-8 py-6 flex flex-col md:flex-row md:items-center gap-4 hover:bg-white/40 transition-colors"
            >
              {/* Tarih */}
              <div className="md:w-32 shrink-0 text-sm text-slate-400">
                {item.date}
              </div>

              {/* İçerik */}
              <div className="flex-1">
                <h3 className="text-lg font-medium text-slate-800 group-hover:text-pink-500 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
