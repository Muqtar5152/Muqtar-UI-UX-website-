import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const FAQS = [
  { q: "What services do you offer?", a: "I specialize in UX/UI design, product design, design systems, consulting, design sprints, and front-end development. Each engagement is tailored to your specific needs and business goals." },
  { q: "What's your design process like?", a: "My process follows four phases: Discovery (research & strategy), Ideation (concepts & wireframes), Design (high-fidelity prototypes & systems), and Delivery (handoff & optimization). I keep you involved at every step." },
  { q: "How long does a typical project take?", a: "Project timelines vary based on scope. A focused UI redesign might take 2-4 weeks, while a full product design engagement typically spans 6-12 weeks. I'll provide a detailed timeline after our initial consultation." },
  { q: "What tools do you use?", a: "My primary toolkit includes Figma for design, Framer and Webflow for prototyping and development, Hotjar for analytics, and various research tools. I adapt my tools to match each project's requirements." },
  { q: "How do you handle revisions?", a: "I build revision cycles into every project phase. Typically, each deliverable includes 2-3 rounds of revisions. My iterative approach means we catch and resolve issues early." },
  { q: "Do you work with remote teams?", a: "Absolutely. Most of my collaborations are remote. I use async communication tools and structured check-ins to ensure seamless collaboration across time zones." },
];

function FAQItem({ faq, index, isOpen, toggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="border-b border-border"
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-7 text-left group min-h-[48px]"
      >
        <div className="flex items-baseline gap-4 flex-1 pr-8">
          <span className="font-mono text-[9px] text-accent/50 shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className={`font-display text-lg md:text-xl transition-colors duration-300 ${isOpen ? "text-accent" : "text-primary group-hover:text-accent"}`}>
            {faq.q}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-muted-foreground shrink-0"
        >
          <Plus size={16} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="font-mono text-sm text-muted-foreground leading-[1.8] pb-8 pl-10 max-w-2xl">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-32 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-4"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-3">06 — FAQ</p>
          <h2 className="font-display font-light text-[clamp(36px,4vw,60px)] text-primary leading-tight">
            Common<br /><span className="italic">Questions</span>
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed mt-8 max-w-xs">
            Everything you need to know before we start working together.
          </p>
        </motion.div>

        <div className="lg:col-span-8">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}