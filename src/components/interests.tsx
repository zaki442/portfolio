"use client";

import SectionHeading from "./section-heading";
import { domainStyle } from "@/lib/domains";
import { useLanguage } from "@/lib/i18n";

export default function Interests() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading path="interests" title={t.interests.heading.title} highlight={t.interests.heading.highlight} />

        <div className="grid md:grid-cols-3 gap-6">
          {t.interests.items.map((i) => {
            const d = domainStyle[i.domain];
            return (
              <div
                key={i.title}
                className={`group p-6 rounded-md border border-border border-l-2 border-l-transparent bg-card/30 transition-colors ${d.hoverBorderL}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${d.dot}`} />
                  <h3 className="font-semibold">{i.title}</h3>
                </div>
                <p className="text-muted text-sm leading-relaxed">{i.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
