"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SelectedWorks() {
  return (
    <section className="relative px-6 pb-24">
      <motion.div
        className="mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Başlık */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-pink-500 font-semibold">
              Selected works
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-light text-slate-900">
              Öne Çıkan Çalışmalar
            </h2>
          </div>

          <span className="hidden md:block text-sm text-slate-500">
            2022 — 2024
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Sessiz Işık",
              desc: "Doğal ışıkla şekillenen minimal kompozisyon.",
              img: "/hero.png",
            },
            {
              title: "Boşluk",
              desc: "Az öğe, yüksek etki.",
              img: "/hero.png",
            },
            {
              title: "Yüzey",
              desc: "Dokular ve tonlar üzerine görsel denemeler.",
              img: "/hero.png",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              className="group rounded-3xl bg-white/45 backdrop-blur-md border border-white/60 p-5 shadow-sm hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-4">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <h3 className="text-lg font-medium text-slate-800">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
