"use client";

import Image from "next/image";
import { Calendar, Users } from "lucide-react";
import { motion } from "framer-motion";

type Event = {
  id: string;
  title: string;
  description: string;
  image: string;
  start: string;
  participant?: {
    id: string;
    name?: string;
  } | null;
};

export default function EventCard({ event }: { event: Event }) {
  const date = new Date(event.start);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl bg-white/50 backdrop-blur-xl border border-white/60 p-5 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2"
    >
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>

      <h3 className="text-lg font-medium text-slate-800">
        {event.title}
      </h3>

      <p className="text-sm text-slate-600 mt-2 line-clamp-3">
        {event.description}
      </p>

      <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          {date.toLocaleDateString("tr-TR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </div>

        {event.participant && (
          <div className="flex items-center gap-2">
            <Users size={16} />
            Katılımcı
          </div>
        )}
      </div>
    </motion.div>
  );
}
