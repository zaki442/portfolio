"use client";

import SectionHeading from "./section-heading";
import { useLanguage } from "@/lib/i18n";

export default function Experience() {
  const { t } = useLanguage();
  const { work, education } = t.experience;

  const workHalf = Math.ceil(work.length / 2);
  const workLeft = work.slice(0, workHalf);
  const workRight = work.slice(workHalf);

  const eduHalf = Math.ceil(education.length / 2);
  const eduLeft = education.slice(0, eduHalf);
  const eduRight = education.slice(eduHalf);

  return (
    <section id="experience" className="py-24 px-4 bg-card/40">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          path="experience"
          title={t.experience.heading.title}
          highlight={t.experience.heading.highlight}
        />

        <div className="mb-16">
          <h3 className="font-mono text-xs font-semibold text-foreground mb-6 tracking-wider uppercase">
            {t.experience.workLabel}
          </h3>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
            {[workLeft, workRight].map((col, i) => (
              <div key={i} className="space-y-6">
                {col.map((w) => (
                  <div key={w.company + w.period} className="relative pl-6 border-l border-border">
                    <div className="absolute left-0 top-1 w-3 h-3 -translate-x-1.5 rounded-full bg-accent" />
                    <h4 className="font-semibold text-sm">{w.role}</h4>
                    <p className="text-accent text-xs mt-0.5 font-mono">{w.company}</p>
                    <p className="text-muted text-xs mt-0.5">{w.period}</p>
                    <p className="text-muted text-sm mt-2 leading-relaxed">{w.desc}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-mono text-xs font-semibold text-foreground mb-6 tracking-wider uppercase">
            {t.experience.eduLabel}
          </h3>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
            {[eduLeft, eduRight].map((col, i) => (
              <div key={i} className="space-y-6">
                {col.map((e) => (
                  <div key={e.degree} className="relative pl-6 border-l border-border">
                    <div className="absolute left-0 top-1 w-3 h-3 -translate-x-1.5 rounded-full border-2 border-accent bg-background" />
                    <h4 className="font-semibold text-sm">{e.degree}</h4>
                    <p className="text-muted text-xs mt-0.5">{e.school}</p>
                    <p className="text-muted text-xs mt-0.5">{e.period}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
