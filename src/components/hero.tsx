"use client";

import { useLanguage } from "@/lib/i18n";

export default function Hero() {
  const { t, resumeUrl } = useLanguage();
  const { status } = t.hero;

  return (
    <section id="home" className="min-h-screen flex items-center px-4 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          WebkitMaskImage: "radial-gradient(ellipse 70% 55% at 50% 35%, black, transparent)",
          maskImage: "radial-gradient(ellipse 70% 55% at 50% 35%, black, transparent)",
        }}
      />
      <div className="max-w-3xl mx-auto relative z-10 py-32">
        <p className="font-mono text-sm text-accent mb-5 tracking-wide">
          <span className="text-muted">$</span> whoami
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-5 tracking-tight">
          Zakaria Abid
        </h1>
        <p className="text-xl md:text-2xl text-muted mb-10 font-light max-w-xl leading-snug">
          {t.hero.tagline}
        </p>

        <div className="space-y-2.5 mb-10 font-mono text-sm">
          {status.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${s.dot}`} />
              <span className="text-foreground w-14 shrink-0">{s.label}</span>
              <span className="text-muted">{s.detail}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-4 flex-wrap items-center">
          <a
            href="#projects"
            className="bg-accent hover:bg-accent/90 text-background px-6 py-3 rounded-md font-semibold transition-colors"
          >
            {t.hero.projectsBtn}
          </a>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border hover:border-muted text-foreground px-6 py-3 rounded-md font-medium transition-colors"
          >
            {t.hero.cvBtn}
          </a>
          <a
            href="#contact"
            className="text-foreground hover:text-accent px-2 py-3 font-medium transition-colors"
          >
            {t.hero.contactBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
