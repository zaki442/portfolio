export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-card/40">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-mono text-xs text-muted tracking-wider mb-3">~/contact</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-8">
          Get In <span className="text-accent">Touch</span>
        </h2>

        <p className="text-muted text-sm mb-10 max-w-md mx-auto">
          Interested in working together? Let&apos;s talk about your project.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          <a
            href="mailto:ziko442@gmail.com"
            className="p-4 rounded-md border border-border bg-card hover:border-accent/50 transition-colors group"
          >
            <svg className="w-6 h-6 mx-auto mb-2 text-accent group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <p className="text-sm font-medium">Email</p>
            <p className="text-xs text-muted mt-1">ziko442@gmail.com</p>
          </a>

          <a
            href="tel:+212706080306"
            className="p-4 rounded-md border border-border bg-card hover:border-accent/50 transition-colors group"
          >
            <svg className="w-6 h-6 mx-auto mb-2 text-accent group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            <p className="text-sm font-medium">Phone</p>
            <p className="text-xs text-muted mt-1">+212 7 06 08 03 06</p>
          </a>

          <a
            href="https://linkedin.com/in/zakaria2abid"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-md border border-border bg-card hover:border-accent/50 transition-colors group"
          >
            <svg className="w-6 h-6 mx-auto mb-2 text-accent group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <p className="text-sm font-medium">LinkedIn</p>
            <p className="text-xs text-muted mt-1">zakaria2abid</p>
          </a>
        </div>

        <div className="mb-10">
          <a
            href="cv_resume_v_eng.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-background px-6 py-3 rounded-md font-semibold transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download CV (PDF)
          </a>
        </div>

        <div className="border-t border-border pt-8 text-center font-mono text-xs text-muted">
          <p>&copy; {new Date().getFullYear()} Zakaria Abid. Built with Next.js &amp; Tailwind CSS.</p>
          <p className="mt-1">
            <a href="mailto:ziko442@gmail.com" className="text-accent hover:underline">ziko442@gmail.com</a>
            {" / "}
            <a href="https://linkedin.com/in/zakaria2abid" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">LinkedIn</a>
          </p>
        </div>
      </div>
    </section>
  );
}
