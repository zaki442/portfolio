import SectionHeading from "./section-heading";
import { domainStyle, type Domain } from "@/lib/domains";

interface Skill {
  name: string
  file?: string
}

const skillGroups: { label: string; domain: Domain; skills: Skill[] }[] = [
  {
    label: "Frontend",
    domain: "build",
    skills: [
      { name: "JavaScript", file: "javascript.svg" },
      { name: "TypeScript", file: "typescript.svg" },
      { name: "Angular", file: "angular.svg" },
      { name: "React", file: "react.svg" },
      { name: "Next.js", file: "nextdotjs.svg" },
      { name: "Tailwind CSS", file: "tailwindcss.svg" },
      { name: "HTML", file: "html5.svg" },
      { name: "CSS", file: "css3.svg" },
    ],
  },
  {
    label: "Backend",
    domain: "build",
    skills: [
      { name: "Node.js", file: "nodedotjs.svg" },
      { name: "Express", file: "express.svg" },
      { name: "Java", file: "openjdk.svg" },
      { name: "Spring Boot", file: "springboot.svg" },
      { name: "C#", file: "csharp.svg" },
      { name: ".NET", file: "dotnet.svg" },
      { name: "Python", file: "python.svg" },
      { name: "Django", file: "django.svg" },
      { name: "REST APIs", file: "lucide-server.svg" },
      { name: "JWT / OAuth", file: "jsonwebtokens.svg" },
    ],
  },
  {
    label: "Database & DevOps",
    domain: "build",
    skills: [
      { name: "MongoDB", file: "mongodb.svg" },
      { name: "PostgreSQL", file: "postgresql.svg" },
      { name: "MySQL", file: "mysql.svg" },
      { name: "Git", file: "git.svg" },
      { name: "GitHub", file: "github.svg" },
      { name: "Docker", file: "docker.svg" },
      { name: "Linux", file: "linux.svg" },
      { name: "Bash", file: "linux.svg" },
      { name: "CI/CD", file: "githubactions.svg" },
    ],
  },
  {
    label: "AI & Data",
    domain: "build",
    skills: [
      { name: "Python", file: "python.svg" },
      { name: "TensorFlow", file: "tensorflow.svg" },
      { name: "LangChain", file: "langchain.svg" },
      { name: "Pandas", file: "pandas.svg" },
      { name: "scikit-learn", file: "scikitlearn.svg" },
      { name: "Kaggle", file: "kaggle.svg" },
      { name: "Hugging Face", file: "huggingface.svg" },
    ],
  },
  {
    label: "Cybersecurity",
    domain: "secure",
    skills: [
      { name: "TryHackMe", file: "tryhackme.svg" },
      { name: "Kali Linux", file: "kalilinux.svg" },
      { name: "Wireshark", file: "wireshark.svg" },
      { name: "Burp Suite", file: "burpsuite.svg" },
      { name: "OSINT", file: "lucide-search.svg" },
      { name: "XSS / SQLI", file: "lucide-bug.svg" },
    ],
  },
  {
    label: "Automation & Tools",
    domain: "trade",
    skills: [
      { name: "Selenium", file: "selenium.svg" },
      { name: "Playwright", file: "playwright.svg" },
      { name: "Alpaca API", file: "lucide-trending-up.svg" },
      { name: "ccxt", file: "lucide-repeat.svg" },
      { name: "Backtrader", file: "lucide-line-chart.svg" },
      { name: "Stripe", file: "stripe.svg" },
    ],
  },
];

const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading path="skills" title="My" highlight="Skills" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => {
            const d = domainStyle[group.domain];
            return (
              <div
                key={group.label}
                className="p-5 rounded-md border border-border bg-card/50"
              >
                <h3 className={`text-xs font-mono font-semibold uppercase tracking-wider mb-3 ${d.text}`}>
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((s) => (
                    <span
                      key={s.name}
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-xs border border-border rounded-md text-muted transition-colors hover:border-muted hover:text-foreground"
                    >
                      {s.file && <img src={`${basePath}/logos/${s.file}`} alt="" className="w-4 h-4 shrink-0" />}
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
