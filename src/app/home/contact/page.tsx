"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {Mail, MapPin, Phone, Loader2, CheckCircle2, AlertCircle} from "lucide-react";
import { fetcher } from "@/lib/fetcher";

export default function ContactPage() {
  const [status, setStatus] =
    useState<"idle" | "loading" | "success" | "error">("idle");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await fetcher("/api/contact", "POST", formData);

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <div className="relative min-h-screen pt-32 pb-24 px-6 w-full">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-pink-500 font-semibold">
            İletişim
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-light text-slate-900">
            Bağlantıda Kalalım
          </h1>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto">
            Proje, sergi veya iş birliği için mesaj bırakabilirsiniz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Sol panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 rounded-3xl bg-white/45 backdrop-blur-xl border border-white/70 shadow-lg p-8 flex flex-col gap-8"
          >
            <div>
              <h2 className="text-2xl font-light text-slate-900 mb-2">
                İletişim Bilgileri
              </h2>
              <p className="text-slate-600 text-sm">
                Geri dönüşler genellikle 24 saat içinde yapılır.
              </p>
            </div>

            <div className="flex flex-col gap-6 text-slate-700">
              <div className="flex items-center gap-4">
                <Mail size={18} className="text-pink-500" />
                <span>contact@melisaozkan.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={18} className="text-pink-500" />
                <span>+90 5xx xxx xx xx</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin size={18} className="text-pink-500" />
                <span>İstanbul, Türkiye</span>
              </div>
            </div>

            <p className="text-xs text-slate-500 italic">
              * Bu alanlar örnek (mock) veridir.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 rounded-3xl bg-white/55 backdrop-blur-xl border border-white/70 shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ad Soyad"
                  className="w-full rounded-2xl bg-white/70 border border-white/70 px-5 py-3"
                />
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E-posta"
                  className="w-full rounded-2xl bg-white/70 border border-white/70 px-5 py-3"
                />
              </div>

              <input
                required
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Konu"
                className="w-full rounded-2xl bg-white/70 border border-white/70 px-5 py-3"
              />

              <textarea
                required
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Mesajınız"
                className="w-full rounded-2xl bg-white/70 border border-white/70 px-5 py-4 resize-none"
              />

              <div className="flex flex-col gap-4">
                <button
                  disabled={status === "loading" || status === "success"}
                  type="submit"
                  className="self-start flex items-center gap-2 rounded-full bg-slate-900 text-white px-10 py-3 text-sm disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Gönderiliyor…
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle2 size={16} className="text-green-400" />
                      Gönderildi
                    </>
                  ) : (
                    "Mesaj Gönder"
                  )}
                </button>

                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-600 text-sm flex items-center gap-2"
                  >
                    Teşekkürler! Mesajınız bize ulaştı.
                  </motion.p>
                )}

                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-600 text-sm flex items-center gap-2"
                  >
                    <AlertCircle size={14} /> Bir hata oluştu, tekrar deneyin.
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
