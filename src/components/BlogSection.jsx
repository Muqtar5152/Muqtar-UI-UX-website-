import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const BLOG_POSTS = [
  {
    num: "01",
    title: "The Psychology of Intuitive Design",
    excerpt: "How cognitive biases shape user behavior and what designers can leverage to create effortless experiences.",
    date: "2025",
    category: "UX Research",
    readTime: "6 min",
  },
  {
    num: "02",
    title: "Design Systems That Scale",
    excerpt: "Building a living design language that grows with your product without becoming a bottleneck.",
    date: "2025",
    category: "Design Systems",
    readTime: "8 min",
  },
  {
    num: "03",
    title: "From Architecture to Digital",
    excerpt: "How spatial thinking and architectural principles translate into better digital product design.",
    date: "2024",
    category: "Career",
    readTime: "5 min",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-32 px-6 md:px-12 lg:px-20 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-end justify-between mb-16"
      >
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-3">05 — Insights</p>
          <h2 className="font-display font-light text-[clamp(36px,5vw,72px)] text-primary leading-none">
            Selected <span className="italic">Writings</span>
          </h2>
        </div>
      </motion.div>

      <div>
        {BLOG_POSTS.map((post, i) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group border-b border-border py-10 flex flex-col md:flex-row md:items-center gap-6 cursor-pointer relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-card"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              style={{ transformOrigin: "left" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />

            <div className="relative flex flex-col md:flex-row md:items-center w-full gap-4 md:gap-0">
              <span className="font-mono text-[9px] text-muted-foreground/40 md:w-12 shrink-0">{post.num}</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent md:w-36 shrink-0">{post.category}</span>

              <div className="flex-1 md:px-6">
                <h3 className="font-display text-xl md:text-2xl text-primary group-hover:text-accent transition-colors duration-300 mb-1">
                  {post.title}
                </h3>
                <p className="font-mono text-xs text-muted-foreground leading-relaxed max-w-lg hidden md:block">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center gap-6 shrink-0">
                <span className="font-mono text-[10px] text-muted-foreground">{post.readTime}</span>
                <span className="font-mono text-[10px] text-muted-foreground">{post.date}</span>
                <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-accent transition-colors duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transform" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}