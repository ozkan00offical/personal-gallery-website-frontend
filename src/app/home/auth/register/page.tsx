"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { fetcher } from "@/lib/fetcher";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (form.password !== form.passwordConfirm) {
      setError("Şifreler uyuşmuyor.");
      return;
    }

    try {
      setLoading(true);

      await fetcher("/api/auth/register", "POST", {
        name: form.name,
        email: form.email,
        password: form.password,
      });

      setSuccess(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Kayıt sırasında hata oluştu."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 w-full mt-28 mb-11">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md rounded-3xl bg-white/55 backdrop-blur-2xl border border-white/70 shadow-2xl px-8 py-12"
      >
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.3em] text-pink-500 font-semibold">
            Kayıt Ol
          </span>
          <h1 className="mt-3 text-3xl font-light text-slate-900">
            Hesap Oluştur
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            Kısa, sade, hızlı
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            name="name"
            type="text"
            placeholder="Ad Soyad"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded-2xl bg-white/70 backdrop-blur border border-white/70 px-5 py-3"
          />

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

          <input
            name="passwordConfirm"
            type="password"
            placeholder="Şifre Tekrar"
            value={form.passwordConfirm}
            onChange={handleChange}
            required
            className="w-full rounded-2xl bg-white/70 backdrop-blur border border-white/70 px-5 py-3"
          />

          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
          )}

          {success && (
            <p className="text-sm text-green-600 text-center">
              Kayıt başarılı 🎉 Giriş yapabilirsiniz.
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 rounded-full bg-slate-900 text-white py-3 text-sm hover:bg-slate-800 disabled:opacity-60"
          >
            {loading ? "Oluşturuluyor…" : "Hesap Oluştur"}
          </button>
        </form>

        <div className="mt-10 text-center text-sm text-slate-500">
          Zaten hesabınız var mı?{" "}
          <Link
            href="/home/auth/login"
            className="text-pink-500 hover:text-pink-600"
          >
            Giriş yap
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
