"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const selections = [
  {
    title: "Quiet Frames",
    source: "Minimal Photo Journal",
    year: "2024",
    link: "#",
  },
  {
    title: "Light & Void",
    source: "Nordic Visual Archive",
    year: "2024",
    link: "#",
  },
  {
    title: "Stillness Series",
    source: "Independent Curators Pick",
    year: "2023",
    link: "#",
  },
  {
    title: "Silent Corners",
    source: "Online Exhibition",
    year: "2023",
    link: "#",
  },
];

export default function Selections() {
  return (
    <section className="relative px-6 pb-32">
      <motion.div
        className="mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-pink-500 font-semibold">
            Seçkiler
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-light text-slate-900">
            Yayınlar & Kürasyonlar
          </h2>
        </div>

        <div className="rounded-3xl bg-white/55 backdrop-blur-xl border border-white/70 shadow-lg divide-y divide-white/40">
          {selections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 hover:bg-white/40 transition-colors"
            >
              <div>
                <h3 className="text-lg font-medium text-slate-800">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500">
                  {item.source}
                </p>
              </div>

              <div className="flex items-center gap-6">
                <span className="text-sm text-slate-400">{item.year}</span>
                <Link
                  href={item.link}
                  className="text-sm text-pink-500 hover:text-pink-600 transition-colors"
                >
                  İncele →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
