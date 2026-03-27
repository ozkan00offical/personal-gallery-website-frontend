"use client";

import { useEffect, useState } from "react";
import Card from "@/components/ui/AnnouncementCard";
import { fetcher } from "@/lib/fetcher";

export default function AnnouncementPage() {
  const [data, setData] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const getAnnouncements = async () => {
      try {
        const res = await fetcher<Announcement[]>("/api/announcement");

        if (mounted) {
          setData(Array.isArray(res) ? res : []);
        }
      } catch (err) {
        if (mounted) {
          setError(
            err instanceof Error
              ? err.message
              : "Duyurular alınırken hata oluştu."
          );
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };

    getAnnouncements();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="mt-36 mb-24 max-w-6xl mx-auto px-6 w-full">
      <header className="mb-14 max-w-2xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-pink-500 font-semibold">
          Güncellemeler
        </span>

        <h1 className="mt-3 text-4xl font-light text-slate-800 tracking-tight">
          Duyurular
        </h1>

        <p className="mt-4 text-slate-500 leading-relaxed">
          Projeler, etkinlikler ve platformla ilgili en güncel gelişmeler.
        </p>
      </header>

      {loading && (
        <p className="text-slate-500 text-center">Yükleniyor…</p>
      )}

      {!loading && error && (
        <p className="text-red-500 text-center">{error}</p>
      )}

      {!loading && !error && data.length === 0 && (
        <p className="text-slate-500 text-center">Henüz duyuru yok.</p>
      )}

      {!loading && !error && data.length > 0 && (
        <div className="flex flex-col gap-8">
          {data.map(item => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              text={item.text}
              url={item.url}
              date={item.createdAt}
            />
          ))}
        </div>
      )}
    </div>
  );
}
