"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#home" className="font-display text-sm font-bold tracking-tight">
          Zakaria Abid
        </a>

        <div className="hidden md:flex items-center gap-6 font-mono text-xs">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted hover:text-accent transition-colors"
            >
              ~{l.label}
            </a>
          ))}
          <a
            href="cv_resume_v_eng.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent/90 text-background px-3 py-1.5 rounded-md font-semibold transition-colors"
          >
            resume.pdf
          </a>
        </div>

        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-b border-border">
          <div className="px-4 py-4 flex flex-col gap-3 font-mono text-xs">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-muted hover:text-accent transition-colors"
              >
                ~{l.label}
              </a>
            ))}
            <a
              href="cv_resume_v_eng.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="bg-accent text-background px-3 py-1.5 rounded-md font-semibold text-center transition-colors"
            >
              resume.pdf
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
