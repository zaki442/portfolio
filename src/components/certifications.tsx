"use client";

import SectionHeading from "./section-heading";
import { domainStyle } from "@/lib/domains";
import { useLanguage } from "@/lib/i18n";

export default function Certifications() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-4 bg-card/40">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          path="certifications"
          title={t.certifications.heading.title}
          highlight={t.certifications.heading.highlight}
        />

        <div className="grid sm:grid-cols-2 gap-3">
          {t.certifications.items.map((c) => {
            const d = domainStyle[c.domain];
            return (
              <div key={c.name} className="flex items-start gap-3 p-3 rounded-md border border-border bg-card/30">
                <span className={`mt-0.5 shrink-0 ${d.text}`}>&#9656;</span>
                <span className="text-sm text-muted leading-relaxed">{c.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
