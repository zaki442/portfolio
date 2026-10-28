import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zakaria Abid — Full Stack Developer",
  description:
    "Certified Full Stack Developer with 5+ years of experience in MERN, Angular, .NET, Java Spring Boot, Python, and Cybersecurity.",
  openGraph: {
    title: "Zakaria Abid — Full Stack Developer",
    description:
      "Certified Full Stack Developer with 5+ years of experience in MERN, Angular, .NET, Java Spring Boot, Python, and Cybersecurity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-background text-foreground font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
