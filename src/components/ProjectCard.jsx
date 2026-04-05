import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="group relative"
    >
      {/* Project image */}
      <div className="relative overflow-hidden aspect-video bg-card">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-all duration-500" />

        {/* Floating role pills */}
        <div className="absolute top-6 right-6 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {project.roles.map((role) => (
            <span key={role} className="font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 bg-background/90 backdrop-blur text-primary border border-border">
              {role}
            </span>
          ))}
        </div>

        {/* Arrow */}
        <div className="absolute bottom-6 right-6 w-12 h-12 flex items-center justify-center border border-primary/30 text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:border-accent group-hover:text-accent">
          <ArrowUpRight size={20} />
        </div>
      </div>

      {/* Project info */}
      <div className="mt-8 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="flex-1">
          <h3 className="font-display text-3xl md:text-4xl text-primary mb-3">{project.title}</h3>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </div>

        <div className="flex gap-8 md:gap-12">
          {project.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl md:text-4xl text-primary">{stat.value}</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Separator */}
      <div className="w-full h-px bg-border mt-12" />
    </motion.div>
  );
}