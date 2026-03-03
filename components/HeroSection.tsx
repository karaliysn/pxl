"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Twitter, Youtube, Linkedin, Figma, ChevronDown } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Figma, href: "#", label: "Behance" },
];

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay blocked — silently continue
      });
    }
  }, []);

  const scrollToPortfolio = () => {
    document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  const isDark = theme === "dark";

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
      />

      {/* Dark overlay - adjusted for theme */}
      <div className={`absolute inset-0 ${isDark ? "bg-black/70" : "bg-white/70"}`} />

      {/* Gradient overlays for depth */}
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-gradient-to-b from-black/40 via-transparent to-black/80"
            : "bg-gradient-to-b from-white/40 via-transparent to-white/80"
        }`}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-foreground/40 text-xs tracking-[0.5em] uppercase mb-8"
        >
          Creative Portfolio
        </motion.p>

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-black tracking-[0.15em] text-foreground uppercase leading-none mb-6"
          style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
        >
          KARALIYSINN
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-foreground/50 tracking-[0.3em] uppercase text-sm mb-12"
        >
          Creative Vision • Digital Craft
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToPortfolio}
            className={`${
              isDark
                ? "bg-white text-black hover:bg-white/90"
                : "bg-black text-white hover:bg-black/90"
            } px-8 py-3.5 text-sm font-bold uppercase tracking-widest transition-all duration-300`}
          >
            View Portfolio
          </button>
          <button
            onClick={scrollToPortfolio}
            className="border border-foreground/40 text-foreground px-8 py-3.5 text-sm font-bold uppercase tracking-widest hover:border-foreground hover:bg-foreground/5 transition-all duration-300"
          >
            Watch Reel
          </button>
        </motion.div>
      </div>

      {/* Social Icons — Bottom Left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-10 left-8 z-10 flex flex-col gap-4"
      >
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="text-foreground/40 hover:text-foreground transition-colors duration-300"
          >
            <Icon size={18} />
          </a>
        ))}
      </motion.div>

      {/* Scroll Indicator — Bottom Center */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        onClick={scrollToPortfolio}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-foreground/40 hover:text-foreground transition-colors duration-300"
        aria-label="Scroll down"
      >
        <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
