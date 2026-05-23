import * as React from "react";
import {
  type HTMLMotionProps,
  motion,
  type SpringOptions,
  type Transition,
  useMotionValue,
  useSpring,
} from "framer-motion";

import { cn } from "@/lib/utils";

type StarLayerProps = HTMLMotionProps<"div"> & {
  count: number;
  size: number;
  transition: Transition;
  starColor: string;
};

function generateStars(count: number, starColor: string) {
  const shadows: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 4000) - 2000;
    const y = Math.floor(Math.random() * 4000) - 2000;
    shadows.push(`${x}px ${y}px ${starColor}`);
  }
  return shadows.join(", ");
}

function StarLayer({
  count = 1000,
  size = 1,
  transition = { repeat: Infinity, duration: 50, ease: "linear" },
  starColor = "#fff",
  className,
  ...props
}: StarLayerProps) {
  const [boxShadow, setBoxShadow] = React.useState("");

  React.useEffect(() => {
    setBoxShadow(generateStars(count, starColor));
  }, [count, starColor]);

  return (
    <motion.div
      className={cn("absolute top-0 left-0 w-full h-full", className)}
      animate={{ y: [0, -2000] }}
      transition={transition}
      {...props}
    >
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: "50%",
          backgroundColor: starColor,
          boxShadow: boxShadow,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "2000px",
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: "50%",
          backgroundColor: starColor,
          boxShadow: boxShadow,
        }}
      />
    </motion.div>
  );
}

// Hyperspace light streaks travelling outward from center
type LightStreak = {
  id: number;
  angle: number;
  delay: number;
  duration: number;
  length: number;
  color: string;
};

function HyperspaceStreaks({ count = 60 }: { count?: number }) {
  const [streaks, setStreaks] = React.useState<LightStreak[]>([]);

  React.useEffect(() => {
    const palette = ["#ffffff", "#ff2d3f", "#ff5a6e", "#ffb3bb"];
    const arr: LightStreak[] = Array.from({ length: count }).map((_, i) => ({
      id: i,
      angle: Math.random() * 360,
      delay: Math.random() * 4,
      duration: 1.2 + Math.random() * 2.2,
      length: 120 + Math.random() * 260,
      color: palette[Math.floor(Math.random() * palette.length)],
    }));
    setStreaks(arr);
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden [perspective:600px]">
      <div className="absolute left-1/2 top-1/2 h-0 w-0">
        {streaks.map((s) => (
          <motion.span
            key={s.id}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: `${s.length}px`,
              height: "1.5px",
              background: `linear-gradient(to right, transparent, ${s.color}, transparent)`,
              transformOrigin: "0% 50%",
              rotate: `${s.angle}deg`,
              filter: "blur(0.4px)",
              boxShadow: `0 0 6px ${s.color}`,
            }}
            initial={{ scaleX: 0, x: 0, opacity: 0 }}
            animate={{
              scaleX: [0, 1, 1],
              x: [0, 400, 1200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: s.duration,
              delay: s.delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}

type StarsBackgroundProps = React.ComponentProps<"div"> & {
  factor?: number;
  speed?: number;
  springTransition?: SpringOptions;
  starColor?: string;
  hyperspace?: boolean;
};

export function StarsBackground({
  children,
  className,
  factor = 0.05,
  speed = 50,
  springTransition = { stiffness: 50, damping: 20 },
  starColor = "#fff",
  hyperspace = true,
  ...props
}: StarsBackgroundProps) {
  const offsetX = useMotionValue(1);
  const offsetY = useMotionValue(1);

  const springX = useSpring(offsetX, springTransition);
  const springY = useSpring(offsetY, springTransition);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const newOffsetX = -(e.clientX - centerX) * factor;
      const newOffsetY = -(e.clientY - centerY) * factor;
      offsetX.set(newOffsetX);
      offsetY.set(newOffsetY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [offsetX, offsetY, factor]);

  return (
    <div
      className={cn("relative size-full overflow-hidden", className)}
      {...props}
    >
      {/* Parallax star layers */}
      <motion.div style={{ x: springX, y: springY }} className="absolute inset-0 pointer-events-none">
        <StarLayer count={700} size={1} starColor={starColor} transition={{ repeat: Infinity, duration: speed, ease: "linear" }} />
        <StarLayer count={300} size={2} starColor={starColor} transition={{ repeat: Infinity, duration: speed * 2, ease: "linear" }} />
        <StarLayer count={150} size={3} starColor={starColor} transition={{ repeat: Infinity, duration: speed * 3, ease: "linear" }} />
      </motion.div>

      {/* Hyperspace streaks */}
      {hyperspace && <HyperspaceStreaks count={50} />}

      {/* Vignette overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.7)_100%)]" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
