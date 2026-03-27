import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-[#0a0a0a] text-white">
      
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Background"
          fill
          className="object-cover opacity-40 grayscale-[0.3]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-6">
        <div className="mb-8 overflow-hidden">
          <span className="block text-xs uppercase tracking-[0.6em] text-pink-400/80 animate-fade-in-down">
            Visual Storyteller
          </span>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl font-extralight tracking-tighter leading-none">
            Melisa <span className="font-serif italic text-pink-100/90">Özkan</span>
          </h1>
          <div className="h-[1px] w-12 bg-white/30 mx-auto mt-8 mb-6" />
          <p className="text-lg md:text-xl font-light text-white/60 max-w-md mx-auto leading-relaxed">
            Işığın ve sessizliğin dijital yansımasına hoş geldiniz.
          </p>
        </div>

        <div className="group relative">
          <Link
            href="/home"
            className="relative z-10 px-12 py-4 border border-white/20 rounded-full bg-white/5 backdrop-blur-md transition-all duration-500 group-hover:bg-white group-hover:text-black flex items-center gap-3 overflow-hidden"
          >
            <span className="text-sm uppercase tracking-widest font-medium">
              Galeriyi Keşfet
            </span>
            <span className="text-xl transition-transform duration-500 group-hover:translate-x-2">
              →
            </span>
          </Link>
          <div className="absolute -inset-2 bg-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="absolute bottom-12 flex flex-col items-center gap-4">
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 to-white/40" />
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 italic">
            Scroll to immerse
          </p>
        </div>
      </div>

      {/* Ekran Köşelerindeki Dekoratif Çizgiler */}
      <div className="absolute top-10 left-10 w-20 h-[1px] bg-white/10 hidden md:block" />
      <div className="absolute top-10 left-10 w-[1px] h-20 bg-white/10 hidden md:block" />
      <div className="absolute bottom-10 right-10 w-20 h-[1px] bg-white/10 hidden md:block" />
      <div className="absolute bottom-10 right-10 w-[1px] h-20 bg-white/10 hidden md:block" />

    </main>
  );
}