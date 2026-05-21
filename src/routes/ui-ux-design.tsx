import { createFileRoute, Link } from "@tanstack/react-router";
import { uiuxProjects } from "./index";
import { motion } from "framer-motion";
import { Background3D } from "@/components/Background3D";
import { ArrowLeft, Sparkles } from "lucide-react";
import { useTiltCard } from "@/hooks/useTiltCard";

export const Route = createFileRoute("/ui-ux-design")({
  head: () => ({
    meta: [
      { title: "UI/UX Design — Dark Elite Creations" },
      { name: "description", content: "Explore our premium vertical mobile UI/UX designs, wireframes, and design system showcases." },
    ],
  }),
  component: UiUxDesignPage,
});

function ShowcaseCard({ project, index }: { project: typeof uiuxProjects[number]; index: number }) {
  const { onMouseMove, onMouseLeave, style, shineBg } = useTiltCard(10);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      }
    }
  } as const;

  return (
    <motion.div
      variants={cardVariants}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group relative h-full cursor-default select-none animate-card"
    >
      <div className="glass rounded-2xl overflow-hidden neon-border-hover relative h-full" style={{ transformStyle: "preserve-3d" }}>
        {/* Spotlight overlay inside card */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
          style={{ background: shineBg }}
        />

        <div className="relative z-10 bg-white/5 overflow-hidden aspect-[9/16] p-4 flex items-center justify-center" style={{ transform: "translateZ(25px)", transformStyle: "preserve-3d" }}>
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-contain transition-all duration-500 group-hover:scale-[1.04]"
            loading="lazy"
            style={{ transform: "translateZ(10px)" }}
          />
          
          {/* Shadow overlay and details on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5" style={{ transform: "translateZ(15px)" }}>
            <span className="flex items-center gap-1.5 text-xs text-primary font-mono uppercase tracking-wider mb-1">
              <Sparkles className="h-3.5 w-3.5" /> Mobile Interface
            </span>
            <h4 className="text-white font-display text-lg font-semibold tracking-tight">
              {project.name}
            </h4>
            <p className="text-white/60 text-xs mt-1">
              High-fidelity mockup detailing micro-interactions, responsive typography, and customized dark aesthetics.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function UiUxDesignPage() {
  return (
    <>
      <Background3D />
      <div className="relative min-h-screen py-16 overflow-hidden">
        {/* Glow overlay with a subtle purple-red hue */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-30" 
          style={{ background: "radial-gradient(circle at 50% 50%, oklch(0.55 0.28 290 / 0.25), transparent 60%)" }} 
        />
        
        {/* Floating particles */}
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/30 pointer-events-none"
            style={{
              width: Math.random() * 5 + 2,
              height: Math.random() * 5 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              zIndex: 5,
            }}
            animate={{ y: [0, -40, 0], opacity: [0, 0.7, 0], scale: [0.5, 1.5, 0.5] }}
            transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 5, ease: "easeInOut" }}
          />
        ))}

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header/Back button */}
          <div className="mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-glow font-mono uppercase tracking-wider mb-6 group transition-colors"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block font-mono text-xs uppercase tracking-[0.25em] text-primary mb-3">
                ⏤ Portfolio
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
                UI/UX <span className="text-gradient-red">Design</span>
              </h1>
              <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">
                We design intuitive and high-converting user interfaces. Our process balances rigorous user research with elite visual design systems to construct captivating digital products.
              </p>
            </motion.div>
          </div>

          {/* UI/UX Showcase Grid */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.1,
                }
              }
            }}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            {uiuxProjects.map((project, index) => (
              <ShowcaseCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}

