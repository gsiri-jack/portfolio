import React from "react";
import { motion, useTransform } from "motion/react";

function RevealWord({ children, progress, range, className = "" }) {
  const opacity = useTransform(progress, range, [0.1, 1]);

  return (
    <span className="relative inline-block mr-3">
      {/* Ghost text */}
      <span
        className={`absolute left-0 top-0 opacity-10 ${className}`}
        aria-hidden
      >
        {children}
      </span>

      {/* Animated text */}
      <motion.span style={{ opacity }} className={`relative ${className}`}>
        {children}
      </motion.span>
    </span>
  );
}

export default RevealWord;
