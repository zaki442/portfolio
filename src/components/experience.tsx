import SectionHeading from "./section-heading";

const work = [
  {
    role: "Full Stack Developer",
    company: "Onirique-Ride",
    period: "Jan 2023 – Present",
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

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-card/40">
      <div className="max-w-5xl mx-auto">
        <SectionHeading path="experience" title="Experience &" highlight="Education" />

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-mono text-xs font-semibold text-foreground mb-6 tracking-wider uppercase">Work Experience</h3>
            <div className="space-y-6">
              {work.map((w) => (
                <div key={w.company + w.period} className="relative pl-6 border-l border-border">
                  <div className="absolute left-0 top-1 w-3 h-3 -translate-x-1.5 rounded-full bg-accent" />
                  <h4 className="font-semibold text-sm">{w.role}</h4>
                  <p className="text-accent text-xs mt-0.5 font-mono">{w.company}</p>
                  <p className="text-muted text-xs mt-0.5">{w.period}</p>
                  <p className="text-muted text-sm mt-2 leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs font-semibold text-foreground mb-6 tracking-wider uppercase">Education</h3>
            <div className="space-y-6">
              {education.map((e) => (
                <div key={e.degree} className="relative pl-6 border-l border-border">
                  <div className="absolute left-0 top-1 w-3 h-3 -translate-x-1.5 rounded-full border-2 border-accent bg-background" />
                  <h4 className="font-semibold text-sm">{e.degree}</h4>
                  <p className="text-muted text-xs mt-0.5">{e.school}</p>
                  <p className="text-muted text-xs mt-0.5">{e.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
