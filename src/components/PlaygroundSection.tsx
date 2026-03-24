import Link from "next/link";
import { Terminal, Play, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  stack: string[];
  demoHref: string;
  status: "live" | "wip";
}

const projects: Project[] = [
  {
    title: "RAG con modelos locales",
    description:
      "Sistema de Retrieval-Augmented Generation 100% local usando Ollama, LangChain y una base vectorial ChromaDB. Carga tus propios PDFs y hazles preguntas en lenguaje natural, sin mandar datos a ninguna API externa.",
    stack: ["Ollama", "LangChain", "ChromaDB", "FastAPI"],
    demoHref: "#proyectos",
    status: "live",
  },
  {
    title: "Buscador semántico de papers",
    description:
      "Bot de Telegram que busca en arXiv usando embeddings semánticos, en lugar de palabras clave exactas. Encuentra papers conceptualmente similares a tu query aunque no compartan ninguna palabra.",
    stack: ["arXiv API", "sentence-transformers", "FAISS", "python-telegram-bot"],
    demoHref: "#proyectos",
    status: "wip",
  },
];

export default function PlaygroundSection() {
  return (
    <section
      id="proyectos"
      className="py-20 px-4 sm:px-6"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="font-mono text-xl sm:text-2xl font-semibold text-foreground">
            <span style={{ color: "var(--accent)" }}>&gt;_</span>{" "}
            proyectos
          </h2>
          <p className="mt-2 text-sm text-[var(--muted)] font-mono">
            // teoría convertida en implementaciones útiles
          </p>
          <div className="mt-4 h-px w-16" style={{ background: "var(--accent)" }} />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="card-hover flex flex-col rounded-xl border overflow-hidden"
              style={{ borderColor: "var(--border)", background: "#0A0A0A" }}
            >
              {/* Terminal top bar */}
              <div
                className="flex items-center gap-2 px-4 py-2.5 border-b"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                </div>
                <span className="font-mono text-[11px] text-[var(--muted)] ml-2 truncate">
                  ~/latentknow/{project.title.toLowerCase().replace(/\s+/g, "-")}
                </span>
                {project.status === "wip" && (
                  <span className="ml-auto font-mono text-[10px] px-2 py-0.5 rounded border border-yellow-500/30 text-yellow-400 bg-yellow-400/5">
                    wip
                  </span>
                )}
                {project.status === "live" && (
                  <span
                    className="ml-auto font-mono text-[10px] px-2 py-0.5 rounded border"
                    style={{
                      color: "var(--accent)",
                      borderColor: "var(--accent)",
                      background: "var(--accent)15",
                    }}
                  >
                    ● live
                  </span>
                )}
              </div>

              {/* Card body */}
              <div className="flex flex-col gap-4 p-6 flex-1">
                <div className="flex items-start gap-3">
                  <span
                    className="mt-1 p-2 rounded-lg"
                    style={{ background: "var(--accent)15" }}
                  >
                    <Terminal size={16} style={{ color: "var(--accent)" }} />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground leading-snug">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {project.description}
                </p>

                {/* Stack badges */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-2 py-0.5 rounded"
                      style={{
                        color: "var(--muted)",
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto pt-2">
                  <Link
                    href={project.demoHref}
                    className="inline-flex items-center gap-2 font-mono text-sm font-semibold transition-all hover:gap-3"
                    style={{ color: "var(--accent)" }}
                  >
                    <Play size={14} />
                    Run Demo →
                    <ExternalLink size={12} className="opacity-60" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
