import { Telescope } from "lucide-react";
import StarField from "@/components/StarField";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 w-full max-w-4xl mx-auto border-t border-border">
      <StarField count={12} className="z-0" />
      <div className="flex flex-col items-center text-center gap-8">

        <div className="w-16 h-16 rounded-full bg-surface border border-accent/20 flex items-center justify-center relative">
          <div className="absolute inset-0 rounded-full bg-accent/10 blur-md pointer-events-none" />
          <Telescope className="w-8 h-8 text-accent animate-float" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
          Por qué existe Latent Know
        </h2>

        <div className="text-muted text-base sm:text-lg leading-relaxed font-light max-w-2xl flex flex-col gap-6">
          <p>
            Latent Know nace de la necesidad de documentar el aprendizaje en tiempo real.
            Es una bitácora personal sobre inteligencia artificial donde comparto literatura científica, ideas, novedades y proyectos que me parecen relevantes.
          </p>
          <p>
            El enfoque es técnico, pero accesible: reducir el ruido, volver a los fundamentos matemáticos y arquitectónicos, y construir una intuición más clara sobre las ideas, sistemas y conceptos que atraviesan la inteligencia artificial.
          </p>
        </div>

        <div className="mt-8 p-1 rounded-full bg-gradient-to-r from-transparent via-accent/20 to-transparent w-full max-w-[200px] h-[1px]" />
      </div>
    </section>
  );
}
