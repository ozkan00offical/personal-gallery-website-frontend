"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative min-h-screen pt-32 pb-16 px-6 overflow-hidden w-full"
    >
      <motion.div
        className="mx-auto w-full max-w-7xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="md:col-span-3 group cursor-pointer rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 p-5 shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden mb-4">
              <Image
                src="/hero.png"
                alt="Işığın Sessizliği"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
            </div>
            <h3 className="text-lg font-medium text-slate-800 italic">
              Işığın Sessizliği
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Müdahalesiz ve saf anlar.
            </p>
          </motion.div>
          <div className="md:col-span-6 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="rounded-3xl bg-white/60 backdrop-blur-xl border border-white/80 p-10 shadow-2xl shadow-pink-200/20 flex flex-col items-center text-center flex-grow justify-center"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-pink-500 font-semibold mb-4">
                Portfolyo 2024
              </span>

              <h1 className="text-5xl md:text-7xl font-extralight text-slate-900 tracking-tighter mb-6">
                Melisa <span className="font-serif italic">Özkan</span>
              </h1>

              <p className="text-slate-600 text-lg leading-relaxed max-w-sm mb-8 font-light">
                Işık, boşluk ve duygular arasında kalan seçili görsel çalışmalar.
              </p>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="#galeri"
                  className=""
                >
                  <span className="relative z-10 text-slate-600 flex items-center gap-2 transition-all group-hover:gap-4">
                    Galeriyi Keşfet <span>→</span>
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="relative h-48 rounded-3xl overflow-hidden group"
            >
              <Image
                src="/hero.png"
                alt="Koleksiyon"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="md:col-span-3 group cursor-pointer flex flex-col rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 p-5 shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="relative flex-grow min-h-[300px] w-full rounded-2xl overflow-hidden mb-4">
              <Image
                src="/hero.png"
                alt="Minimal Kompozisyon"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <h3 className="text-lg font-medium text-slate-800">
              Minimalizm
            </h3>
            <p className="text-sm text-slate-500 mt-1 italic">
              Az öğe, net duygu.
            </p>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
