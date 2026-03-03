"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    id: 1,
    title: "Neon Horizons",
    category: "Video Production",
    description:
      "A cinematic brand film exploring the intersection of technology and humanity — shot on location across three continents.",
    image: "/images/project-1.jpg",
  },
  {
    id: 2,
    title: "Silent Architecture",
    category: "Photography",
    description:
      "An editorial series documenting brutalist structures in golden hour light, challenging how we perceive urban spaces.",
    image: "/images/project-2.jpg",
  },
  {
    id: 3,
    title: "Momentum",
    category: "Brand Identity",
    description:
      "Full rebrand for a luxury sports collective — from visual identity to campaign direction and launch strategy.",
    image: "/images/project-3.jpg",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="work" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="mb-16 flex items-end justify-between">
          <div>
            <p className="text-foreground/40 text-xs tracking-[0.5em] uppercase mb-4">
              Selected Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Latest Projects
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 text-foreground/50 hover:text-foreground text-sm uppercase tracking-wider transition-colors duration-300"
          >
            View All <ArrowUpRight size={16} />
          </a>
        </ScrollReveal>

        {/* Project Cards */}
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
              className="group relative overflow-hidden cursor-pointer border border-foreground/5"
            >
              {/* Image container — 16:9 ratio */}
              <div className="relative w-full overflow-hidden" style={{ paddingBottom: "56.25%" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.style.background = "linear-gradient(135deg, rgba(128,128,128,0.1), rgba(128,128,128,0.2))";
                    }
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
                  <div className="bg-foreground text-background p-3">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="bg-foreground/[0.02] p-8">
                <span className="text-foreground/40 text-xs tracking-[0.3em] uppercase mb-3 block">
                  {project.category}
                </span>
                <h3 className="text-foreground font-bold text-2xl mb-3">{project.title}</h3>
                <p className="text-foreground/50 text-sm leading-relaxed max-w-2xl">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
