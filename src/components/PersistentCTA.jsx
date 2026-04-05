import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare } from "lucide-react";

export default function PersistentCTA() {
  const [expanded, setExpanded] = useState(false);

  const scrollToContact = () => {
    setExpanded(false);
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop: vertical side bar */}
      <div className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <motion.div
          className="relative"
          onMouseEnter={() => setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
        >
          <AnimatePresence>
            {expanded ? (
              <motion.div
                initial={{ width: 48 }}
                animate={{ width: 220 }}
                exit={{ width: 48 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="bg-accent overflow-hidden cursor-pointer"
                onClick={scrollToContact}
              >
                <div className="flex items-center gap-4 px-6 py-4 whitespace-nowrap">
                  <MessageSquare size={18} className="text-primary-foreground shrink-0" />
                  <span className="font-mono text-xs uppercase tracking-widest text-primary-foreground">
                    Start Project
                  </span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ width: 220 }}
                animate={{ width: 48 }}
                className="bg-accent/80 backdrop-blur cursor-pointer"
                onClick={scrollToContact}
              >
                <div className="flex items-center justify-center px-3 py-4">
                  <MessageSquare size={18} className="text-primary-foreground" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Mobile: floating button */}
      <button
        onClick={scrollToContact}
        className="lg:hidden fixed bottom-6 right-6 z-40 w-14 h-14 bg-accent flex items-center justify-center rounded-full shadow-lg shadow-accent/20 hover:bg-accent/80 transition-colors duration-300"
        aria-label="Get in touch"
      >
        <MessageSquare size={20} className="text-primary-foreground" />
      </button>
    </>
  );
}