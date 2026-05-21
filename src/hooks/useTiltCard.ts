import { useMotionValue, useTransform, useSpring, useMotionTemplate } from "framer-motion";
import React from "react";

export function useTiltCard(maxRotate = 10, springConfig = { damping: 25, stiffness: 150 }) {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [maxRotate, -maxRotate]);
  const rotateY = useTransform(x, [0, 1], [-maxRotate, maxRotate]);

  const rX = useSpring(rotateX, springConfig);
  const rY = useSpring(rotateY, springConfig);

  const shinePercentX = useSpring(useTransform(x, [0, 1], [0, 100]), springConfig);
  const shinePercentY = useSpring(useTransform(y, [0, 1], [0, 100]), springConfig);

  const shineBg = useMotionTemplate`radial-gradient(circle at ${shinePercentX}% ${shinePercentY}%, rgba(220,38,38,0.18) 0%, transparent 60%)`;

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: {
      rotateX: rX,
      rotateY: rY,
      transformStyle: "preserve-3d" as const,
    },
    shineBg,
  };
}
