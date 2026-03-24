import Link from "next/link";
import { BookOpen, Sparkles, FolderCode, ArrowRight } from "lucide-react";
import StarField from "@/components/StarField";

const categories = [
  {
    title: "Literatura científica",
    description: "Desglose y análisis técnico de los papers más relevantes en el estado del arte de la IA.",
    href: "/#orbita"
  },
  {
    title: "Novedades",
    description: "Actualizaciones sobre modelos, herramientas y tendencias que están redefiniendo el ecosistema.",
    href: "/#orbita"
  },
  {
    title: "Hangar",
    description: "Experimentos, bots y aplicaciones concretas nacidas del estudio teórico.",
    href: "/#proyectos"
  }
];

export default function LatestWritings() {
  return (
    <section id="archivo" className="relative py-32 px-4 sm:px-6 w-full max-w-6xl mx-auto overflow-hidden">
      <StarField count={18} className="z-0" />

      {/* Decorative Orbits Context */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] translate-x-1/3 -translate-y-1/3 opacity-10 pointer-events-none">
        <div className="absolute inset-0 border border-accent rounded-full animate-orbit-slow" />
      </div>

      <div className="relative z-10 mb-16 flex flex-col items-center sm:items-start text-center sm:text-left gap-6">
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">Contenido</h2>
        <p className="text-muted text-lg sm:text-xl max-w-2xl font-light leading-relaxed">
          Navega por las categorías principales para descubrir artículos en profundidad, noticias relevantes y mis últimos proyectos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {categories.map((cat, i) => (
          <Link
            key={cat.title}
            href={cat.href}
            className="group relative flex flex-col p-10 min-h-[320px] rounded-2xl border border-border bg-surface/80 hover:bg-surface backdrop-blur-md overflow-hidden card-hover"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {/* Subtle glow inside card on hover */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-2xl font-medium mb-4 text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-accent transition-all">
                {cat.title}
              </h3>

              <p className="text-base text-muted font-light leading-relaxed flex-grow">
                {cat.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs font-mono text-muted group-hover:text-accent transition-colors uppercase tracking-widest">
                <span>Explorar</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
