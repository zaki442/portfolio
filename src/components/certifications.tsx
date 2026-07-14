import SectionHeading from "./section-heading";
import { domainStyle, type Domain } from "@/lib/domains";

const certs: { name: string; domain: Domain }[] = [
  { name: "Python for Everybody Specialization — University of Michigan (Coursera)", domain: "build" },
  { name: "Django for Everybody Specialization — University of Michigan (Coursera)", domain: "build" },
  { name: "TryHackMe — Level 53, Top 5% (Cyber Crusader, 90 rooms completed)", domain: "secure" },
  { name: "Kaggle — Python & programming coursework, Tabular Playground Series competitor", domain: "build" },
  { name: "TOEFL iBT 2026 — Udemy (In Progress)", domain: "build" },
  { name: "OSINT Fundamentals — Udemy", domain: "secure" },
  { name: "Generative AI Learning Path — Google Cloud Skills Boost", domain: "build" },
  { name: "DeepLearning.AI TensorFlow Developer — Coursera", domain: "build" },
  { name: "IBM AI Engineering Professional Certificate — Coursera", domain: "build" },
  { name: "Practical Deep Learning for Coders — fast.ai", domain: "build" },
  { name: "Algorithms & Data Structures — Neetcode / LeetCode", domain: "build" },
];

export default function Certifications() {
  return (
    <section className="py-24 px-4 bg-card/40">
      <div className="max-w-5xl mx-auto">
        <SectionHeading path="certifications" title="Certifications &" highlight="Learning" />

        <div className="grid sm:grid-cols-2 gap-3">
          {certs.map((c) => {
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
