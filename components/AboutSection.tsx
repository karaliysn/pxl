"use client";

import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <ScrollReveal direction="right">
            <div className="relative">
              <div
                className="w-full aspect-[4/5] bg-foreground/[0.02] border border-foreground/5 overflow-hidden"
              >
                <img
                  src="/images/about.jpg"
                  alt="KARALIYSINN — Creative Portrait"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.opacity = "0";
                  }}
                />
                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-foreground/10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border border-foreground/5" />
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal direction="left" delay={0.2}>
            <div>
              <p className="text-foreground/40 text-xs tracking-[0.5em] uppercase mb-6">
                The Story
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-8">
                Brand Story
              </h2>
              <div className="space-y-6 text-foreground/60 leading-relaxed">
                <p>
                  KARALIYSINN is a creative studio at the intersection of film, photography,
                  and brand storytelling. Born from a deep obsession with visual craft, the
                  brand has evolved into a full-spectrum creative force serving visionary
                  clients worldwide.
                </p>
                <p>
                  Every project begins with a question: what feeling do we want to leave
                  behind? That singular focus on emotional resonance drives every creative
                  decision — from the first frame to the final delivery.
                </p>
                <p>
                  With roots in cinematic production and an eye for timeless aesthetics,
                  KARALIYSINN brings a rare combination of technical mastery and artistic
                  vision to every collaboration.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-foreground/10">
                {[
                  { value: "150+", label: "Projects" },
                  { value: "40+", label: "Clients" },
                  { value: "8+", label: "Years" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-foreground font-bold text-3xl">{stat.value}</p>
                    <p className="text-foreground/40 text-xs tracking-[0.2em] uppercase mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-3 mt-10 bg-foreground text-background px-8 py-3.5 text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
