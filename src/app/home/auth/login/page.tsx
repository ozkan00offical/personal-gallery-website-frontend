"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { fetcher } from "@/lib/fetcher";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      setLoading(true);

      await fetcher("/api/auth/login", "POST", {
        email: form.email,
        password: form.password,
      });

      router.push("/home");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Giriş sırasında hata oluştu."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 mt-24 mb-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md rounded-3xl bg-white/55 backdrop-blur-2xl border border-white/70 shadow-2xl px-8 py-12"
      >
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.3em] text-pink-500 font-semibold">
            Giriş
          </span>
          <h1 className="mt-3 text-3xl font-light text-slate-900">
            Tekrar Hoş Geldiniz
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            Hesabınıza giriş yapın
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            name="email"
            type="email"
            placeholder="E-posta"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-2xl bg-white/70 backdrop-blur border border-white/70 px-5 py-3"
          />

          <input
            name="password"
            type="password"
            placeholder="Şifre"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full rounded-2xl bg-white/70 backdrop-blur border border-white/70 px-5 py-3"
          />

          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 rounded-full bg-slate-900 text-white py-3 text-sm hover:bg-slate-800 disabled:opacity-60"
          >
            {loading ? "Giriş yapılıyor…" : "Giriş Yap"}
          </button>
        </form>

        <div className="mt-10 text-center text-sm text-slate-500">
          Hesabınız yok mu?{" "}
          <Link
            href="/home/auth/register"
            className="text-pink-500 hover:text-pink-600"
          >
            Hesap oluştur
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
