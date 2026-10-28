"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";
import type { Domain } from "@/lib/domains";

export type Lang = "en" | "fr";

type ProjectItem = {
  domain: Domain;
  title: string;
  tech: string;
  desc: string;
  link?: string;
  date?: string;
};

const en = {
  nav: {
    links: [
      { href: "#about", label: "about" },
      { href: "#skills", label: "skills" },
      { href: "#experience", label: "experience" },
      { href: "#projects", label: "projects" },
      { href: "#contact", label: "contact" },
    ],
    resume: "resume.pdf",
    toggleLabel: "Switch language",
  },
  hero: {
    tagline:
      "Full-stack builder who ships production code, breaks it on purpose, and keeps an eye on the markets while it runs.",
    status: [
      { label: "build", detail: "MERN · Angular · .NET · Spring Boot", dot: "bg-accent" },
      { label: "secure", detail: "TryHackMe Lvl 53 · OSINT · Burp Suite", dot: "bg-signal" },
      { label: "trade", detail: "Alpaca API · Backtrader · ccxt", dot: "bg-ticker" },
    ],
    projectsBtn: "View Projects",
    cvBtn: "Download CV",
    contactBtn: "Contact Me →",
  },
  about: {
    heading: { title: "About", highlight: "Me" },
    bio: "Certified Full Stack Developer with 5+ years of experience across the MERN stack, Angular, .NET, and Java Spring Boot. Built production applications for US-based clients, an algorithmic trading system, and a Moroccan community platform. Self-taught programmer who started young, with growing expertise in AI/ML, cybersecurity (TryHackMe Lvl 53), and Python automation. Fluent in French and English.",
    contactLabel: "Contact",
    email: "Email",
    phone: "Phone",
    location: "Location",
    locationValue: "Bouznika, Morocco",
    linkedin: "LinkedIn",
    techLabel: "Technologies",
  },
  services: {
    heading: { title: "What I", highlight: "Do" },
    items: [
      {
        domain: "build" as Domain,
        title: "Full Stack Web Development",
        desc: "End-to-end development using MERN stack, Angular, .NET, and Java Spring Boot. From responsive frontends to robust APIs and database design — delivering production-ready solutions.",
      },
      {
        domain: "build" as Domain,
        title: "AI & Automation",
        desc: "Python-based automation, algorithmic trading systems, AI agents for marketing and lead generation. Experience with TensorFlow, LangChain, Pandas, and data science pipelines.",
      },
      {
        domain: "secure" as Domain,
        title: "Cybersecurity & OSINT",
        desc: "TryHackMe Level 53 (Top 5%) with experience in Kali Linux, Nmap, Wireshark, Burp Suite, and ethical hacking. Knowledge of XSS, SQLI, TCP/IP protocols, and OSINT fundamentals.",
      },
    ],
  },
  skills: {
    heading: { title: "My", highlight: "Skills" },
    groups: {
      Frontend: "Frontend",
      Backend: "Backend",
      "Database & DevOps": "Database & DevOps",
      "AI & Data": "AI & Data",
      Cybersecurity: "Cybersecurity",
      "Automation & Tools": "Automation & Tools",
    } as Record<string, string>,
  },
  experience: {
    heading: { title: "Experience &", highlight: "Education" },
    workLabel: "Work Experience",
    eduLabel: "Education",
    work: [
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
    ],
    education: [
      {
        degree: "Bachelor's in JEE & .NET Development",
        school: "Hassan II University — Faculty of Sciences Ain Chock",
        period: "2018 – 2019",
      },
      {
        degree: "Specialized Technician in IT Development (TSDI)",
        school: "TSDI",
        period: "2017 – 2018",
      },
      {
        degree: "Mathematics, Physics, Chemistry & Sciences",
        school: "Hassan II University",
        period: "2015 – 2016",
      },
    ],
  },
  projects: {
    heading: { title: "Featured", highlight: "Projects" },
    items: [
      {
        domain: "build" as Domain,
        title: "Waitlisapp",
        tech: "Next.js, Supabase, Paddle, Resend",
        desc: "SaaS for spinning up branded waitlist landing pages in minutes. Email capture with referral-based viral growth, an analytics dashboard, subscription billing via Paddle (merchant of record), and transactional email through Resend.",
        link: "https://www.waitlisapp.com",
        date: "Jul 2026",
      },
      {
        domain: "build" as Domain,
        title: "Agile B Darija",
        tech: "Next.js, React, Tailwind CSS, Python",
        desc: "Community platform promoting agile practices in Morocco. Volunteer management, event/training sections, online donations (CIH & PayPal), secure admin dashboard, and a Python certificate generator.",
        date: "Jan – Jul 2026",
      },
      {
        domain: "build" as Domain,
        title: "MonStore",
        tech: "Laravel, PHP, MySQL, Redis, Tailwind CSS, Alpine.js",
        desc: "Fully containerized e-commerce platform with a mobile-first storefront, customer area, and admin panel. Dockerized stack with nginx, MySQL, Redis cache/queue, and Laravel Breeze auth.",
        date: "Jun – Jul 2026",
      },
      {
        domain: "trade" as Domain,
        title: "Trading-Factory",
        tech: "Python, Alpaca API, Backtrader, ccxt",
        desc: "Modular algorithmic trading system implementing moving-average crossover strategies. Extended with vectorbt, TA-Lib, QuantStats for backtesting and performance analysis.",
        date: "Jun 2026",
      },
      {
        domain: "build" as Domain,
        title: "Marketing AI Agent",
        tech: "Python, AI, CRM, Lead Generation",
        desc: "Autonomous marketing agent with modules for lead generation, CRM, content publishing, and analytics. Automated multi-platform engagement and image caching pipeline.",
        date: "Jun 2026",
      },
      {
        domain: "build" as Domain,
        title: "Onirique-Ride",
        tech: "MERN Stack, Stripe API",
        desc: "Luxury chauffeur-service ride-hailing app with in-app booking, trip history, and payment processing for a US-based client.",
      },
    ] as ProjectItem[],
  },
  certifications: {
    heading: { title: "Certifications &", highlight: "Learning" },
    items: [
      { name: "Python for Everybody Specialization — University of Michigan (Coursera)", domain: "build" as Domain },
      { name: "Django for Everybody Specialization — University of Michigan (Coursera)", domain: "build" as Domain },
      { name: "TryHackMe — Level 53, Top 5% (Cyber Crusader, 90 rooms completed)", domain: "secure" as Domain },
      { name: "Kaggle — Python & programming coursework, Tabular Playground Series competitor", domain: "build" as Domain },
      { name: "TOEFL iBT 2026 — Udemy (In Progress)", domain: "build" as Domain },
      { name: "OSINT Fundamentals — Udemy", domain: "secure" as Domain },
      { name: "Generative AI Learning Path — Google Cloud Skills Boost", domain: "build" as Domain },
      { name: "DeepLearning.AI TensorFlow Developer — Coursera", domain: "build" as Domain },
      { name: "IBM AI Engineering Professional Certificate — Coursera", domain: "build" as Domain },
      { name: "Practical Deep Learning for Coders — fast.ai", domain: "build" as Domain },
      { name: "Algorithms & Data Structures — Neetcode / LeetCode", domain: "build" as Domain },
    ],
  },
  interests: {
    heading: { title: "Interests &", highlight: "Focus" },
    items: [
      {
        domain: "trade" as Domain,
        title: "Algorithmic Trading",
        desc: "Building automated trading systems with Python, Alpaca API, Backtrader, and ccxt for crypto market support. Applying moving-average crossover strategies and quantitative analysis.",
      },
      {
        domain: "build" as Domain,
        title: "AI & Machine Learning",
        desc: "Exploring TensorFlow, LangChain, and data science pipelines. Working on AI agents, marketing automation, and Kaggle competitions to deepen ML expertise.",
      },
      {
        domain: "secure" as Domain,
        title: "Cybersecurity & OSINT",
        desc: "TryHackMe Level 53 (Top 5%) with hands-on experience in Kali Linux, Nmap, Wireshark, and Burp Suite. Passionate about ethical hacking, network security, and open-source intelligence.",
      },
    ],
  },
  contact: {
    heading: { title: "Get In", highlight: "Touch" },
    intro: "Interested in working together? Let's talk about your project.",
    email: "Email",
    phone: "Phone",
    linkedin: "LinkedIn",
    cvBtn: "Download CV (PDF)",
    footer: "Built with Next.js & Tailwind CSS.",
  },
};

