import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Work", href: "#work", num: "01" },
  { label: "Process", href: "#process", num: "02" },
  { label: "About", href: "#about", num: "03" },
  { label: "Blog", href: "#blog", num: "04" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border/50" : ""
        }`}
      >
        <div className="px-6 md:px-12 lg:px-20 flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            className="font-display text-xl font-medium text-primary group flex items-center gap-2"
          >
            <span className="font-mono text-[10px] text-accent">©</span>
            <span>Muqtar</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="group flex items-start gap-1 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <span className="text-[8px] text-accent/60 mt-0.5">{link.num}</span>
                {link.label}
              </button>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo("#contact")}
              className="hidden md:flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent border border-accent/50 px-5 py-2.5 hover:bg-accent hover:text-primary-foreground transition-all duration-300 min-h-[44px]"
            >
              Hire Me
              <ArrowUpRight size={12} />
            </button>

            {/* Mobile hamburger — custom lines */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px bg-primary origin-center"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                className="block w-6 h-px bg-primary"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px bg-primary origin-center"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-background flex flex-col justify-end pb-16 pt-24 px-8"
          >
            <div className="flex flex-col gap-1">
              {[...NAV_LINKS, { label: "Contact", href: "#contact", num: "05" }].map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  onClick={() => scrollTo(link.href)}
                  className="flex items-baseline gap-3 py-4 border-b border-border/30 text-left group"
                >
                  <span className="font-mono text-[10px] text-accent/60 w-6">{link.num}</span>
                  <span className="font-display text-4xl font-light text-primary group-hover:text-accent transition-colors duration-300">
                    {link.label}
                  </span>
                </motion.button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex gap-8"
            >
              <a href="https://www.linkedin.com/in/mohammad-muqtar-pasha-9870a5187" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-muted-foreground uppercase tracking-widest">LinkedIn</a>
              <a href="mailto:muqtarpasha5152@gmail.com" className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Email</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}