"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";

type Item = {
  id: string;
  url: string;
  altText?: string;
};

export default function GalleryPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch("/api/item", { cache: "no-store" });
        if (!res.ok) throw new Error("Fetch failed");
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error(error);
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      (item.altText ?? "")
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [items, query]);

  return (
    <div className="relative min-h-screen pt-32 pb-24 px-6 w-full">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-pink-500 font-semibold">
            Galeri
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-light text-slate-900">
            Seçili Çalışmalar
          </h1>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto">
            Işık, boşluk ve duygunun bir araya geldiği anlardan oluşan görsel seçki.
          </p>
        </motion.div>

        <div className="mb-14 flex justify-center">
          <div className="relative w-full max-w-md">
            <Search
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Açıklamaya göre ara..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-5 py-3 rounded-full bg-white/60 backdrop-blur-xl border border-white/70 shadow-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>
        </div>

        {loading ? (
          <div className="text-center text-slate-400 mt-20">
            Yükleniyor…
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="text-center text-slate-500 mt-20 text-lg">
            Sergide eser bulunamadı.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group rounded-3xl bg-white/45 backdrop-blur-xl border border-white/70 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.url}
                    alt={item.altText ?? "Galeri görseli"}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                {item.altText && (
                  <div className="p-5">
                    <p className="text-sm text-slate-500">
                      {item.altText}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
