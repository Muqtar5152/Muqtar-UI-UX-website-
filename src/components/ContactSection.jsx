import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle, Loader2 } from "lucide-react";

const SERVICES = [
  "UX/UI Design", "Product Design", "Design Systems",
  "Consulting", "Design Sprint", "Front-End Development", "Other",
];

const TESTIMONIALS = [
  {
    quote: "Muqtar transformed our product experience completely. His architectural thinking brought a level of spatial awareness to our UI that no other designer had achieved.",
    author: "Product Lead", company: "Tech Startup",
  },
  {
    quote: "Working with Muqtar felt effortless. He understood our vision immediately and delivered interfaces that exceeded our expectations in both beauty and usability.",
    author: "Founder", company: "SaaS Company",
  },
  {
    quote: "The design system Muqtar built for us has scaled across 5 products without a single inconsistency. His systematic approach is truly world-class.",
    author: "CTO", company: "Digital Agency",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", service: "", company: "", challenge: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.service || !form.challenge) return;
    setSending(true);
    setError(null);

    try {
      // Using Formspree for form submission
      const response = await fetch('https://formspree.io/f/xpznqgyq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          service: form.service,
          company: form.company,
          challenge: form.challenge,
          _subject: `New Project Inquiry from ${form.name}`,
          _replyto: form.email,
        }),
      });

      if (response.ok) {
        setSent(true);
        setForm({ name: "", email: "", service: "", company: "", challenge: "" });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Failed to send message. Please try again or contact me directly at muqtarpasha5152@gmail.com");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-20 border-t border-border">
      {/* Big CTA headline */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="mb-24"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">07 — Contact</p>
        <h2 className="font-display font-light leading-[0.85] text-[clamp(48px,8vw,120px)] text-primary">
          Got a project<br />
          <span className="italic text-accent">in mind?</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-between"
        >
          <div>
            <div className="relative">
              <span className="font-display text-[160px] text-accent/8 absolute -top-20 -left-4 leading-none select-none">"</span>
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={testimonialIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="font-display text-xl md:text-2xl text-primary leading-relaxed mb-8 relative z-10"
                >
                  {TESTIMONIALS[testimonialIndex].quote}
                </motion.blockquote>
              </AnimatePresence>
              <div>
                <p className="font-mono text-sm text-primary">{TESTIMONIALS[testimonialIndex].author}</p>
                <p className="font-mono text-xs text-muted-foreground">{TESTIMONIALS[testimonialIndex].company}</p>
              </div>
            </div>

            <div className="flex gap-2 mt-8">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIndex(i)}
                  className={`h-px transition-all duration-300 min-h-[8px] ${i === testimonialIndex ? "bg-accent w-10" : "bg-border w-5 hover:bg-muted-foreground"}`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-border">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">Connect</p>
            <div className="flex flex-col gap-3">
              <a href="https://www.linkedin.com/in/mohammad-muqtar-pasha-9870a5187" target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-3 font-mono text-sm text-muted-foreground hover:text-accent transition-colors duration-300">
                <span>LinkedIn</span>
                <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
              <a href="mailto:muqtarpasha5152@gmail.com"
                className="group flex items-center gap-3 font-mono text-sm text-muted-foreground hover:text-accent transition-colors duration-300">
                <span>muqtarpasha5152@gmail.com</span>
                <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {sent ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-20">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }}>
                <CheckCircle size={48} className="text-accent mb-6" />
              </motion.div>
              <h3 className="font-display text-3xl text-primary mb-4">Message Sent</h3>
              <p className="font-mono text-sm text-muted-foreground max-w-sm mb-8">
                Thank you for reaching out. I'll get back to you within 24 hours.
              </p>
              <button onClick={() => setSent(false)} className="font-mono text-xs uppercase tracking-widest text-accent hover:underline">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { key: "name", label: "Name *", type: "text", placeholder: "John Doe", required: true },
                  { key: "email", label: "Email *", type: "email", placeholder: "john@company.com", required: true },
                ].map(({ key, label, type, placeholder, required }) => (
                  <div key={key}>
                    <label className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/60 mb-3 block">{label}</label>
                    <input
                      type={type}
                      required={required}
                      value={form[key]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      className="w-full bg-transparent border-b border-border py-3 font-mono text-sm text-primary placeholder:text-muted-foreground/30 focus:border-accent focus:outline-none transition-colors duration-300 min-h-[48px]"
                      placeholder={placeholder}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/60 mb-4 block">I need *</label>
                <div className="flex flex-wrap gap-2">
                  {SERVICES.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setForm({ ...form, service })}
                      className={`font-mono text-[11px] px-4 py-2.5 border transition-all duration-300 min-h-[44px] ${
                        form.service === service
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-border/50 text-muted-foreground hover:border-accent/40 hover:text-primary"
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/60 mb-3 block">Company</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 font-mono text-sm text-primary placeholder:text-muted-foreground/30 focus:border-accent focus:outline-none transition-colors duration-300 min-h-[48px]"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground/60 mb-3 block">Challenge *</label>
                <textarea
                  required
                  rows={4}
                  value={form.challenge}
                  onChange={(e) => setForm({ ...form, challenge: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 font-mono text-sm text-primary placeholder:text-muted-foreground/30 focus:border-accent focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Describe what you're trying to solve..."
                />
              </div>

              <button
                type="submit"
                disabled={sending || !form.name || !form.email || !form.service || !form.challenge}
                className="group relative font-mono text-xs uppercase tracking-widest px-10 py-5 bg-primary text-primary-foreground hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-500 flex items-center gap-3 min-h-[48px] overflow-hidden"
              >
                {sending ? (
                  <><Loader2 size={14} className="animate-spin" /> Sending...</>
                ) : (
                  <>
                    Send Inquiry
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </>
                )}
              </button>
              {error && (
                <p className="font-mono text-sm text-red-500 mt-4">{error}</p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}