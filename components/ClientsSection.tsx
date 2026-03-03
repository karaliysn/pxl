"use client";

import ScrollReveal from "./ScrollReveal";

const clients = [
  "VORTEX STUDIOS",
  "LUMINARY CO.",
  "APEX CREATIVE",
  "NOVA BRAND",
  "OBSIDIAN FILMS",
  "STELLAR MEDIA",
  "PRISM GROUP",
  "CATALYST X",
];

const clients2 = [
  "ECHO COLLECTIVE",
  "DARK MATTER",
  "SPECTRUM INC.",
  "ZENITH WORKS",
  "RADIANT CO.",
  "PULSE CREATIVE",
  "ORBIT LABS",
  "FRACTAL STUDIO",
];

const testimonials = [
  {
    quote:
      "Working with KARALIYSINN transformed our brand presence completely. The cinematic quality is unmatched.",
    name: "Alex Rivera",
    company: "Vortex Studios",
  },
  {
    quote:
      "Every project is delivered with a level of craft that speaks for itself. An absolute creative force.",
    name: "Sophia Chen",
    company: "Luminary Co.",
  },
  {
    quote:
      "The vision, the execution, the attention to detail — everything was beyond our expectations.",
    name: "Marcus Wells",
    company: "Apex Creative",
  },
];

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden py-4">
      <div
        className={`flex gap-12 whitespace-nowrap ${
          reverse ? "animate-marquee-right" : "animate-marquee-left"
        }`}
        style={{ width: "max-content" }}
      >
        {doubled.map((client, i) => (
          <span
            key={i}
            className="text-foreground/20 font-bold text-sm tracking-[0.3em] uppercase hover:text-foreground/50 transition-colors duration-300 cursor-default"
          >
            {client}
            <span className="ml-12 text-foreground/10">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section id="clients" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="mb-16 text-center">
          <p className="text-foreground/40 text-xs tracking-[0.5em] uppercase mb-4">
            Trusted By
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Reference Clients
          </h2>
        </ScrollReveal>

        {/* Infinite Marquee */}
        <div className="mb-20 border-y border-foreground/5 py-4">
          <MarqueeRow items={clients} />
          <MarqueeRow items={clients2} reverse />
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <div className="bg-foreground/[0.02] border border-foreground/5 p-8 h-full">
                <p className="text-foreground/60 leading-relaxed mb-8 text-sm italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-foreground/10 pt-6">
                  <p className="text-foreground font-bold text-sm">{t.name}</p>
                  <p className="text-foreground/40 text-xs tracking-wider uppercase mt-1">
                    {t.company}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
