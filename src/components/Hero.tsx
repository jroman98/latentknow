import Link from "next/link";
import { ArrowRight } from "lucide-react";
import StarField from "@/components/StarField";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen pt-20 pb-16 overflow-hidden items-center">
      <StarField count={30} className="z-0" />

      {/* Technical Grid Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-start gap-6 text-left max-w-xl">
          <div className="font-mono text-sm tracking-widest uppercase text-accent/80 border border-accent/20 rounded border-l-2 border-l-accent px-3 py-1 bg-accent/5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Observatorio de IA
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.1] tracking-tight">
            Haz visible<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent filter drop-shadow-[0_0_15px_rgba(110,231,255,0.3)]">
              lo latente.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted leading-relaxed font-normal">
            Un blog personal sobre literatura científica, noticias, ideas y proyectos de IA.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <Link
              href="#archivo"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded font-medium text-[#070B14] bg-accent overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(110,231,255,0.2)] hover:shadow-[0_0_30px_rgba(110,231,255,0.4)]"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-2">
                Explorar contenido
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* Right Visual: Abstract Planet & Orbits */}
        <div className="relative w-full aspect-square max-w-[280px] sm:max-w-[380px] lg:max-w-[500px] mx-auto lg:ml-auto flex items-center justify-center pointer-events-none">
          {/* Outer glowing halo */}
          <div className="absolute w-full h-full rounded-full bg-accent/5 blur-[100px]" />

          {/* Subtle orbits rotating */}
          <div className="absolute w-[120%] h-[120%] border border-accent/10 rounded-full animate-orbit-slow" />
          <div className="absolute w-[90%] h-[90%] border border-accent/20 rounded-full animate-orbit-slow-reverse border-dashed" />
          <div className="absolute w-[60%] h-[60%] border border-muted/20 rounded-full animate-orbit" />

          {/* Orbit Nodes (Planets/Embeddings) */}
          <div className="absolute w-[120%] h-[120%] animate-orbit-slow">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent/80 shadow-[0_0_10px_var(--accent)]" />
            {/* New planets in outer orbit */}
            <div className="absolute top-[85%] left-[85%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/60 shadow-[0_0_8px_white]" />
            <div className="absolute top-[85%] left-[15%] -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-muted/70 shadow-[0_0_5px_var(--muted)]" />
          </div>
          <div className="absolute w-[90%] h-[90%] animate-orbit-slow-reverse">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-white/80 shadow-[0_0_10px_white]" />
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-muted shadow-[0_0_5px_var(--muted)]" />
            {/* New planet in middle orbit */}
            <div className="absolute top-[15%] left-[15%] -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-accent/60 shadow-[0_0_8px_var(--accent)]" />
          </div>
          <div className="absolute w-[60%] h-[60%] animate-orbit">
            {/* New planets in inner orbit */}
            <div className="absolute top-[15%] left-[85%] -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/90 shadow-[0_0_8px_white]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-accent/80 shadow-[0_0_6px_var(--accent)]" />
          </div>

          {/* Abstract Planet (Core) */}
          <div className="relative w-[45%] h-[45%] rounded-full">
            {/* Core sphere gradient */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-surface via-[#1A2642] to-[#070B14] shadow-[inset_-20px_-20px_40px_rgba(0,0,0,0.8),inset_10px_10px_20px_rgba(110,231,255,0.2),0_0_40px_rgba(110,231,255,0.15)] overflow-hidden border border-accent/20">
              {/* Internal structure (embedding map metaphor) */}
              <svg className="absolute inset-0 w-full h-full opacity-60 mix-blend-screen" viewBox="0 0 100 100">
                <style>{`
                  @keyframes activateNode {
                    0%, 100%, 40% { fill: var(--muted); opacity: 0.4; }
                    20% { fill: var(--muted); opacity: 0.9; filter: drop-shadow(0 0 3px var(--muted)); }
                  }
                  @keyframes activateAccent {
                    0%, 100%, 40% { fill: var(--accent); opacity: 0.3; }
                    20% { fill: var(--accent); opacity: 0.9; filter: drop-shadow(0 0 5px var(--accent)); }
                  }
                  @keyframes activateLatent {
                    0%, 100%, 40% { fill: var(--accent); opacity: 0.4; filter: drop-shadow(0 0 2px var(--accent)); transform: scale(1); transform-box: fill-box; transform-origin: center; }
                    20% { fill: white; opacity: 1; filter: drop-shadow(0 0 10px var(--accent)) drop-shadow(0 0 15px var(--accent)); transform: scale(1.25); transform-box: fill-box; transform-origin: center; }
                  }
                  @keyframes activateLine {
                    0%, 100%, 40% { stroke: var(--muted); opacity: 0.15; }
                    20% { stroke: var(--accent); opacity: 0.6; filter: drop-shadow(0 0 2px var(--accent)); }
                  }
                  .seq-1 { animation: activateNode 6s ease-in-out infinite 0s; }
                  .seq-line-1 { animation: activateLine 6s ease-in-out infinite 0.5s; }
                  .seq-2 { animation: activateAccent 6s ease-in-out infinite 1.0s; }
                  .seq-line-2 { animation: activateLine 6s ease-in-out infinite 1.5s; }
                  .seq-3 { animation: activateLatent 6s ease-in-out infinite 2.0s; } /* Latent node */
                  .seq-line-3 { animation: activateLine 6s ease-in-out infinite 2.5s; }
                  .seq-4 { animation: activateAccent 6s ease-in-out infinite 3.0s; }
                  .seq-line-4 { animation: activateLine 6s ease-in-out infinite 3.5s; }
                  .seq-5 { animation: activateNode 6s ease-in-out infinite 4.0s; }

                  @keyframes planetPulse {
                    0%, 100%, 40% { transform: scale(1); opacity: 0.3; }
                    20% { transform: scale(1.05); opacity: 0.7; }
                  }
                  .planet-halo-pulse { animation: planetPulse 6s ease-in-out infinite 2.0s; }
                `}</style>

                {/* L1 to L2 */}
                <path d="M20 30 L35 40 M20 50 L35 40 M20 50 L35 60 M20 70 L35 60" strokeWidth="0.2" fill="none" className="seq-line-1" stroke="var(--muted)" opacity="0.3" />
                {/* L2 to Latent */}
                <path d="M35 40 L50 50 M35 60 L50 50" strokeWidth="0.5" fill="none" className="seq-line-2" stroke="var(--muted)" opacity="0.3" />
                {/* Latent to L3 */}
                <path d="M50 50 L65 40 M50 50 L65 60" strokeWidth="0.5" fill="none" className="seq-line-3" stroke="var(--muted)" opacity="0.3" />
                {/* L3 to L4 */}
                <path d="M65 40 L80 30 M65 40 L80 50 M65 60 L80 50 M65 60 L80 70" strokeWidth="0.2" fill="none" className="seq-line-4" stroke="var(--muted)" opacity="0.3" />

                {/* Input Layer */}
                <circle cx="20" cy="30" r="1.5" className="seq-1" fill="var(--muted)" />
                <circle cx="20" cy="50" r="1.5" className="seq-1" fill="var(--muted)" />
                <circle cx="20" cy="70" r="1.5" className="seq-1" fill="var(--muted)" />

                {/* Hidden Layer (Encoder) */}
                <circle cx="35" cy="40" r="1.5" className="seq-2" fill="var(--accent)" />
                <circle cx="35" cy="60" r="1.5" className="seq-2" fill="var(--accent)" />

                {/* Latent Space (Bottleneck) */}
                <circle cx="50" cy="50" r="2.5" className="seq-3" fill="var(--accent)" />

                {/* Hidden Layer (Decoder) */}
                <circle cx="65" cy="40" r="1.5" className="seq-4" fill="var(--accent)" />
                <circle cx="65" cy="60" r="1.5" className="seq-4" fill="var(--accent)" />

                {/* Output Layer */}
                <circle cx="80" cy="30" r="1.5" className="seq-5" fill="var(--muted)" />
                <circle cx="80" cy="50" r="1.5" className="seq-5" fill="var(--muted)" />
                <circle cx="80" cy="70" r="1.5" className="seq-5" fill="var(--muted)" />

                {/* Conceptual boundary lines (Latent space bounds) */}
                <path d="M50 20 L50 80" stroke="var(--accent)" strokeWidth="0.2" strokeDasharray="2 4" opacity="0.3" />
              </svg>
            </div>

            {/* Atmospheric glow */}
            <div className="absolute -inset-4 rounded-full bg-accent/20 blur-2xl -z-10 mix-blend-screen planet-halo-pulse" />
            <div className="absolute top-0 right-0 w-1/2 h-1/2 rounded-full bg-white/10 blur-xl mix-blend-screen" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="font-mono text-[10px] text-muted uppercase tracking-widest">scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-muted to-transparent rounded-full" />
      </div>
    </section>
  );
}
