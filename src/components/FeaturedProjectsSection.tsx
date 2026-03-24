import { GitBranch, BookOpen, Code2 } from "lucide-react";
import StarField from "@/components/StarField";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  publication: string;
}

const projects: Project[] = [
  {
    title: "ArXiv Telegram Bot",
    description: "Bot de Telegram impulsado por LLMs locales (Ollama) para buscar y resumir papers científicos desde el móvil con RAG.",
    tags: ["Python", "Ollama", "Telegram API", "RAG"],
    github: "#",
    publication: "https://www.linkedin.com/feed/update/urn:li:activity:7437403594380824576/",
  },
  {
    title: "Asistente de Reglas de Juegos",
    description: "Chatbot de IA para reglamentos de juegos de mesa que utiliza RAG avanzado (búsqueda híbrida con BM25) y Reranking para resolver dudas en tiempo real.",
    tags: ["Python", "RAG", "BM25", "Reranking"],
    github: "https://github.com/jroman98/MistGuide",
    publication: "https://www.linkedin.com/feed/update/urn:li:activity:7402777824899547136/",
  },
];

export default function FeaturedProjectsSection() {
  return (
    <section id="proyectos" className="relative py-24 px-4 sm:px-6 w-full bg-surface/30 border-y border-border backdrop-blur-sm">
      <StarField count={15} className="z-0" />
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
        {/* Left column: title + description */}
        <div className="lg:w-1/3 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-mono w-fit">
            <Code2 size={14} />
            <span>Proyectos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Hangar
          </h2>

          <p className="text-muted text-base leading-relaxed font-normal">
            Experimentos, bots y aplicaciones concretas nacidas del estudio teórico. De la curiosidad a la implementación.
          </p>
        </div>

        {/* Right column: project cards */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group p-6 rounded border border-border bg-[#070B14]/80 hover:bg-surface transition-all hover:border-accent/40 relative overflow-hidden flex flex-col gap-3 card-hover"
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono text-accent uppercase tracking-widest bg-accent/10 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-medium text-foreground group-hover:text-white transition-colors pt-1">
                {project.title}
              </h3>

              <p className="text-sm text-muted font-normal flex-grow leading-relaxed">
                {project.description}
              </p>

              {/* Action links */}
              <div className="flex items-center gap-5 mt-auto pt-4 border-t border-border group-hover:border-accent/40 transition-colors">
                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted hover:text-foreground transition-colors"
                  >
                    <GitBranch size={14} /> Código
                  </a>
                )}
                {project.publication && (
                  <a
                    href={project.publication}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted hover:text-accent transition-colors"
                  >
                    <BookOpen size={14} /> Post
                  </a>
                )}
              </div>
            </div>
          ))}

          {/* Coming soon placeholder */}
          <div className="p-6 rounded border border-dashed border-border/40 bg-transparent flex flex-col gap-3 opacity-50">
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] font-mono text-muted uppercase tracking-widest bg-muted/10 px-2 py-0.5 rounded">
                próximamente
              </span>
            </div>
            <div className="h-4 w-3/4 rounded bg-muted/10 mt-1" />
            <div className="h-3 w-full rounded bg-muted/10" />
            <div className="h-3 w-2/3 rounded bg-muted/10" />
            <div className="mt-auto pt-4 border-t border-border/40">
              <div className="h-3 w-1/3 rounded bg-muted/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}