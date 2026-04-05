const TOOLS = [
  "Figma", "Framer", "Webflow", "Photoshop", "Hotjar", "Notion",
  "Spline", "Relume", "Fireflies AI", "Glide",
];

function ToolItem({ name }) {
  return (
    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground/50 whitespace-nowrap flex items-center gap-4">
      {name}
      <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
    </span>
  );
}

export default function ToolsMarquee() {
  const items = [...TOOLS, ...TOOLS];

  return (
    <section className="py-12 border-y border-border overflow-hidden">
      <div className="flex animate-marquee" style={{ width: "fit-content" }}>
        <div className="flex items-center gap-10 px-5">
          {items.map((tool, i) => (
            <ToolItem key={`a-${i}`} name={tool} />
          ))}
        </div>
        <div className="flex items-center gap-10 px-5">
          {items.map((tool, i) => (
            <ToolItem key={`b-${i}`} name={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}