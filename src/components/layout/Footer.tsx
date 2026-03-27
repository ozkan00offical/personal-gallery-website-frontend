"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const footerLinks = [
  { label: "Anasayfa", href: "/home/" },
  { label: "Galeri", href: "/home/gallery" },
  { label: "Etkinlikler", href: "/future" },
  { label: "Duyurular", href: "/future" },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://x.com", label: "X" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative px-6 pb-10">
      <motion.div
        className="mx-auto max-w-7xl rounded-3xl bg-white/50 backdrop-blur-xl border border-white/70 shadow-lg px-8 py-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-light text-slate-900 tracking-tight">
                Melisa <span className="italic font-serif">Özkan</span>
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Görsel çalışmalar · Seçili arşiv
              </p>
            </div>

            <nav className="flex gap-8 text-sm text-slate-500">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-slate-800 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/40 pt-6">
            <div className="flex gap-5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-slate-500 hover:text-pink-500 transition-colors"
                >
                  <Icon size={20} strokeWidth={1.5} />
                </Link>
              ))}
            </div>

            <div className="text-xs text-slate-400">
              © {new Date().getFullYear()} Tüm hakları saklıdır
            </div>
          </div>

        </div>
      </motion.div>
    </footer>
  );
}
