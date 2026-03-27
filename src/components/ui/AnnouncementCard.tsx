type CardProps = {
  title: string;
  description: string;
  text: string;
  url?: string;
  date?: string;
};

export default function Card({
  title,
  description,
  text,
  url,
  date,
}: CardProps) {
  return (
    <article className="group relative rounded-3xl bg-white/65 backdrop-blur-xl border border-white/50 p-7 shadow-lg shadow-pink-200/30 transition hover:-translate-y-1 hover:shadow-xl">
      
      {/* Accent */}
      <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-gradient-to-b from-pink-400 to-rose-300 opacity-70" />

      <div className="pl-4">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-2xl font-medium text-slate-800 leading-snug">
            {title}
          </h2>

          {date && (
            <time className="text-xs text-slate-400 whitespace-nowrap">
              {date}
            </time>
          )}
        </div>

        <p className="mt-2 text-slate-500 text-sm">
          {description}
        </p>

        <p className="mt-5 text-slate-700 leading-relaxed text-sm">
          {text}
        </p>

        {url && (
          <a
            href={url}
            target="_blank"
            className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-pink-500 hover:gap-3 transition-all"
          >
            Detayı görüntüle <span>→</span>
          </a>
        )}
      </div>
    </article>
  );
}
