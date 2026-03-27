"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "Odak",
    text: "Sessizlik, boşluk ve ışık ilişkisi",
  },
  {
    title: "Yaklaşım",
    text: "Müdahalesiz, doğal anlar",
  },
  {
    title: "Dil",
    text: "Minimal kompozisyon, sade anlatım",
  },
  {
    title: "Amaç",
    text: "İzleyiciye alan açan görsel deneyim",
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-24 px-6 w-full">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
        >
          <div className="md:col-span-6">
            <span className="text-xs uppercase tracking-[0.3em] text-pink-500 font-semibold">
              Hakkımda
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-light text-slate-900 leading-tight">
              Görmek bazen
              <br />
              <span className="italic font-serif">yeterlidir</span>
            </h1>
            <p className="mt-6 text-slate-600 max-w-md leading-relaxed">
              Melisa Özkan, fotoğrafı bir belge olarak değil, zamanla
              kurulan sessiz bir ilişki olarak ele alır. Çalışmaları,
              izleyicinin görüntüyle baş başa kalmasına alan tanır.
            </p>
          </div>

          <div className="md:col-span-6">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-white/40 backdrop-blur-xl border border-white/70 shadow-lg">
              <Image
                src="/hero.png"
                alt="Görsel anlatım"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white/45 backdrop-blur-xl border border-white/70 shadow-md p-6"
            >
              <h3 className="text-sm uppercase tracking-widest text-pink-500 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-24 text-center"
        >
          <p className="text-xl md:text-2xl font-light italic text-slate-600">
            “Bazı görüntüler açıklanmaz, yalnızca hissedilir.”
          </p>
        </motion.div>

      </div>
    </div>
  );
}
