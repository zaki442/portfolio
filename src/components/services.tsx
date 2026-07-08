import SectionHeading from "./section-heading";
import { domainStyle, type Domain } from "@/lib/domains";

const services: { title: string; desc: string; domain: Domain; icon: React.ReactNode }[] = [
  {
    domain: "build",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    title: "Full Stack Web Development",
    desc: "End-to-end development using MERN stack, Angular, .NET, and Java Spring Boot. From responsive frontends to robust APIs and database design — delivering production-ready solutions.",
  },
  {
    domain: "build",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    title: "AI & Automation",
    desc: "Python-based automation, algorithmic trading systems, AI agents for marketing and lead generation. Experience with TensorFlow, LangChain, Pandas, and data science pipelines.",
  },
  {
    domain: "secure",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    ),
    title: "Cybersecurity & OSINT",
    desc: "TryHackMe Level 8 with experience in Kali Linux, Nmap, Wireshark, Burp Suite, and ethical hacking. Knowledge of XSS, SQLI, TCP/IP protocols, and OSINT fundamentals.",
  },
];

export default function Services() {
  return (
    <section className="py-24 px-4 bg-card/40">
      <div className="max-w-5xl mx-auto">
        <SectionHeading path="services" title="What I" highlight="Do" />

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => {
            const d = domainStyle[s.domain];
            return (
              <div
                key={s.title}
                className={`group p-6 rounded-md border border-border border-l-2 border-l-transparent bg-card transition-colors ${d.hoverBorderL}`}
              >
                <div className={`mb-4 transition-transform group-hover:scale-110 ${d.text}`}>{s.icon}</div>
                <h3 className={`text-lg font-semibold mb-2 transition-colors ${d.hoverText}`}>{s.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
