"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Anasayfa", href: "/home" },
  { label: "Galeri", href: "/home/gallery" },
  { label: "Duyurular", href: "/home/announcement" },
  { label: "Mağaza", href: "/home" },
  { label: "Etkinlikler", href: "/home/event" },
  { label: "Hakkımda", href: "/home/about" },
  { label: "İletişim", href: "/home/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="mx-4 mt-4 flex items-center justify-between px-6 py-3 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-lg shadow-pink-200/40">
        <h1 className="text-lg md:text-xl font-light tracking-wide text-slate-800">
          Melisa Özkan
        </h1>

        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-slate-700 hover:text-pink-500 transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-pink-400 hover:after:w-full after:transition-all"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/home/auth/login"
            className="px-6 py-2 rounded-full bg-pink-400/90 text-white text-sm hover:bg-pink-500 transition"
          >
            Giriş Yap
          </Link>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5"
          aria-label="Menu"
        >
          <span className={`w-6 h-0.5 bg-slate-700 transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-slate-700 transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-slate-700 transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden mx-4 mt-3 flex flex-col items-center gap-5 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/40 py-6 shadow-lg shadow-pink-200/40">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 text-lg hover:text-pink-500 transition"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/home/auth/login"
            className="px-6 py-2 rounded-full bg-pink-400/90 text-white text-sm hover:bg-pink-500 transition"
          >
            Giriş Yap
          </Link>
        </nav>
      )}
    </header>
  );
}
