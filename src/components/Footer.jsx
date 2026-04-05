import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 md:px-12 lg:px-20 py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex items-baseline gap-6">
          <span className="font-display text-3xl text-primary">
            M<span className="text-accent">.</span>
          </span>
          <span className="font-mono text-[10px] text-muted-foreground/40 uppercase tracking-widest">
            © {currentYear} Muqtar Pasha
          </span>
        </div>

        <div className="flex flex-wrap gap-8">
          <a
            href="https://www.linkedin.com/in/mohammad-muqtar-pasha-9870a5187"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors duration-300"
          >
            LinkedIn <ArrowUpRight size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="mailto:muqtarpasha5152@gmail.com"
            className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors duration-300"
          >
            Email
          </a>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors duration-300"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </footer>
  );
}