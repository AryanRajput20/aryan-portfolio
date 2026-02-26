"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export default function MagneticButton() {
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href="#projects"
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="mt-10 px-8 py-3 bg-cyan-500 rounded-full
      shadow-[0_0_40px_rgba(0,255,255,0.7)]
      cursor-pointer text-center hover:bg-cyan-400 transition inline-block"
    >
      View Projects
    </motion.a>
  );
}