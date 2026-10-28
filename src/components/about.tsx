"use client";

import SectionHeading from "./section-heading";
import { useLanguage } from "@/lib/i18n";

const techs = [
  { name: "JavaScript", file: "javascript.svg" },
  { name: "TypeScript", file: "typescript.svg" },
  { name: "Angular", file: "angular.svg" },
  { name: "React", file: "react.svg" },
  { name: "Next.js", file: "nextdotjs.svg" },
  { name: "Node.js", file: "nodedotjs.svg" },
  { name: "Express", file: "express.svg" },
  { name: "Java", file: "openjdk.svg" },
  { name: "Spring Boot", file: "springboot.svg" },
  { name: "C#", file: "csharp.svg" },
  { name: ".NET", file: "dotnet.svg" },
  { name: "Python", file: "python.svg" },
  { name: "Django", file: "django.svg" },
  { name: "MongoDB", file: "mongodb.svg" },
  { name: "SQL", file: "mysql.svg" },
  { name: "Git", file: "git.svg" },
  { name: "Docker", file: "docker.svg" },
  { name: "Cybersecurity", file: "letsencrypt.svg" },
];

const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading path="about" title={a.heading.title} highlight={a.heading.highlight} />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-muted leading-relaxed text-sm">{a.bio}</p>
            <div className="mt-8">
              <h3 className="font-mono text-xs font-semibold text-foreground mb-3 tracking-wider uppercase">
                {a.contactLabel}
              </h3>
              <div className="space-y-2 text-sm text-muted">
                <p>
                  <span className="text-muted/70 inline-block w-24">{a.email}</span>
                  <a href="mailto:ziko442@gmail.com" className="text-accent hover:underline">ziko442@gmail.com</a>
                </p>
                <p>
                  <span className="text-muted/70 inline-block w-24">{a.phone}</span>
                  <span>(+212) 7 06 08 03 06</span>
                </p>
                <p>
                  <span className="text-muted/70 inline-block w-24">{a.location}</span>
                  <span>{a.locationValue}</span>
                </p>
                <p>
                  <span className="text-muted/70 inline-block w-24">{a.linkedin}</span>
                  <a href="https://linkedin.com/in/zakaria2abid" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">linkedin.com/in/zakaria2abid</a>
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs font-semibold text-foreground mb-3 tracking-wider uppercase">
              {a.techLabel}
            </h3>
            <div className="flex flex-wrap gap-2">
              {techs.map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center gap-1.5 px-3 py-2 border border-border rounded-md text-sm transition-colors hover:border-muted"
                >
                  <img src={`${basePath}/logos/${tech.file}`} alt="" className="w-5 h-5 shrink-0" />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
