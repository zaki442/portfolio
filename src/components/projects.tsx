import SectionHeading from "./section-heading";
import { domainStyle, type Domain } from "@/lib/domains";

const projects: { title: string; tech: string; desc: string; domain: Domain }[] = [
  {
    domain: "build",
    title: "Agile B Darija",
    tech: "Next.js, React, Tailwind CSS, Python",
    desc: "Community platform promoting agile practices in Morocco. Volunteer management, event/training sections, online donations (CIH & PayPal), secure admin dashboard, and a Python certificate generator.",
  },
  {
    domain: "trade",
    title: "Trading-Factory",
    tech: "Python, Alpaca API, Backtrader, ccxt",
    desc: "Modular algorithmic trading system implementing moving-average crossover strategies. Extended with vectorbt, TA-Lib, QuantStats for backtesting and performance analysis.",
  },
  {
    domain: "build",
    title: "Marketing AI Agent",
    tech: "Python, AI, CRM, Lead Generation",
    desc: "Autonomous marketing agent with modules for lead generation, CRM, content publishing, and analytics. Automated multi-platform engagement and image caching pipeline.",
  },
  {
    domain: "build",
    title: "Onirique-Ride",
    tech: "MERN Stack, Stripe API",
    desc: "Luxury chauffeur-service ride-hailing app with in-app booking, trip history, and payment processing for a US-based client.",
  },
  {
    domain: "build",
    title: "Online Bookstore",
    tech: "Angular, Java Spring Boot, Stripe",
    desc: "Full-stack e-commerce bookstore with JWT authentication, REST APIs, Stripe credit card payments, and input validation.",
  },
  {
    domain: "build",
    title: "LinkedIn Job Bot",
    tech: "Python, Selenium, Playwright",
    desc: "Automated LinkedIn Easy Apply system with stealth/human-like behavior patterns to avoid detection.",
  },
  {
    domain: "build",
    title: "Bassma Sweets",
    tech: "Next.js, Tailwind CSS",
    desc: "Modern e-commerce site for a local sweets shop with responsive design.",
  },
  {
    domain: "build",
    title: "Report Generator",
    tech: ".NET, Angular",
    desc: "Automated technical report writing system for Dekra control offices.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading path="projects" title="Featured" highlight="Projects" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => {
            const d = domainStyle[p.domain];
            return (
              <div
                key={p.title}
                className={`group p-5 rounded-md border border-border border-l-2 border-l-transparent bg-card/50 hover:bg-card transition-colors ${d.hoverBorderL}`}
              >
                <h3 className={`font-semibold text-sm transition-colors ${d.hoverText}`}>{p.title}</h3>
                <p className="text-xs text-muted mt-1 font-mono">{p.tech}</p>
                <p className="text-muted text-sm mt-3 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
