"use client";

import SectionHeading from "./section-heading";
import { domainStyle } from "@/lib/domains";
import { useLanguage } from "@/lib/i18n";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading path="projects" title={t.projects.heading.title} highlight={t.projects.heading.highlight} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.projects.items.map((p) => {
            const d = domainStyle[p.domain];
            const Card = p.link ? "a" : "div";
            return (
              <Card
                key={p.title}
                {...(p.link ? { href: p.link, target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`group p-5 rounded-md border border-border border-l-2 border-l-transparent bg-card/50 hover:bg-card transition-colors ${d.hoverBorderL}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className={`font-semibold text-sm transition-colors ${d.hoverText}`}>{p.title}</h3>
                  {p.link && (
                    <svg
                      aria-hidden
                      className={`w-3.5 h-3.5 shrink-0 text-muted transition-colors ${d.hoverText}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H18m0 0v4.5M18 6l-7.5 7.5M6 10.5V18h7.5" />
                    </svg>
                  )}
                </div>
                <div className="flex items-center justify-between gap-2 mt-1">
                  <p className="text-xs text-muted font-mono">{p.tech}</p>
                  {p.date && <p className="text-[10px] text-muted/70 font-mono shrink-0">{p.date}</p>}
                </div>
                <p className="text-muted text-sm mt-3 leading-relaxed">{p.desc}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
