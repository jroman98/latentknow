import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Paper {
  date: string;
  title: string;
  excerpt: string;
  badge: string;
  href: string;
}

const papers: Paper[] = [
  {
    date: "2024-03-15",
    title: "Entendiendo la arquitectura Transformer",
    excerpt:
      "Disección completa de 'Attention is All You Need': qué aprenden las cabezas de atención, cómo fluye la información y por qué funciona tan bien.",
    badge: "LLMs",
    href: "#papers",
  },
  {
    date: "2024-02-28",
    title: "Diffusion models desde cero",
    excerpt:
      "Cómo los modelos de difusión aprenden a revertir el ruido gaussiano para generar imágenes fotorrealistas — la matemática detrás de Stable Diffusion.",
    badge: "Generative AI",
    href: "#papers",
  },
  {
    date: "2024-01-20",
    title: "YOLO v9: detección en tiempo real",
    excerpt:
      "Análisis del nuevo mecanismo GELAN y la Programmable Gradient Information (PGI): por qué bate a sus predecesores en velocidad y precisión.",
    badge: "Computer Vision",
    href: "#papers",
  },
];

const badgeColors: Record<string, string> = {
  LLMs: "#00E5CC",
  "Generative AI": "#A78BFA",
  "Computer Vision": "#38BDF8",
};

export default function DecodedSection() {
  return (
    <section id="papers" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section header */}
      <div className="mb-12">
        <h2 className="font-mono text-xl sm:text-2xl font-semibold text-foreground">
          <span style={{ color: "var(--accent)" }}>&gt;_</span> papers
        </h2>
        <p className="mt-2 text-sm text-[var(--muted)] font-mono">
          // notas públicas sobre teoría de IA
        </p>
        <div className="mt-4 h-px w-16" style={{ background: "var(--accent)" }} />
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {papers.map((paper) => (
          <Link
            key={paper.title}
            href={paper.href}
            className="card-hover group flex flex-col gap-4 p-5 rounded-xl border bg-[var(--surface)] h-full"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="flex items-center justify-between">
              <time className="font-mono text-xs text-[var(--muted)]">
                {paper.date}
              </time>
              <span
                className="font-mono text-[10px] font-semibold px-2 py-0.5 rounded-full"
                style={{
                  color: badgeColors[paper.badge] ?? "var(--accent)",
                  background: `${badgeColors[paper.badge] ?? "var(--accent)"}18`,
                  border: `1px solid ${badgeColors[paper.badge] ?? "var(--accent)"}40`,
                }}
              >
                {paper.badge}
              </span>
            </div>

            <h3 className="text-base font-semibold leading-snug text-foreground group-hover:text-[var(--accent)] transition-colors">
              {paper.title}
            </h3>

            <p className="text-sm text-[var(--muted)] leading-relaxed flex-1">
              {paper.excerpt}
            </p>

            <div
              className="flex items-center gap-1 text-xs font-mono transition-colors"
              style={{ color: "var(--accent)" }}
            >
              leer más <ArrowUpRight size={12} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
