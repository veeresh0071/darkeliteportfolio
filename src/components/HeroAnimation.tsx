import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

// A premium, self-contained 3D hero animation — no external services needed.
// Renders: glowing tech sphere + orbital rings + grid + floating particles + cursor parallax.
export function HeroAnimation() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 30, stiffness: 120 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 120 });

  const rotateY = useTransform(springX, [-1, 1], [-18, 18]);
  const rotateX = useTransform(springY, [-1, 1], [12, -12]);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) * 2 - 1);
      mouseY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
        className="relative w-[340px] h-[340px] md:w-[460px] md:h-[460px]"
      >
        {/* ── Core glowing sphere ── */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 38% 36%, rgba(255,80,60,0.18) 0%, rgba(220,38,38,0.12) 35%, rgba(80,0,0,0.35) 65%, transparent 80%)",
            boxShadow:
              "0 0 80px rgba(220,38,38,0.35), 0 0 160px rgba(220,38,38,0.15), inset 0 0 60px rgba(220,38,38,0.08)",
            border: "1px solid rgba(220,38,38,0.25)",
          }}
          animate={{ scale: [1, 1.03, 1], opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ── Inner bright core ── */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "38%",
            height: "38%",
            top: "31%",
            left: "31%",
            background:
              "radial-gradient(circle, rgba(255,120,100,0.55) 0%, rgba(220,38,38,0.25) 50%, transparent 80%)",
            filter: "blur(6px)",
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ── Grid lines on sphere ── */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 460 460"
          fill="none"
        >
          {/* Horizontal latitude lines */}
          {[90, 130, 170, 210, 250, 290, 330, 370].map((y, i) => (
            <ellipse
              key={`h${i}`}
              cx="230"
              cy={y}
              rx={Math.sqrt(Math.max(0, 200 ** 2 - (y - 230) ** 2))}
              ry="6"
              stroke="rgba(220,38,38,0.6)"
              strokeWidth="0.8"
            />
          ))}
          {/* Vertical longitude arcs */}
          {[0, 30, 60, 90, 120, 150].map((angle, i) => (
            <ellipse
              key={`v${i}`}
              cx="230"
              cy="230"
              rx={Math.abs(Math.cos((angle * Math.PI) / 180)) * 200}
              ry="200"
              stroke="rgba(220,38,38,0.6)"
              strokeWidth="0.8"
              transform={`rotate(${angle}, 230, 230)`}
            />
          ))}
          {/* Equator highlight */}
          <ellipse cx="230" cy="230" rx="200" ry="10" stroke="rgba(220,38,38,0.9)" strokeWidth="1.2" />
        </svg>

        {/* ── Orbital ring 1 (wide, tilted) ── */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="absolute inset-[-20px] rounded-full border"
            style={{
              borderColor: "rgba(220,38,38,0.35)",
              boxShadow: "0 0 18px rgba(220,38,38,0.25), inset 0 0 18px rgba(220,38,38,0.08)",
              transform: "rotateX(72deg)",
            }}
          />
        </motion.div>

        {/* ── Orbital ring 2 (opposite tilt) ── */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="absolute inset-[-40px] rounded-full border"
            style={{
              borderColor: "rgba(220,38,38,0.2)",
              boxShadow: "0 0 12px rgba(220,38,38,0.15)",
              transform: "rotateX(55deg) rotateY(30deg)",
            }}
          />
        </motion.div>

        {/* ── Orbital ring 3 (outer glow ring) ── */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="absolute inset-[-70px] rounded-full border"
            style={{
              borderColor: "rgba(220,38,38,0.1)",
              transform: "rotateX(20deg) rotateY(-40deg)",
            }}
          />
        </motion.div>

        {/* ── Orbiting dots on ring 1 ── */}
        {[0, 120, 240].map((offset, i) => (
          <motion.div
            key={`dot-ring1-${i}`}
            className="absolute inset-[-20px]"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: (offset / 360) * 12 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="absolute w-3 h-3 rounded-full bg-primary"
              style={{
                top: "50%",
                left: "-6px",
                transform: `translateY(-50%) rotateX(72deg)`,
                boxShadow: "0 0 12px rgba(220,38,38,0.9)",
              }}
            />
          </motion.div>
        ))}

        {/* ── Orbiting dots on ring 2 ── */}
        {[0, 180].map((offset, i) => (
          <motion.div
            key={`dot-ring2-${i}`}
            className="absolute inset-[-40px]"
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: (offset / 360) * 18 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="absolute w-2 h-2 rounded-full"
              style={{
                top: "-4px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(220,38,38,0.9)",
                boxShadow: "0 0 10px rgba(220,38,38,0.8)",
              }}
            />
          </motion.div>
        ))}

        {/* ── Scan line sweeping across sphere ── */}
        <motion.div
          className="absolute rounded-full overflow-hidden pointer-events-none"
          style={{ inset: "0" }}
          initial={false}
        >
          <motion.div
            className="absolute inset-x-0"
            style={{
              height: "2px",
              background: "linear-gradient(90deg, transparent, rgba(220,38,38,0.7) 50%, transparent)",
              filter: "blur(1px)",
            }}
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* ── Floating data nodes ── */}
        {[
          { angle: 45,  dist: 1.42, label: "UI/UX" },
          { angle: 135, dist: 1.42, label: "3D" },
          { angle: 225, dist: 1.42, label: "DEV" },
          { angle: 315, dist: 1.42, label: "VFX" },
        ].map(({ angle, dist, label }, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = 50 + Math.cos(rad) * 50 * dist;
          const y = 50 + Math.sin(rad) * 50 * dist;
          return (
            <motion.div
              key={label}
              className="absolute flex items-center gap-1.5"
              style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%,-50%)" }}
              animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(220,38,38,0.9)]" />
              <span className="font-mono text-[9px] uppercase tracking-wider text-primary/70">{label}</span>
            </motion.div>
          );
        })}

        {/* ── Glow halo behind sphere ── */}
        <div
          className="absolute inset-[-60px] rounded-full pointer-events-none -z-10"
          style={{
            background: "radial-gradient(circle, rgba(220,38,38,0.12) 0%, transparent 65%)",
            filter: "blur(20px)",
          }}
        />
      </motion.div>
    </div>
  );
}
