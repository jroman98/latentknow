import Link from "next/link";
import { BookOpen, ExternalLink, Rss } from "lucide-react";
import StarField from "@/components/StarField";

export default function RadarSection() {
  const senales = [
    {
      id: 1,
      type: "paper",
      date: "Mar 24, 2026",
      title: "InfiniRetri: Lectura Humana para contextos extensos",
      summary: "Inspirado en la lectura humana, logra procesar contextos que exceden la ventana del modelo mediante una caché de sentencias y recuperación natural.",
      link: "/blog/infini-retri"
    }
  ];

  return (
    <section id="orbita" className="relative py-24 px-4 sm:px-6 w-full bg-surface/30 border-y border-border backdrop-blur-sm">
      <StarField count={15} className="z-0" />
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
        {/* Left column: Section Title */}
        <div className="lg:w-1/3 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-mono w-fit">
            <span>Blog & Artículos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground flex items-center gap-3">
            Órbita
          </h2>

          <p className="text-muted text-base leading-relaxed font-normal">
            Mi bitácora personal. Un espacio para analizar literatura científica, noticias destacadas e ideas interesantes sobre el ecosistema de la Inteligencia Artificial.
          </p>
        </div>

        {/* Right column: Grid of Signals */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
          {senales.map((senal) => (
            <Link
              key={senal.id}
              href={senal.link}
              className="group p-6 rounded border border-border bg-[#070B14]/80 hover:bg-surface transition-all hover:border-accent/40 relative overflow-hidden flex flex-col gap-3 card-hover"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex justify-between items-center w-full">
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest bg-accent/10 px-2 py-0.5 rounded">
                  {senal.type}
                </span>
                <span className="text-xs text-muted font-mono">{senal.date}</span>
              </div>

              <h4 className="text-lg font-medium text-foreground group-hover:text-white transition-colors pt-2">
                {senal.title}
              </h4>

              <p className="text-sm text-muted font-normal flex-grow leading-relaxed">
                {senal.summary}
              </p>
            </Link>
          ))}

          {/* Coming soon placeholder */}
          <div className="p-6 rounded border border-dashed border-border/40 bg-transparent flex flex-col gap-3 opacity-50">
            <div className="flex justify-between items-center w-full">
              <span className="text-[10px] font-mono text-muted uppercase tracking-widest bg-muted/10 px-2 py-0.5 rounded">
                próximamente
              </span>
            </div>
            <div className="h-4 w-3/4 rounded bg-muted/10 mt-2" />
            <div className="h-3 w-full rounded bg-muted/10" />
            <div className="h-3 w-2/3 rounded bg-muted/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
