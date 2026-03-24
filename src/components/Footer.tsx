import Link from "next/link";
import { X, GitBranch } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-[#0A0E1A] py-12 px-4 sm:px-6 overflow-hidden">
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Left: Branding & Copy */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="font-sans text-lg font-semibold tracking-tight text-foreground flex items-center gap-2">
            latent_
            <span style={{ color: "var(--accent)" }}>know</span>
          </Link>
          <p className="font-mono text-xs text-muted">
            Construido en el espacio latente. <span className="text-accent">©</span> 2026
          </p>
        </div>

        {/* Right: SocialLinks */}
        <div className="flex items-center gap-6">
          <Link
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X"
            className="text-muted hover:text-accent transition-colors flex items-center gap-2 text-sm font-mono tracking-widest uppercase"
          >
            <X size={16} /> <span className="hidden sm:inline">Señales</span>
          </Link>
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-accent transition-colors flex items-center gap-2 text-sm font-mono tracking-widest uppercase"
          >
            <GitBranch size={16} /> <span className="hidden sm:inline">Código</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
