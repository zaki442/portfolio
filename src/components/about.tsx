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
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          About <span className="text-accent">Me</span>
        </h2>
        <div className="w-12 h-1 bg-accent mb-8" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-muted leading-relaxed text-sm">
              Certified Full Stack Developer with 5+ years of experience across the MERN stack, Angular, .NET, and Java Spring Boot. Built production applications for US-based clients, an algorithmic trading system, and a Moroccan community platform. Self-taught programmer who started young, with growing expertise in AI/ML, cybersecurity (TryHackMe Lvl 8), and Python automation. Fluent in French and English.
            </p>
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-white mb-3 tracking-wider uppercase">Contact</h3>
              <div className="space-y-2 text-sm text-muted">
                <p>
                  <span className="text-zinc-400 inline-block w-20">Email</span>
                  <a href="mailto:ziko442@gmail.com" className="text-accent hover:underline">ziko442@gmail.com</a>
                </p>
                <p>
                  <span className="text-zinc-400 inline-block w-20">Phone</span>
                  <span>(+212) 7 06 08 03 06</span>
                </p>
                <p>
                  <span className="text-zinc-400 inline-block w-20">Location</span>
                  <span>Bouznika, Morocco</span>
                </p>
                <p>
                  <span className="text-zinc-400 inline-block w-20">LinkedIn</span>
                  <a href="https://linkedin.com/in/zakaria2abid" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">linkedin.com/in/zakaria2abid</a>
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-3 tracking-wider uppercase">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {techs.map((t) => (
                <span
                  key={t.name}
                  className="inline-flex items-center gap-1.5 px-3 py-2 border border-zinc-700 rounded-md transition-colors hover:border-zinc-500"
                >
                  <img src={`${basePath}/logos/${t.file}`} alt="" className="w-6 h-6 shrink-0" />
                  {t.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
