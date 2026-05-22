import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export function HeroRobot() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 28, stiffness: 90 });
  const springY = useSpring(mouseY, { damping: 28, stiffness: 90 });

  // Smooth 3D tilt effects
  const rotateY = useTransform(springX, [-1, 1], [-15, 15]);
  const rotateX = useTransform(springY, [-1, 1], [10, -10]);
  const translateX = useTransform(springX, [-1, 1], [-20, 20]);
  const translateY = useTransform(springY, [-1, 1], [-15, 15]);

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
      className="w-full h-full flex items-center justify-center lg:items-end select-none pointer-events-none"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        style={{
          rotateY,
          rotateX,
          x: translateX,
          y: translateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full max-w-[320px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[560px] xl:max-w-[620px] h-[90%] flex items-center justify-center lg:items-end"
      >
        {/* Futuristic circular glow base below the robot */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-[30%] rounded-full blur-[40px] pointer-events-none opacity-40 z-0"
          style={{
            background: "radial-gradient(ellipse, rgba(220,38,38,0.6) 0%, transparent 70%)",
          }}
        />

        {/* Dynamic floating motion for the robot image */}
        <motion.div
          className="relative z-10 w-full h-full flex items-center justify-center lg:items-end"
          animate={{ y: [-12, 12, -12] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src="/hero-char.png"
            alt="Futuristic Robot"
            className="w-full h-auto object-contain max-h-[85vh]"
            style={{
              filter: "drop-shadow(0 0 60px rgba(220,38,38,0.6)) drop-shadow(0 0 120px rgba(220,38,38,0.2)) brightness(1.15) contrast(1.05)",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
