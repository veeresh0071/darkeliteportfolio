import { motion } from "framer-motion";

export function Background3D() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Rotating 3D Circles */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96"
        style={{ perspective: "1000px" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="w-full h-full rounded-full border-2 border-primary/20"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: 360, rotateX: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <motion.div
        className="absolute top-1/4 right-20 w-64 h-64"
        style={{ perspective: "1000px" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="w-full h-full rounded-full border-2 border-primary/15"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: -360, rotateZ: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-80 h-80"
        style={{ perspective: "1000px" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="w-full h-full rounded-full border border-primary/10"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateX: 360, rotateZ: -360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-1/3 w-72 h-72"
        style={{ perspective: "1000px" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="w-full h-full rounded-full border-2 border-primary/20"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: 360, rotateZ: -360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Blinking Dots */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Larger Pulsing Dots */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`large-${i}`}
          className="absolute w-4 h-4 rounded-full bg-gradient-to-br from-primary to-primary-glow"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            filter: "blur(2px)",
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
