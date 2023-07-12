"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import {
  selectHouseChoice,
  selectScore,
  selectUserChoice,
  setScore,
} from "@redux/slices/configSlice";
import { motion } from "framer-motion";
import checkResult from "@utils/checkResult";
import Auras from "@components/Auras";
import FloatingText from "./FloatingText";

function Battle() {
  const dispatch = useAppDispatch();
  const userChoice = useAppSelector(selectUserChoice);
  const houseChoice = useAppSelector(selectHouseChoice);
  const score = useAppSelector(selectScore);

  useEffect(() => {
    const result = checkResult(userChoice, houseChoice);
    const scoreToSet =
      result === "win"
        ? score + 1
        : result === "draw"
        ? score
        : score === 0
        ? 0
        : score - 1;
    dispatch(setScore(scoreToSet));
    document.cookie = `jajankenScore=${scoreToSet};path=/;`;
  }, []);

  return (
    <>
      {/* User's Pick */}
      <motion.div layoutId={userChoice} className="flex flex-col items-center">
        <FloatingText
          className="hidden md:block mb-10 text-center text-white font-bold text-2xl"
          text="YOU PICKED"
        />
        <div
          className={`${userChoice}-stack bg-${userChoice} bg-item-${userChoice} rounded-full h-32 w-32 sm:h-40 sm:w-40 md:h-44 md:w-44 lg:h-52 lg:w-52 xl:h-60 xl:w-60 relative`}
        >
          <div className="overflow-hidden bg-white-shadow top-[50%] left-[50%] w-[75%] h-[75%] transform translate-x-[-50%] translate-y-[-50%] absolute rounded-full">
            <div className="bg-white w-full h-full transform translate-x-0 translate-y-[8px] relative rounded-full" />
          </div>
          {/* eslint-disable-next-line react/jsx-no-undef */}
          <Image
            alt="options"
            src={`/images/icon-${userChoice}.svg`}
            width={65}
            height={65}
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-14 w-14 md:w-16 md:h-16 lg:h-20 lg:w-20 xl:w-24 xl:h-24"
          />

          {/* AURAS */}
          {(checkResult(userChoice, houseChoice) === "win" ||
            checkResult(userChoice, houseChoice) === "draw") && <Auras />}
        </div>
        <FloatingText
          className="block md:hidden mt-10 text-center text-white font-bold text-xl"
          text="YOU PICKED"
        />
      </motion.div>

      {/* Separator */}
      <motion.div
        initial={{
          width: "auto",
        }}
        animate={{
          width: "45%",
          transition: {
            duration: 1.25,
            ease: "easeOut",
            delay: 0.5,
          },
        }}
        className="hidden md:flex justify-center"
      >
        <span />
      </motion.div>

      {/* House's Pick */}
      <motion.div
        layoutId={`${houseChoice}-house`}
        className="flex flex-col items-center"
      >
        <FloatingText
          className="hidden md:block mb-10 text-center text-white font-bold text-2xl"
          text="THE HOUSE PICKED"
        />
        <div
          className={`${houseChoice}-stack bg-${houseChoice} bg-item-${houseChoice} rounded-full h-32 w-32 sm:h-40 sm:w-40 md:h-44 md:w-44 lg:h-52 lg:w-52 xl:h-60 xl:w-60 relative`}
        >
          <div className="overflow-hidden bg-white-shadow top-[50%] left-[50%] w-[75%] h-[75%] transform translate-x-[-50%] translate-y-[-50%] absolute rounded-full">
            <div className="bg-white w-full h-full transform translate-x-0 translate-y-[8px] relative rounded-full" />
          </div>
          {/* eslint-disable-next-line react/jsx-no-undef */}
          <Image
            alt="options"
            src={`/images/icon-${houseChoice}.svg`}
            width={65}
            height={65}
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-14 w-14 md:w-16 md:h-16 lg:h-20 lg:w-20 xl:w-24 xl:h-24"
          />

          {/* AURAS */}
          {(checkResult(userChoice, houseChoice) === "lose" ||
            checkResult(userChoice, houseChoice) === "draw") && <Auras />}
        </div>
        <FloatingText
          className="block md:hidden mt-10 text-center text-white font-bold text-xl"
          text="THE HOUSE PICKED"
        />
      </motion.div>
    </>
  );
}

export default Battle;
