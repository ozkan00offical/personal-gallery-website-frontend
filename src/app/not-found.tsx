"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="w-full max-w-3xl rounded-3xl bg-white/55 backdrop-blur-2xl border border-white/70 shadow-2xl px-10 py-20 text-center"
      >
        <span className="text-xs uppercase tracking-[0.4em] text-pink-500 font-semibold">
          404
        </span>

        <h1 className="mt-6 text-4xl md:text-6xl font-light text-slate-900 tracking-tight">
          Burada bir şey yok
        </h1>

        <p className="mt-6 text-slate-600 max-w-md mx-auto leading-relaxed">
          Aradığınız sayfa ya taşındı ya da hiç var olmadı.
          Bazen boşluk da bir duraktır.
        </p>

        <div className="mt-12 flex justify-center">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
        </div>

        <button
          onClick={() => router.back()}
          className="mt-10 text-sm text-slate-600 hover:text-pink-500 transition-colors"
        >
          ← Bir önceki sayfaya dön
        </button>
      </motion.div>
    </main>
  );
}
