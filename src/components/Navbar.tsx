import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logoImage from "./image1.png";
import { ThemeToggle } from "./ThemeToggle";

type NavLink = { to: string; label: string };
const links: NavLink[] = [
  { to: "#home", label: "Home" },
  { to: "#about", label: "About" },
  { to: "#clients", label: "Clients" },
  { to: "#works", label: "Works" },
  { to: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-[0_8px_32px_rgba(0,0,0,0.4)]" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative grid place-items-center h-12 w-auto bg-white/10 rounded-lg px-3 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/15">
              <img 
                src={logoImage} 
                alt="Dark Elite Creations Logo" 
                className="h-10 w-auto object-contain brightness-125 contrast-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 ml-8">
            {links.map((l) => (
              <a
                key={l.to}
                href={l.to}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3 ml-auto">
            <ThemeToggle />
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_var(--glow-red)] hover:shadow-[0_0_36px_var(--glow-red-strong)] transition-all hover:scale-[1.03]"
            >
              Start a Project
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-2 ml-auto">
            <ThemeToggle />
            <button
              className="grid place-items-center h-10 w-10 rounded-lg glass"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-2 glass-strong rounded-2xl p-3 max-h-[80vh] overflow-y-auto"
            >
              {links.map((l) => (
                <a
                  key={l.to}
                  href={l.to}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm font-medium rounded-lg hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
