import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Discovery",
    challenge: "Understanding the problem space, user pain points, and business objectives.",
    hypothesis: "Deep research and stakeholder alignment to define the right problem to solve.",
    outcome: "Clear problem statement, user personas, and strategic roadmap.",
  },
  {
    number: "02",
    title: "Ideation",
    challenge: "Generating solutions that balance user needs with technical feasibility.",
    hypothesis: "Rapid ideation through workshops, sketching, and collaborative brainstorming.",
    outcome: "Validated concepts, user flows, and low-fidelity wireframes.",
  },
  {
    number: "03",
    title: "Design",
    challenge: "Translating abstract concepts into pixel-perfect, intuitive interfaces.",
    hypothesis: "Iterative design with constant feedback loops and usability testing.",
    outcome: "High-fidelity prototypes, design system, and interaction specifications.",
  },
  {
    number: "04",
    title: "Deliver",
    challenge: "Ensuring design integrity through development handoff and launch.",
    hypothesis: "Close collaboration with developers and QA for seamless implementation.",
    outcome: "Production-ready product, measured impact, and continuous optimization.",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineWidth = useTransform(scrollYProgress, [0, 0.6], ["0%", "100%"]);

  return (
    <section id="process" ref={ref} className="py-32 px-6 md:px-12 lg:px-20 border-t border-border overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-end justify-between mb-16"
      >
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-3">03 — Process</p>
          <h2 className="font-display font-light text-[clamp(36px,5vw,72px)] text-primary leading-none">
            How I <span className="italic">Think</span>
          </h2>
        </div>
      </motion.div>

      {/* Animated progress line */}
      <div className="relative mb-16 hidden md:block">
        <div className="w-full h-px bg-border" />
        <motion.div
          className="absolute top-0 left-0 h-px bg-accent"
          style={{ width: lineWidth }}
        />
        <div className="flex justify-between mt-4">
          {STEPS.map((s) => (
            <span key={s.number} className="font-mono text-[10px] text-muted-foreground/40">{s.number}</span>
          ))}
        </div>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/30">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-background p-8 group hover:bg-card transition-colors duration-500 relative overflow-hidden"
          >
            {/* Large background number */}
            <span className="absolute -top-4 -right-2 font-display text-[120px] font-bold text-border/20 select-none group-hover:text-accent/10 transition-colors duration-500 leading-none">
              {step.number}
            </span>

            <div className="relative z-10">
              <h3 className="font-display text-3xl text-primary mb-8 group-hover:text-accent transition-colors duration-500">
                {step.title}
              </h3>

              <div className="space-y-6">
                {[
                  { label: "Challenge", text: step.challenge },
                  { label: "Approach", text: step.hypothesis },
                  { label: "Outcome", text: step.outcome },
                ].map(({ label, text }) => (
                  <div key={label}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-px bg-accent" />
                      <p className="font-mono text-[9px] uppercase tracking-widest text-accent">{label}</p>
                    </div>
                    <p className="font-mono text-[11px] text-muted-foreground leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}