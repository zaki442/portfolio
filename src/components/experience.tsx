import SectionHeading from "./section-heading";

const work = [
  {
    role: "IT Support / Volunteer Developer",
    company: "Agile Bdarija (Community)",
    period: "Jan 2026 – Present",
    desc: "Ongoing IT support and development for a Moroccan community platform promoting agile practices — rebuilt the site on Next.js, built a Python certificate-generator pipeline, and automated bulk email/WhatsApp outreach for events and training.",
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    period: "Jul 2023 – Present",
    desc: "Independent developer delivering full-stack web apps and SaaS products for clients, including Waitlisapp (Next.js, Supabase, Paddle billing) and MonStore (containerized Laravel e-commerce platform, built with a development partner). Also builds Python automation and algorithmic-trading tooling on the side.",
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Freelance Client — Sales & Outreach Tooling",
    period: "Dec 2024",
    desc: "Built a WhatsApp bulk-messaging desktop app (Electron, React) and a sales reporting & analytics system (React, Node.js, MongoDB) with role-based access, trend analysis, and PDF/Word report export.",
  },
  {
    role: "Full Stack Developer",
    company: "Gravitech",
    period: "Nov 2023 – Nov 2024",
    desc: "Built a digital agency marketing site (PHP/HTML) and later an e-commerce platform (TypeScript) for the same client, working alongside a development partner.",
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Freelance Client — Medical Laboratory",
    period: "Jul 2023 – Aug 2023",
    desc: "Built websites and internal tooling for a medical laboratory client, including a lab-results reporting module.",
  },
  {
    role: "Full Stack Developer",
    company: "Onirique-Ride",
    period: "Jan 2023 – Jul 2023",
    desc: "Built a luxury chauffeur-service ride-hailing app on the MERN stack (MongoDB, Express, React, Node.js). Delivered in-app ride booking, trip history, and Stripe payment processing for a US-based client.",
  },
  {
    role: "Inventory Management / Developer",
    company: "Leley Boutique LLC",
    period: "Aug 2022 – Feb 2023",
    desc: "Developed a full-stack online bookstore using Angular and Java Spring Boot. Integrated Stripe payments, JWT authentication, REST APIs, and input validation.",
  },
  {
    role: "Full Stack Developer",
    company: "Bratil Consulting",
    period: "Feb 2021 – Jul 2022",
    desc: "Built a .NET & Angular report generator automating technical report writing for Dekra inspection offices.",
  },
  {
    role: "Full Stack Developer Intern",
    company: "Libens Consulting",
    period: "Jun 2020 – Jan 2021",
    desc: "Delivered enterprise solutions using Java and Angular during a six-month internship.",
  },
  {
    role: "Full Stack Developer Intern",
    company: "FSAC — Faculty of Sciences Ain Chock",
    period: "Jan 2018 – Jan 2020",
    desc: "Developed Java and Angular applications over a two-year internship.",
  },
];

const education = [
  {
    degree: "Bachelor's in JEE & .NET Development",
    school: "Hassan II University — Faculty of Sciences Ain Chock",
    period: "2018 – 2019",
  },
  {
    degree: "Specialized Technician in IT Development (TSDI)",
    school: "Hassan II University",
    period: "2017 – 2018",
  },
  {
    degree: "Mathematics, Physics, Chemistry & Sciences",
    school: "Hassan II University",
    period: "2015 – 2016",
  },
];

const workHalf = Math.ceil(work.length / 2);
const workLeft = work.slice(0, workHalf);
const workRight = work.slice(workHalf);

const eduHalf = Math.ceil(education.length / 2);
const eduLeft = education.slice(0, eduHalf);
const eduRight = education.slice(eduHalf);

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-card/40">
      <div className="max-w-5xl mx-auto">
        <SectionHeading path="experience" title="Experience &" highlight="Education" />

        <div className="mb-16">
          <h3 className="font-mono text-xs font-semibold text-foreground mb-6 tracking-wider uppercase">Work Experience</h3>
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
          <h3 className="font-mono text-xs font-semibold text-foreground mb-6 tracking-wider uppercase">Education</h3>
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
