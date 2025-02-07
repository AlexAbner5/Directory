"use client";

import { motion } from "framer-motion";
import styles from "./shiny-button.module.css";

const ShinyButton = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      initial={{ "--x": "100%", scale: 1 } as any}
      animate={{ "--x": "-100%" } as any}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className={`px-6 py-2 rounded-2xl relative ${styles.shinyButton} ${styles.radialGradient} `}
    >
      <span
        className={`text-neutral-100 tracking-wide  h-full w-full block relative ${styles.linearMask}`}
      >
        Start now
      </span>
      <span
        className={`block absolute inset-0 rounded-2xl p-px ${styles.linearOverlay}`}
      />
    </motion.button>
  );
};

export default ShinyButton;
