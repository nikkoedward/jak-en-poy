import { motion } from "framer-motion";
import React from "react";

type Props = {
  className: string;
  text: string;
};

function FloatingText({ className, text }: Props) {
  return (
    <motion.p
      className={className}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.3,
          ease: "easeOut",
          delay: 0.5,
        },
      }}
    >
      {text}
    </motion.p>
  );
}

export default FloatingText;
