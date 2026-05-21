import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useMemo } from "react";

export function Background3D() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // High-fidelity spring configurations for smooth cursor inertia
  const springConfig = { damping: 50, stiffness: 200, mass: 1 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Center the spotlight initially
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Generate static random coords for blinking dots once to prevent layout shifting on state changes
  const dots = useMemo(() => {
    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1.5,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 4,
    }));
  }, []);

  const largeOrbs = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: `${10 + Math.random() * 80}%`,
      top: `${10 + Math.random() * 80}%`,
      size: Math.random() * 12 + 10,
      duration: 4 + Math.random() * 4,
      delay: Math.random() * 3,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-background select-none">
      
      {/* 1. Dynamic Cursor Glowing Spotlight */}
      <motion.div
        className="absolute w-[900px] h-[900px] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-40 mix-blend-screen pointer-events-none"
        style={{
          left: glowX,
          top: glowY,
          background: "radial-gradient(circle, rgba(220,38,38,0.18) 0%, rgba(147,51,234,0.06) 45%, transparent 75%)",
          filter: "blur(50px)",
        }}
      />

      {/* 2. Rotating 3D Circles with Enhanced Perspective Gradients */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 opacity-35"
        style={{ perspective: "1200px" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="w-full h-full rounded-full border border-primary/25 shadow-[0_0_20px_rgba(220,38,38,0.1)]"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: 360, rotateX: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <motion.div
        className="absolute top-1/4 right-20 w-64 h-64 opacity-25"
        style={{ perspective: "1000px" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="w-full h-full rounded-full border border-primary/20 shadow-[0_0_15px_rgba(220,38,38,0.05)]"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: -360, rotateZ: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-80 h-80 opacity-20"
        style={{ perspective: "1200px" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="w-full h-full rounded-full border border-primary/15"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateX: 360, rotateZ: -360 }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-1/3 w-72 h-72 opacity-30"
        style={{ perspective: "1000px" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="w-full h-full rounded-full border border-primary/25 shadow-[0_0_20px_rgba(220,38,38,0.1)]"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: 360, rotateZ: -360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* 3. Non-Hydration Shifting Blinking Dots */}
      {dots.map((dot) => (
        <motion.div
          key={`dot-${dot.id}`}
          className="absolute rounded-full bg-primary/45 shadow-[0_0_8px_var(--glow-red)]"
          style={{
            left: dot.left,
            top: dot.top,
            width: dot.size,
            height: dot.size,
          }}
          animate={{
            opacity: [0.15, 0.9, 0.15],
            scale: [0.85, 1.45, 0.85],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            delay: dot.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 4. Large Glowing Ambient Orbs */}
      {largeOrbs.map((orb) => (
        <motion.div
          key={`large-${orb.id}`}
          className="absolute rounded-full bg-gradient-to-br from-primary/15 to-primary-glow/5"
          style={{
            left: orb.left,
            top: orb.top,
            width: orb.size,
            height: orb.size,
            filter: "blur(6px)",
          }}
          animate={{
            opacity: [0.25, 0.75, 0.25],
            scale: [0.9, 1.8, 0.9],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 5. Immersive Animated Smog & Volumetric Haze Layers */}
      <div className="absolute inset-0 pointer-events-none z-0 mix-blend-color-dodge opacity-[0.25]">
        {/* Smog Cloud 1 - Drifting slowly */}
        <motion.div 
          className="absolute -top-[20%] -left-[20%] w-[140%] h-[140%] pointer-events-none"
          style={{
            background: "radial-gradient(circle at 40% 30%, rgba(220, 38, 38, 0.15), rgba(126, 34, 206, 0.08), transparent 60%)",
            filter: "blur(70px)",
          }}
          animate={{
            x: [-60, 60, -60],
            y: [-40, 40, -40],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Smog Cloud 2 - Drifting opposite direction */}
        <motion.div 
          className="absolute -bottom-[20%] -right-[20%] w-[140%] h-[140%] pointer-events-none"
          style={{
            background: "radial-gradient(circle at 60% 70%, rgba(220, 38, 38, 0.12), rgba(244, 63, 94, 0.05), transparent 65%)",
            filter: "blur(90px)",
          }}
          animate={{
            x: [50, -50, 50],
            y: [30, -30, 30],
            scale: [1.05, 0.95, 1.05],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Smog Cloud 3 - Soft Ambient Pulse */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.04), transparent 70%)",
            filter: "blur(50px)",
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
