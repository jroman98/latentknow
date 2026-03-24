import Nav from "@/components/Nav";
import { ArrowLeft, BookOpen, Clock, Share2, ChevronRight, Zap, Cpu, Database, Layers } from "lucide-react";
import Link from "next/link";

export default function InfiniRetriPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-white">
      <Nav />

      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" style={{
        backgroundImage: "radial-gradient(var(--muted) 1px, transparent 1px)",
        backgroundSize: "30px 30px"
      }} />

      <main className="pt-32 pb-24 relative z-10">
        <article className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* Breadcrumbs & Meta */}
          <div className="flex flex-col gap-8 mb-12">
            <Link
              href="/#orbita"
              className="group flex items-center gap-2 text-xs font-mono text-muted hover:text-accent transition-colors uppercase tracking-widest w-fit"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Artículos
            </Link>

            <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono text-muted uppercase tracking-[0.2em]">
              <span className="px-2 py-0.5 rounded border border-accent/20 bg-accent/5 text-accent">Literatura Científica</span>
              <span className="flex items-center gap-1.5"><Clock size={12} /> 6 min lectura</span>
              <span className="text-border">•</span>
              <span>24 Mar, 2026</span>
            </div>
          </div>

          {/* Title Section */}
          <header className="mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-8">
              InfiniRetri: <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent opacity-80">Lectura Humana para Contextos Infinitos</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted font-normal leading-relaxed max-w-3xl">
              Cómo procesar textos que exceden la ventana de contexto de los LLMs mediante un sistema de recuperación natural y caché por sentencias.
            </p>
          </header>

          {/* Featured Visual */}
          <div className="relative w-full rounded-xl border border-border bg-surface mb-20 overflow-hidden">
            {/* Light area for the diagram (SVG designed for light background) */}
            <div className="bg-white/95 mx-4 mt-4 rounded-lg overflow-hidden">
              <img
                src="/images/infiniretri_diagram.svg"
                alt="Diagrama de arquitectura InfiniRetri"
                className="w-full h-auto p-4 sm:p-8"
              />
            </div>
            <div className="px-5 py-3 flex items-center gap-2 text-[10px] font-mono text-muted uppercase tracking-widest">
              <span className="w-3 h-[1px] bg-accent/40" />
              Diagrama de arquitectura — InfiniRetri
            </div>
          </div>

          {/* Content Body */}
          <div className="prose prose-invert prose-accent max-w-none font-normal">
            <section className="mb-16">
              <h2 className="text-2xl font-medium text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent" />
                Inspiración Biomimética
              </h2>
              <div className="p-8 rounded-xl bg-surface/50 border-l-2 border-l-accent border border-border italic text-lg leading-relaxed text-muted mb-8">
                “Nuestro método, inspirado en el proceso humano de leer libros, aborda el desafío de procesar textos que exceden la ventana de contexto de los LLMs. A pesar del limitado campo de visión que nos permite ver solo una página a la vez, podemos comprender un libro entero leyendo cada página secuencialmente. En este proceso, el cerebro actúa como un caché.”
              </div>
              <p className="text-muted font-medium leading-relaxed mb-6">
                InfiniRetri propone que los LLMs no necesitan ventanas de contexto gigantescas si aprenden a gestionar la información como lo hacemos nosotros: integrando fragmentos actuales con una memoria externa persistente que recupera lo relevante en el momento preciso.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="p-6 rounded-2xl border border-border bg-accent/[0.02] hover:bg-accent/[0.04] transition-colors">
                <div className="w-10 h-10 rounded-full bg-accent/5 flex items-center justify-center mb-4 border border-accent/20">
                  <Zap size={20} className="text-accent" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-foreground">La Atención como Guía</h3>
                <p className="text-sm text-muted leading-relaxed">
                  El mecanismo de atención, especialmente en las capas finales, funciona como un sistema de recuperación natural. El modelo "sabe" dónde mirar incluso en contextos complejos.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-border bg-accent/[0.02] hover:bg-accent/[0.04] transition-colors">
                <div className="w-10 h-10 rounded-full bg-accent/5 flex items-center justify-center mb-4 border border-border/20">
                  <Cpu size={20} className="text-accent" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-foreground">Simplicidad Arquitectónica</h3>
                <p className="text-sm text-muted leading-relaxed">
                  A diferencia de SnapKV, InfiniRetri utiliza atención estándar en lugar de Slide Window Attention (SWA), simplificando drásticamente la fase de inferencia.
                </p>
              </div>
            </div>

            <section className="mb-16">
              <h2 className="text-2xl font-medium text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent" />
                Arquitectura de Memoria
              </h2>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <div className="mt-1.5"><Database size={16} className="text-accent" /></div>
                  <div>
                    <h4 className="font-medium text-foreground">Token IDs vs. KV States</h4>
                    <p className="text-muted text-sm mt-1">
                      En lugar de almacenar los estados Key-Value tradicionales de cada capa, InfiniRetri guarda los Token IDs fuera del modelo, fusionándolos antes de la inferencia.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="mt-1.5"><Layers size={16} className="text-accent" /></div>
                  <div>
                    <h4 className="font-medium text-foreground">Unidades Semánticas completas</h4>
                    <p className="text-muted text-sm mt-1">
                      El caché mantiene sentencias completas con los Top-K tokens más relevantes. Esto respeta la estructura sintáctica y semántica del lenguaje, crucial para la comprensión a largo plazo.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className="my-16 flex justify-center">
              <a
                href="https://arxiv.org/abs/2502.12962"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 px-8 py-4 rounded-xl border border-accent/30 bg-accent/5 hover:bg-accent/10 transition-all overflow-hidden"
              >
                <BookOpen size={20} className="text-accent" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-accent/60">Paper original</span>
                  <span className="text-sm font-medium">Leer InfiniRetri en ArXiv</span>
                </div>
                <ChevronRight size={18} className="text-accent/40 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </article>
      </main>
    </div>
  );
}
