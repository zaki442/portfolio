import SectionHeading from "./section-heading";
import { domainStyle, type Domain } from "@/lib/domains";

const projects: { title: string; tech: string; desc: string; domain: Domain; link?: string; date?: string }[] = [
  {
    domain: "build",
    title: "Waitlisapp",
    tech: "Next.js, Supabase, Paddle, Resend",
    desc: "SaaS for spinning up branded waitlist landing pages in minutes. Email capture with referral-based viral growth, an analytics dashboard, subscription billing via Paddle (merchant of record), and transactional email through Resend.",
    link: "https://www.waitlisapp.com",
    date: "Jul 2026",
  },
  {
    domain: "build",
    title: "Agile B Darija",
    tech: "Next.js, React, Tailwind CSS, Python",
    desc: "Community platform promoting agile practices in Morocco. Volunteer management, event/training sections, online donations (CIH & PayPal), secure admin dashboard, and a Python certificate generator.",
    date: "Jan – Jul 2026",
  },
  {
    domain: "build",
    title: "MonStore",
    tech: "Laravel, PHP, MySQL, Redis, Tailwind CSS, Alpine.js",
    desc: "Fully containerized e-commerce platform with a mobile-first storefront, customer area, and admin panel. Dockerized stack with nginx, MySQL, Redis cache/queue, and Laravel Breeze auth.",
    date: "Jun – Jul 2026",
  },
  {
    domain: "trade",
    title: "Trading-Factory",
    tech: "Python, Alpaca API, Backtrader, ccxt",
    desc: "Modular algorithmic trading system implementing moving-average crossover strategies. Extended with vectorbt, TA-Lib, QuantStats for backtesting and performance analysis.",
    date: "Jun 2026",
  },
  {
    domain: "build",
    title: "Marketing AI Agent",
    tech: "Python, AI, CRM, Lead Generation",
    desc: "Autonomous marketing agent with modules for lead generation, CRM, content publishing, and analytics. Automated multi-platform engagement and image caching pipeline.",
    date: "Jun 2026",
  },
  {
    domain: "build",
    title: "Onirique-Ride",
    tech: "MERN Stack, Stripe API",
    desc: "Luxury chauffeur-service ride-hailing app with in-app booking, trip history, and payment processing for a US-based client.",
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
