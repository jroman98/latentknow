"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#archivo", label: "Secciones" },
  { href: "/#orbita", label: "Órbita" },
  { href: "/#proyectos", label: "Hangar" },
  { href: "/#about", label: "Sobre el observatorio" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#070B14]/80 backdrop-blur-md border-b border-[var(--border)]" : "bg-transparent border-transparent"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-sans text-lg sm:text-xl font-medium tracking-tight text-foreground hover:opacity-80 transition-opacity flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_8px_var(--accent)]"></span>
          latent
          <span style={{ color: "var(--accent)" }}>know</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-foreground hover:text-foreground transition-colors group tracking-wide"
            >
              {l.label}
              <span
                className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                style={{ background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }}
              />
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground hover:text-accent transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-md">
          <div className="flex flex-col py-2">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-6 py-4 text-sm font-medium text-foreground hover:text-accent hover:bg-[rgba(110,231,255,0.05)] transition-colors border-b border-[var(--border)] last:border-0"              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
