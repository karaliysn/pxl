"use client";

import { Mail, Instagram, Twitter, Youtube, Linkedin, Figma } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Figma, href: "#", label: "Behance" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="text-foreground/40 text-xs tracking-[0.5em] uppercase mb-6">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-8">
            Let&apos;s Create
            <br />
            <span className="text-foreground/50">Together</span>
          </h2>
          <p className="text-foreground/50 leading-relaxed mb-12 max-w-xl mx-auto">
            Have a project in mind? Whether it&apos;s a brand film, editorial series,
            or full creative campaign — let&apos;s make something extraordinary.
          </p>

          {/* Email */}
          <a
            href="mailto:hello@karaliysinn.com"
            className="inline-flex items-center gap-3 text-foreground hover:opacity-70 transition-colors duration-300 mb-12 group"
          >
            <Mail
              size={20}
              className="text-foreground/40 group-hover:text-foreground/60 transition-colors duration-300"
            />
            <span className="text-lg font-medium tracking-wide">
              hello@karaliysinn.com
            </span>
          </a>

          {/* Divider */}
          <div className="w-px h-12 bg-foreground/10 mx-auto mb-12" />

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-8">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-foreground/30 hover:text-foreground transition-colors duration-300"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
