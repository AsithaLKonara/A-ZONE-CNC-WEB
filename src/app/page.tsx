import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-8 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-cyan/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-purple/20 rounded-full blur-[120px]" />

      <div className="z-10 text-center max-w-4xl space-y-8">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
          <span className="block text-white">A ZONE</span>
          <span className="block text-gradient">CNC & LASER SOLUTIONS</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light tracking-wide">
          Precision Cutting • Laser Engraving • Custom Fabrication
        </p>

        <div className="flex flex-wrap gap-4 justify-center pt-8">
          <button className="glass px-8 py-4 rounded-full text-lg font-medium hover:bg-accent-cyan/10 transition-all hover:scale-105 neon-glow-cyan">
            View Works
          </button>
          <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-200 transition-all hover:scale-105">
            Get Quote
          </button>
        </div>
      </div>

      {/* Futuristic Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-accent-cyan to-transparent" />
        <span className="text-[10px] uppercase tracking-widest text-accent-cyan">Scroll</span>
      </div>
    </main>
  );
}
