"use client";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Work", href: "#work" },
  { label: "Clients", href: "#clients" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-foreground/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <button
            onClick={() => handleLinkClick("#home")}
            className="text-foreground font-bold text-lg tracking-[0.15em] uppercase hover:opacity-70 transition-colors duration-300"
          >
            KARALIYSINN
          </button>

          {/* Nav Links */}
          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-foreground/40 hover:text-foreground text-xs uppercase tracking-wider transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <div className="flex items-center gap-6 text-foreground/20 text-xs">
            <span>© {currentYear} KARALIYSINN</span>
            <span className="hover:text-foreground/40 cursor-pointer transition-colors duration-300">
              Privacy
            </span>
            <span className="hover:text-foreground/40 cursor-pointer transition-colors duration-300">
              Terms
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
