import SectionHeading from "./section-heading";
import { domainStyle, type Domain } from "@/lib/domains";

const interests: { title: string; desc: string; domain: Domain }[] = [
  {
    domain: "trade",
    title: "Algorithmic Trading",
    desc: "Building automated trading systems with Python, Alpaca API, Backtrader, and ccxt for crypto market support. Applying moving-average crossover strategies and quantitative analysis.",
  },
  {
    domain: "build",
    title: "AI & Machine Learning",
    desc: "Exploring TensorFlow, LangChain, and data science pipelines. Working on AI agents, marketing automation, and Kaggle competitions to deepen ML expertise.",
  },
  {
    domain: "secure",
    title: "Cybersecurity & OSINT",
    desc: "TryHackMe Level 53 (Top 5%) with hands-on experience in Kali Linux, Nmap, Wireshark, and Burp Suite. Passionate about ethical hacking, network security, and open-source intelligence.",
  },
];

export default function Interests() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading path="interests" title="Interests &" highlight="Focus" />

        <div className="grid md:grid-cols-3 gap-6">
          {interests.map((i) => {
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
