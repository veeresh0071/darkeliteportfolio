import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logoBanner from "./image1.png";

type NavLink = { hash: string; label: string };
const links: NavLink[] = [
  { hash: "home", label: "Home" },
  { hash: "clients", label: "Our Clients" },
  { hash: "about", label: "Projects" },
  { hash: "contact", label: "Contact" },
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">

          <div
            className={`relative flex flex-1 items-center rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${scrolled ? "glass-strong shadow-[0_8px_32px_rgba(0,0,0,0.4)]" : "bg-transparent"
            }`}
          >
          {/* Banner — left anchor inside the navbar pill */}
          <Link to="/" className="flex items-center group flex-shrink-0">
            <img
              src={logoBanner}
              alt="Dark Elite Creations"
              className="h-10 w-auto object-contain transition-all duration-300 group-hover:scale-102 drop-shadow-[0_0_12px_rgba(220,38,38,0.25)]"
              style={{ filter: "invert(1) hue-rotate(180deg)" }}
            />
          </Link>

          {/* Nav links — perfectly centered in the navbar */}
          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {links.map((l) => (
              <Link
                key={l.hash}
                to="/"
                hash={l.hash}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA — right side */}
          <div className="hidden lg:flex items-center gap-3 ml-auto flex-shrink-0">
            <Link
              to="/"
              hash="contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_var(--glow-red)] hover:shadow-[0_0_36px_var(--glow-red-strong)] transition-all hover:scale-[1.03]"
            >
              Start a Project
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-2 ml-auto">
            <button
              className="grid place-items-center h-10 w-10 rounded-lg glass"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
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
                <Link
                  key={l.hash}
                  to="/"
                  hash={l.hash}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm font-medium rounded-lg hover:bg-white/5"
                >
                  {l.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
