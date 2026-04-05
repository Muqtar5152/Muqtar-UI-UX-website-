import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const HERO_BG = "https://media.base44.com/images/public/69d210048f16a11240ab7c36/badbbaac9_generated_image.png";

const CHAR_VARIANTS = {
  hidden: { y: "110%", opacity: 0 },
  visible: (i) => ({
    y: "0%",
    opacity: 1,
    transition: { delay: i * 0.04, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

function SplitText({ text, className, startDelay = 0 }) {
  return (
    <span className={`inline-flex flex-wrap overflow-hidden ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={startDelay + i}
          variants={CHAR_VARIANTS}
          initial="hidden"
          animate="visible"
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], ["0%", "20%"]);
  const textY = useTransform(scrollY, [0, 600], ["0%", "10%"]);

  const scrollToWork = () => {
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24 overflow-hidden"
      style={{ cursor: "none" }}
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover scale-110"
          style={{ opacity: 0.12 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      </motion.div>

      {/* Vertical label top-right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute top-32 right-8 md:right-12 hidden md:flex flex-col items-center gap-3"
      >
        <span
          className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50"
          style={{ writingMode: "vertical-rl" }}
        >
          UI/UX Designer — 2026
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-border/40 to-transparent" />
      </motion.div>

      {/* Main content */}
      <motion.div style={{ y: textY }} className="relative z-10 px-6 md:px-12 lg:px-20 max-w-[1400px]">
        {/* Tag line */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-8 h-px bg-accent" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            Available for work
          </span>
        </motion.div>

        {/* Giant headline */}
        <div className="overflow-hidden mb-2">
          <h1 className="font-display font-light leading-[0.85] tracking-tight">
            <span className="block text-[clamp(56px,10vw,160px)] text-primary overflow-hidden">
              <SplitText text="Clarity," />
            </span>
            <span className="block text-[clamp(56px,10vw,160px)] overflow-hidden">
              <SplitText
                text="Over Complexity"
                className="italic text-accent"
                startDelay={12}
              />
            </span>
          </h1>
        </div>

        {/* Bottom row */}
        <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="font-mono text-sm md:text-base text-muted-foreground leading-[1.8] max-w-sm"
          >
            I'm a UI/UX Designer with a background in architecture,
            crafting user-focused products that are simple, functional, and impactful.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex items-center gap-4"
          >
            <button
              onClick={scrollToWork}
              className="group relative font-mono text-xs uppercase tracking-widest px-8 py-4 bg-primary text-primary-foreground overflow-hidden min-h-[48px]"
            >
              <span className="relative z-10 flex items-center gap-3">
                See Case Studies
                <ArrowDownRight size={14} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
              <span className="absolute inset-0 bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </button>

            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="font-mono text-xs uppercase tracking-widest px-8 py-4 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 min-h-[48px]"
            >
              Start a Project
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll counter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-6 md:left-12 flex items-center gap-4"
      >
        <span className="font-mono text-[10px] text-muted-foreground/40">01 / SCROLL</span>
        <div className="w-12 h-px bg-border" />
      </motion.div>
    </section>
  );
}