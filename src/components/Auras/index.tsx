"use client";
import { motion } from "framer-motion";
import React from "react";

function index() {
  return (
    <>
      <motion.div
        className="absolute top-[50%] left-[50%] h-full w-full -z-50 rounded-full bg-aura"
        initial={{
          scale: 0.9,
          y: "-50%",
          x: "-50%",
        }}
        animate={{
          scale: 1.5,
          transition: {
            duration: 0.75,
            delay: 1.5,
            repeat: Infinity,
            repeatDelay: 2.25,
          },
        }}
      />
      <motion.div
        className="absolute top-[50%] left-[50%] h-full w-full -z-50 rounded-full bg-aura-darker"
        initial={{
          y: "-50%",
          x: "-50%",
          scale: 0.9,
        }}
        animate={{
          scale: 2.25,
          transition: {
            duration: 2.25,
            delay: 1.5,
            repeat: Infinity,
            repeatDelay: 0.75,
          },
        }}
      />
      <motion.div
        className="absolute top-[50%] left-[50%] h-full w-full -z-50 rounded-full bg-aura-darkest"
        initial={{
          scale: 0.9,
          y: "-50%",
          x: "-50%",
        }}
        animate={{
          scale: 3,
          transition: {
            duration: 3,
            delay: 1.5,
            repeat: Infinity,
          },
        }}
      />
    </>
  );
}

export default index;
