"use client";

import { useEffect, useState } from "react";
import EventCard from "@/components/ui/EventCard";
import { fetcher } from "@/lib/fetcher";
import type { Event } from "@/types/event";

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const getEvents = async () => {
      try {
        const res = await fetcher<Event[]>("/api/event");

        if (mounted) {
          setEvents(Array.isArray(res) ? res : []);
        }
      } catch (err) {
        if (mounted) {
          setError(
            err instanceof Error
              ? err.message
              : "Etkinlikler alınamadı."
          );
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };

    getEvents();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-pink-500 font-semibold">
            Etkinlikler
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-light text-slate-900">
            Yaklaşan & Geçmiş Etkinlikler
          </h1>

          <p className="mt-4 text-slate-600 max-w-xl mx-auto">
            Sergiler, buluşmalar ve özel gösterimler
          </p>
        </div>

        {loading && (
          <div className="text-center text-slate-500">
            Yükleniyor…
          </div>
        )}

        {!loading && error && (
          <div className="text-center text-red-500">
            {error}
          </div>
        )}

        {!loading && !error && events.length === 0 && (
          <div className="text-center text-slate-500">
            Henüz etkinlik bulunmuyor
          </div>
        )}

        {!loading && !error && events.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