const fr: typeof en = {
  nav: {
    links: [
      { href: "#about", label: "à-propos" },
      { href: "#skills", label: "compétences" },
      { href: "#experience", label: "expérience" },
      { href: "#projects", label: "projets" },
      { href: "#contact", label: "contact" },
    ],
    resume: "cv.pdf",
    toggleLabel: "Changer de langue",
  },
  hero: {
    tagline:
      "Développeur full-stack qui livre du code de production, le casse volontairement pour le tester, et garde un œil sur les marchés pendant que tout tourne.",
    status: [
      { label: "build", detail: "MERN · Angular · .NET · Spring Boot", dot: "bg-accent" },
      { label: "secure", detail: "TryHackMe Niv. 53 · OSINT · Burp Suite", dot: "bg-signal" },
      { label: "trade", detail: "Alpaca API · Backtrader · ccxt", dot: "bg-ticker" },
    ],
    projectsBtn: "Voir les projets",
    cvBtn: "Télécharger le CV",
    contactBtn: "Me contacter →",
  },
  about: {
    heading: { title: "À propos", highlight: "de moi" },
    bio: "Développeur Full Stack certifié avec plus de 5 ans d'expérience sur le stack MERN, Angular, .NET et Java Spring Boot. J'ai développé des applications en production pour des clients basés aux États-Unis, un système de trading algorithmique et une plateforme communautaire marocaine. Programmeur autodidacte ayant commencé jeune, avec une expertise croissante en IA/ML, cybersécurité (TryHackMe Niv. 53) et automatisation Python. Bilingue français et anglais.",
    contactLabel: "Contact",
    email: "Email",
    phone: "Téléphone",
    location: "Localisation",
    locationValue: "Bouznika, Maroc",
    linkedin: "LinkedIn",
    techLabel: "Technologies",
  },
  services: {
    heading: { title: "Ce que je", highlight: "fais" },
    items: [
      {
        domain: "build",
        title: "Développement Web Full Stack",
        desc: "Développement de bout en bout avec le stack MERN, Angular, .NET et Java Spring Boot. Des interfaces responsives aux API robustes et à la conception de bases de données — en livrant des solutions prêtes pour la production.",
      },
      {
        domain: "build",
        title: "IA & Automatisation",
        desc: "Automatisation en Python, systèmes de trading algorithmique, agents IA pour le marketing et la génération de leads. Expérience avec TensorFlow, LangChain, Pandas et pipelines de data science.",
      },
      {
        domain: "secure",
        title: "Cybersécurité & OSINT",
        desc: "TryHackMe Niveau 53 (Top 5%) avec expérience sur Kali Linux, Nmap, Wireshark, Burp Suite et le hacking éthique. Connaissance des failles XSS, SQLI, des protocoles TCP/IP et des fondamentaux de l'OSINT.",
      },
    ],
  },
  skills: {
    heading: { title: "Mes", highlight: "Compétences" },
    groups: {
      Frontend: "Frontend",
      Backend: "Backend",
      "Database & DevOps": "Base de données & DevOps",
      "AI & Data": "IA & Data",
      Cybersecurity: "Cybersécurité",
      "Automation & Tools": "Automatisation & Outils",
    },
  },
  experience: {
    heading: { title: "Expérience &", highlight: "Formation" },
    workLabel: "Expérience professionnelle",
    eduLabel: "Formation",
    work: [
      {
        role: "Support informatique / Développeur bénévole",
        company: "Agile Bdarija (Communauté)",
        period: "Jan 2026 – Présent",
        desc: "Support informatique et développement continu pour une plateforme communautaire marocaine promouvant les pratiques agiles — refonte du site sur Next.js, création d'un pipeline Python de génération de certificats, et automatisation des campagnes e-mail/WhatsApp pour les événements et formations.",
      },
      {
        role: "Développeur Full Stack Freelance",
        company: "Indépendant",
        period: "Juil 2023 – Présent",
        desc: "Développeur indépendant livrant des applications web full-stack et des produits SaaS pour des clients, dont Waitlisapp (Next.js, Supabase, facturation Paddle) et MonStore (plateforme e-commerce Laravel conteneurisée, réalisée avec un partenaire de développement). Développe aussi des outils d'automatisation Python et de trading algorithmique.",
      },
      {
        role: "Développeur Full Stack Freelance",
        company: "Client freelance — Outils de vente & prospection",
        period: "Déc 2024",
        desc: "Développement d'une application de bureau d'envoi groupé WhatsApp (Electron, React) et d'un système de reporting commercial & d'analyse (React, Node.js, MongoDB) avec accès basé sur les rôles, analyse de tendances et export de rapports PDF/Word.",
      },
      {
        role: "Développeur Full Stack",
        company: "Gravitech",
        period: "Nov 2023 – Nov 2024",
        desc: "Développement du site marketing d'une agence digitale (PHP/HTML) puis d'une plateforme e-commerce (TypeScript) pour le même client, en collaboration avec un partenaire de développement.",
      },
      {
        role: "Développeur Full Stack Freelance",
        company: "Client freelance — Laboratoire médical",
        period: "Juil 2023 – Août 2023",
        desc: "Développement de sites web et d'outils internes pour un client de laboratoire médical, incluant un module de reporting des résultats d'analyses.",
      },
      {
        role: "Développeur Full Stack",
        company: "Onirique-Ride",
        period: "Jan 2023 – Juil 2023",
        desc: "Développement d'une application de covoiturage de chauffeur de luxe sur le stack MERN (MongoDB, Express, React, Node.js). Livraison de la réservation de trajets in-app, de l'historique des trajets et du paiement par Stripe pour un client basé aux États-Unis.",
      },
      {
        role: "Gestion des stocks / Développeur",
        company: "Leley Boutique LLC",
        period: "Août 2022 – Fév 2023",
        desc: "Développement d'une librairie en ligne full-stack avec Angular et Java Spring Boot. Intégration des paiements Stripe, de l'authentification JWT, d'API REST et de la validation des entrées.",
      },
      {
        role: "Développeur Full Stack",
        company: "Bratil Consulting",
        period: "Fév 2021 – Juil 2022",
        desc: "Développement d'un générateur de rapports en .NET & Angular automatisant la rédaction des rapports techniques pour les bureaux de contrôle Dekra.",
      },
      {
        role: "Développeur Full Stack (Stage)",
        company: "Libens Consulting",
        period: "Juin 2020 – Jan 2021",
        desc: "Livraison de solutions d'entreprise avec Java et Angular durant un stage de six mois.",
      },
      {
        role: "Développeur Full Stack (Stage)",
        company: "FSAC — Faculté des Sciences Aïn Chock",
        period: "Jan 2018 – Jan 2020",
        desc: "Développement d'applications Java et Angular durant un stage de deux ans.",
      },
    ],
    education: [
      {
        degree: "Licence en développement JEE & .NET",
        school: "Université Hassan II — Faculté des Sciences Aïn Chock",
        period: "2018 – 2019",
      },
      {
        degree: "Technicien Spécialisé en Développement Informatique (TSDI)",
        school: "TSDI",
        period: "2017 – 2018",
      },
      {
        degree: "Mathématiques, Physique, Chimie & Sciences",
        school: "Université Hassan II",
        period: "2015 – 2016",
      },
    ],
  },
  projects: {
    heading: { title: "Projets", highlight: "phares" },
    items: [
      {
        domain: "build",
        title: "Waitlisapp",
        tech: "Next.js, Supabase, Paddle, Resend",
        desc: "SaaS permettant de créer en quelques minutes des pages d'attente de marque. Capture d'e-mails avec croissance virale par parrainage, tableau de bord analytique, facturation par abonnement via Paddle (marchand de référence) et e-mails transactionnels via Resend.",
        link: "https://www.waitlisapp.com",
        date: "Juil 2026",
      },
      {
        domain: "build",
        title: "Agile B Darija",
        tech: "Next.js, React, Tailwind CSS, Python",
        desc: "Plateforme communautaire promouvant les pratiques agiles au Maroc. Gestion des bénévoles, sections événements/formations, dons en ligne (CIH & PayPal), tableau de bord d'administration sécurisé et générateur de certificats en Python.",
        date: "Jan – Juil 2026",
      },
      {
        domain: "build",
        title: "MonStore",
        tech: "Laravel, PHP, MySQL, Redis, Tailwind CSS, Alpine.js",
        desc: "Plateforme e-commerce entièrement conteneurisée avec vitrine mobile-first, espace client et panneau d'administration. Stack Docker avec nginx, MySQL, cache/file Redis et authentification Laravel Breeze.",
        date: "Juin – Juil 2026",
      },
      {
        domain: "trade",
        title: "Trading-Factory",
        tech: "Python, Alpaca API, Backtrader, ccxt",
        desc: "Système de trading algorithmique modulaire implémentant des stratégies de croisement de moyennes mobiles. Étendu avec vectorbt, TA-Lib, QuantStats pour le backtesting et l'analyse de performance.",
        date: "Juin 2026",
      },
      {
        domain: "build",
        title: "Marketing AI Agent",
        tech: "Python, AI, CRM, Lead Generation",
        desc: "Agent marketing autonome avec modules de génération de leads, CRM, publication de contenu et analytique. Engagement automatisé multi-plateformes et pipeline de mise en cache d'images.",
        date: "Juin 2026",
      },
      {
        domain: "build",
        title: "Onirique-Ride",
        tech: "MERN Stack, Stripe API",
        desc: "Application de covoiturage de chauffeur de luxe avec réservation in-app, historique des trajets et traitement des paiements pour un client américain.",
      },
    ],
  },
  certifications: {
    heading: { title: "Certifications &", highlight: "Apprentissage" },
    items: [
      { name: "Python for Everybody Specialization — University of Michigan (Coursera)", domain: "build" },
      { name: "Django for Everybody Specialization — University of Michigan (Coursera)", domain: "build" },
      { name: "TryHackMe — Niveau 53, Top 5% (Cyber Crusader, 90 salles complétées)", domain: "secure" },
      { name: "Kaggle — Cours de Python & programmation, compétiteur Tabular Playground Series", domain: "build" },
      { name: "TOEFL iBT 2026 — Udemy (En cours)", domain: "build" },
      { name: "Fondamentaux de l'OSINT — Udemy", domain: "secure" },
      { name: "Parcours d'apprentissage en IA générative — Google Cloud Skills Boost", domain: "build" },
      { name: "DeepLearning.AI TensorFlow Developer — Coursera", domain: "build" },
      { name: "Certificat professionnel IBM AI Engineering — Coursera", domain: "build" },
      { name: "Deep Learning pratique pour développeurs — fast.ai", domain: "build" },
      { name: "Algorithmes & structures de données — Neetcode / LeetCode", domain: "build" },
    ],
  },
  interests: {
    heading: { title: "Centres d'intérêt &", highlight: "Focus" },
    items: [
      {
        domain: "trade",
        title: "Trading Algorithmique",
        desc: "Création de systèmes de trading automatisés avec Python, Alpaca API, Backtrader et ccxt pour le support du marché crypto. Application de stratégies de croisement de moyennes mobiles et d'analyse quantitative.",
      },
      {
        domain: "build",
        title: "IA & Machine Learning",
        desc: "Exploration de TensorFlow, LangChain et pipelines de data science. Travail sur des agents IA, l'automatisation marketing et des compétitions Kaggle pour approfondir l'expertise ML.",
      },
      {
        domain: "secure",
        title: "Cybersécurité & OSINT",
        desc: "TryHackMe Niveau 53 (Top 5%) avec expérience pratique sur Kali Linux, Nmap, Wireshark et Burp Suite. Passionné par le hacking éthique, la sécurité réseau et le renseignement open source.",
      },
    ],
  },
  contact: {
    heading: { title: "Entrer en", highlight: "contact" },
    intro: "Envie de travailler ensemble ? Parlons de votre projet.",
    email: "Email",
    phone: "Téléphone",
    linkedin: "LinkedIn",
    cvBtn: "Télécharger le CV (PDF)",
    footer: "Réalisé avec Next.js & Tailwind CSS.",
  },
};

export const content: Record<Lang, typeof en> = { en, fr };

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: typeof en;
  resumeUrl: string;
  cvFileName: string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "lang";
const listeners = new Set<() => void>();
let cached: Lang = "en";
let initialized = false;

function readStoredLang(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "fr" || stored === "en" ? stored : "en";
}

function getSnapshot(): Lang {
  if (!initialized) {
    cached = readStoredLang();
    initialized = true;
  }
  return cached;
}

function getServerSnapshot(): Lang {
  return "en";
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      cached = readStoredLang();
      initialized = true;
      listeners.forEach((listener) => listener());
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", onStorage);
  };
}

function applyLang(lang: Lang) {
  cached = lang;
  initialized = true;
  window.localStorage.setItem(STORAGE_KEY, lang);
  listeners.forEach((listener) => listener());
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Lang) => applyLang(next);
  const toggleLang = () => applyLang(lang === "en" ? "fr" : "en");
  const resumeUrl = lang === "fr" ? "cv_resume_v_fr.pdf" : "cv_resume_v_eng.pdf";
  const cvFileName = lang === "fr" ? "CV_FR.pdf" : "CV_EN.pdf";

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t: content[lang], resumeUrl, cvFileName }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
