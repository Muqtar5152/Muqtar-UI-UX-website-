import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ABOUT_IMG = "https://media.base44.com/images/public/69d210048f16a11240ab7c36/c16002a13_generated_fa9148dc.png";

const SKILLS = [
  "UX Design", "UI Design", "Product Design", "Consulting",
  "Design Systems", "Front-End Dev", "Design Sprint",
  "Interaction Design", "User Testing", "UX Research",
  "Leadership", "Mentoring", "No-Code", "Workshops",
];

const STATS = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Delivered" },
  { value: "4.8", label: "Avg Satisfaction" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" ref={ref} className="py-32 px-6 md:px-12 lg:px-20 border-t border-border">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-3">04 — About</p>
        <h2 className="font-display font-light text-[clamp(36px,5vw,72px)] text-primary leading-none">
          The <span className="italic">Designer</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
        {/* Image with parallax */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-4 relative"
        >
          <div className="relative aspect-[3/4] overflow-hidden bg-card">
            <motion.img
              src={ABOUT_IMG}
              alt="Architectural detail"
              className="w-full h-[115%] object-cover absolute top-0"
              style={{ y: imgY }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>

          {/* Stats overlay */}
          <div className="mt-8 grid grid-cols-3 gap-px bg-border">
            {STATS.map((s) => (
              <div key={s.label} className="bg-background px-4 py-5 text-center">
                <p className="font-display text-2xl text-accent">{s.value}</p>
                <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="lg:col-span-8 flex flex-col justify-center"
        >
          {/* Running quote */}
          <div className="overflow-hidden mb-12 -mx-6 md:-mx-12 lg:-mx-0">
            <div className="flex whitespace-nowrap animate-marquee" style={{ width: "fit-content" }}>
              {[1,2,3,4].map(i => (
                <span key={i} className="font-display text-3xl md:text-4xl italic text-muted-foreground/15 mr-10">
                  Architect-turned Designer — Spatial Thinking + Digital Craft — User-Centered Always —
                </span>
              ))}
            </div>
          </div>

          <p className="font-mono text-sm md:text-base text-muted-foreground leading-[1.9] mb-6">
            I'm Muqtar — an architect-turned UX/UI designer who brings spatial awareness,
            user-centered thinking, and clean aesthetics to every digital product I shape.
            My architecture background gives me a unique lens for creating interfaces that feel
            as intentional and purposeful as a well-designed building.
          </p>
          <p className="font-mono text-sm md:text-base text-muted-foreground leading-[1.9] mb-14">
            I specialize in transforming complex problems into simple, elegant solutions — from
            early-stage product strategy to pixel-perfect UI execution. Every project is driven
            by a relentless focus on usability and measurable business impact.
          </p>

          {/* Skills */}
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent mb-5">Capabilities</p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ borderColor: "#4A635D", color: "#EAE9E4" }}
                  className="font-mono text-[11px] px-4 py-2 border border-border text-muted-foreground transition-colors duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}