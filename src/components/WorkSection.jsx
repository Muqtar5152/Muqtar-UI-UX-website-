import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const PREVIEW_BASE = `${import.meta.env.BASE_URL}previews/`;

const PROJECTS = [
  {
    index: "01",
    title: "Plan It",
    category: "UX Design · Mobile App",
    year: "2025",
    url: "https://muqtar5152.github.io/PlanIt-Case-Study/",
    description: "A smart daily planner for focused living — helping users organize tasks, track habits, and stay motivated.",
    image: `${PREVIEW_BASE}plan-it-preview.svg`,
    stats: [{ value: "12%", label: "Conversion" }, { value: "4.8★", label: "Satisfaction" }],
    roles: ["UX Design", "UI Design", "Strategy"],
  },
  {
    index: "02",
    title: "Wander AI",
    category: "Product Design · AI",
    year: "2025",
    url: "https://muqtar5152.github.io/Wanderly-Case-Study/",
    description: "Reimagining travel planning with AI-driven personalization and curated recommendations.",
    image: `${PREVIEW_BASE}wander-ai-preview.svg`,
    stats: [{ value: "12m", label: "Avg Engagement" }, { value: "4.5★", label: "Satisfaction" }],
    roles: ["Product Design", "UX Research", "Interaction"],
  },
  {
    index: "03",
    title: "Sukoon",
    category: "UX Design · Wellness",
    year: "2024",
    url: "https://muqtar5152.github.io/Sukoon-Case-Study/",
    description: "An Islamic mindfulness & habit tracker blending tradition with modern design for spiritual well-being.",
    image: `${PREVIEW_BASE}sukoon-preview.svg`,
    stats: [{ value: "85%", label: "Usability" }, { value: "70%", label: "Retention" }],
    roles: ["UX Design", "Design System", "Consulting"],
  },
];

function ProjectRow({ project, onHover, onLeave, isHovered, anyHovered }) {
  const handleOpenLink = () => {
    if (project.url) {
      window.location.href = project.url;
    }
  };

  return (
    <motion.div
      onMouseEnter={() => onHover(project)}
      onMouseLeave={onLeave}
      onClick={handleOpenLink}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleOpenLink();
        }
      }}
      role="link"
      tabIndex={0}
      className={`group relative border-b border-border py-8 md:py-10 cursor-pointer transition-all duration-500 ${
        anyHovered && !isHovered ? "opacity-30" : "opacity-100"
      }`}
      style={{ cursor: "none" }}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0">
        {/* Index */}
        <span className="font-mono text-[10px] text-muted-foreground/50 md:w-16 shrink-0">
          {project.index}
        </span>

        {/* Title */}
        <div className="flex-1 md:px-8">
          <h3 className={`font-display font-light leading-none transition-all duration-500 ${
            isHovered ? "text-accent" : "text-primary"
          } text-[clamp(28px,4vw,56px)]`}>
            {project.title}
          </h3>
        </div>

        {/* Category */}
        <span className="font-mono text-xs text-muted-foreground md:w-56 shrink-0 hidden md:block">
          {project.category}
        </span>

        {/* Year */}
        <span className="font-mono text-xs text-muted-foreground md:w-16 shrink-0 hidden md:block">
          {project.year}
        </span>

        {/* Arrow */}
        <motion.span
          className="font-mono text-accent text-sm md:w-8 shrink-0 hidden md:block"
          initial={{ x: -4, opacity: 0 }}
          animate={isHovered ? { x: 0, opacity: 1 } : { x: -4, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          →
        </motion.span>
      </div>

      {/* Expanded details on mobile */}
      <div className="md:hidden mt-3 flex items-center gap-6">
        <span className="font-mono text-[11px] text-muted-foreground">{project.category}</span>
        <span className="font-mono text-[11px] text-muted-foreground">{project.year}</span>
      </div>
    </motion.div>
  );
}

function FloatingPreview({ project, mouseX, mouseY }) {
  return (
    <motion.div
      className="fixed pointer-events-none z-50 w-72 md:w-96 aspect-video overflow-hidden"
      style={{
        left: mouseX,
        top: mouseY,
        translateX: "-50%",
        translateY: "-60%",
      }}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/20" />
    </motion.div>
  );
}

export default function WorkSection() {
  const [hovered, setHovered] = useState(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 25 });

  const onMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section id="work" className="py-32 px-6 md:px-12 lg:px-20" onMouseMove={onMouseMove}>
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-end justify-between mb-16 border-b border-border pb-8"
      >
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-3">02 — Work</p>
          <h2 className="font-display font-light text-[clamp(36px,5vw,72px)] text-primary leading-none">
            Selected <span className="italic">Cases</span>
          </h2>
        </div>
        <span className="font-mono text-xs text-muted-foreground hidden md:block">
          {PROJECTS.length} Projects
        </span>
      </motion.div>

      {/* Project list */}
      <div>
        {PROJECTS.map((project) => (
          <ProjectRow
            key={project.index}
            project={project}
            onHover={setHovered}
            onLeave={() => setHovered(null)}
            isHovered={hovered?.index === project.index}
            anyHovered={!!hovered}
          />
        ))}
      </div>

      {/* Floating image preview (desktop only) */}
      {hovered && (
        <FloatingPreview
          project={hovered}
          mouseX={springX}
          mouseY={springY}
        />
      )}

      {/* Hovered project details panel */}
      <motion.div
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={hovered ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {hovered && (
          <>
            <div className="col-span-2">
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">Description</p>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">{hovered.description}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">Role</p>
              <div className="flex flex-col gap-1">
                {hovered.roles.map(r => (
                  <span key={r} className="font-mono text-xs text-muted-foreground">{r}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">Impact</p>
              <div className="flex flex-col gap-2">
                {hovered.stats.map(s => (
                  <div key={s.label}>
                    <span className="font-display text-xl text-primary">{s.value}</span>
                    <span className="font-mono text-[10px] text-muted-foreground ml-2">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </motion.div>
    </section>
  );
}