"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { selectIsRulesOpen, setIsRulesOpen } from "@redux/slices/configSlice";
import Backdrop from "@components/Backdrop";
import Image from "next/image";

function Rules({ isBonus }: { isBonus?: boolean }) {
  const dispatch = useAppDispatch();
  const isRulesOpen = useAppSelector(selectIsRulesOpen);
  const interactRules = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  return (
    <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
      {isRulesOpen && (
        <Backdrop isOpen={isRulesOpen}>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="bg-grey-main rounded-2xl w-full max-w-[415px] mx-5"
            variants={interactRules}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className=" p-8">
              <div className="flex items-center justify-between">
                <p className="text-5xl text-dark font-bold">RULES</p>
                <button onClick={() => dispatch(setIsRulesOpen(false))}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    className="fill-[#3B4262] text-[#3B4262] opacity-25 hover:fill-dark hover:text-dark hover:opacity-100 hover:rotate-90 transition-all duration-150 ease-in"
                  >
                    <path
                      fill="current"
                      fill-rule="evenodd"
                      d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z"
                    />
                  </svg>
                </button>
              </div>
              <Image
                alt="Rules"
                src={`/images/${
                  isBonus ? "image-rules-bonus" : "image-rules"
                }.svg`}
                width={304}
                height={270}
                className="mx-auto mt-8"
              />
            </div>
          </motion.div>
        </Backdrop>
      )}
    </AnimatePresence>
  );
}

export default Rules;
