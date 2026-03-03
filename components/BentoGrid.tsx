"use client";

import { motion } from "framer-motion";
import { Video, Camera, Palette, BarChart2, Film, Briefcase, ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const bentoItems = [
  {
    id: 1,
    icon: Video,
    title: "Video Production",
    description:
      "Cinematic storytelling that captivates. From concept to final cut, every frame is crafted with purpose.",
    className: "md:row-span-2",
  },
  {
    id: 2,
    icon: Camera,
    title: "Photography",
    description:
      "Capturing moments that transcend time. Editorial, commercial, and fine art photography.",
    className: "",
  },
  {
    id: 3,
    icon: Palette,
    title: "Creative Direction",
    description:
      "Translating vision into visual language. Art direction, mood boards, and creative strategy.",
    className: "",
  },
  {
    id: 4,
    icon: BarChart2,
    title: "Digital Strategy",
    description:
      "Data-driven creative decisions. Content strategy, campaign planning, and brand positioning.",
    className: "",
  },
  {
    id: 5,
    icon: Film,
    title: "Post-Production",
    description:
      "Color grading, VFX, and finishing that elevates content to the next level.",
    className: "",
  },
  {
    id: 6,
    icon: Briefcase,
    title: "Brand Consulting",
    description:
      "Building brands that resonate. Identity, positioning, and long-term creative partnership.",
    className: "md:col-span-2",
  },
];

export default function BentoGrid() {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="mb-16">
          <p className="text-foreground/40 text-xs tracking-[0.5em] uppercase mb-4">
            What I Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Creative Services
          </h2>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
          {bentoItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                className={`group relative p-8 border border-foreground/5 cursor-pointer overflow-hidden transition-all duration-500 ${item.className} bg-foreground/[0.02]`}
                style={{
                  minHeight: "200px",
                }}
              >
                {/* Hover background */}
                <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <Icon size={28} className="text-foreground/60 group-hover:text-foreground transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-foreground font-bold text-lg mb-3 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-foreground/50 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="absolute bottom-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
                  <ArrowUpRight size={20} className="text-foreground" />
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
