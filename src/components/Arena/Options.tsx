"use client";
import React from "react";
import Image from "next/image";
import Choices from "@components/Choices";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import {
  selectHouseChoice,
  setUserChoice,
  setShowResults,
} from "@redux/slices/configSlice";
import { motion } from "framer-motion";

function Options({ isBonus }: { isBonus?: boolean }) {
  const dispatch = useAppDispatch();
  const houseChoice = useAppSelector(selectHouseChoice);

  const interactRules = {
    hidden: {
      scale: 0.75,
      opacity: 0.25,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0.25,
      scale: 0.75,
    },
  };

  return (
    <motion.div
      variants={interactRules}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="relative"
    >
      <Image
        alt="options"
        src={`/images/bg-${isBonus ? "pentagon" : "triangle"}.svg`}
        width={isBonus ? 329 : 313}
        height={isBonus ? 313 : 278}
        className={
          isBonus
            ? "w-[213.85px] h-[203.45px] sm:w-[329px] sm:h-[313px]"
            : "w-[203.45px] h-[180.70px] sm:w-[313px] sm:h-[278px]"
        }
      />
      {/* Paper */}
      <button
        className={`hover:scale-110 active:scale-90 transform absolute ${
          isBonus
            ? "top-[33.33%] right-0 translate-x-[50%] translate-y-[-50%]"
            : "left-0 top-0 translate-x-[-50%] translate-y-[-50%]"
        } cursor-pointer transition-transform duration-100 ease-in focus:outline-none focus-visible:shadow-outline`}
        onClick={() => {
          dispatch(setShowResults(true));
          dispatch(setUserChoice("paper"));
        }}
      >
        <Choices choice="paper" isBonus={isBonus} />
      </button>
      {houseChoice === "paper" && (
        <div
          className={`scale-90 transform absolute ${
            isBonus
              ? "top-[33.33%] right-0 translate-x-[50%] translate-y-[-50%]"
              : "left-0 top-0 translate-x-[-50%] translate-y-[-50%]"
          } cursor-pointer transition-transform duration-100 ease-in focus:outline-none focus-visible:shadow-outline -z-10 pointer-events-none`}
        >
          <Choices choice="paper" isHouseChoice isBonus={isBonus} />
        </div>
      )}

      {/* Scissors */}
      <button
        className={`hover:scale-110 active:scale-90 transform absolute top-0 ${
          isBonus
            ? "left-[50%] translate-x-[-50%] translate-y-[-50%]"
            : "right-0 translate-x-[50%] translate-y-[-50%]"
        } cursor-pointer transition-transform duration-100 ease-in focus:outline-none focus-visible:shadow-outline`}
        onClick={() => {
          dispatch(setShowResults(true));
          dispatch(setUserChoice("scissors"));
        }}
      >
        <Choices choice="scissors" isBonus={isBonus} />
      </button>
      {houseChoice === "scissors" && (
        <div
          className={`scale-90 transform absolute top-0 ${
            isBonus
              ? "left-[50%] translate-x-[-50%] translate-y-[-50%]"
              : "right-0 translate-x-[50%] translate-y-[-50%]"
          } cursor-pointer transition-transform duration-100 ease-in focus:outline-none focus-visible:shadow-outline -z-10 pointer-events-none`}
        >
          <Choices choice="scissors" isHouseChoice isBonus={isBonus} />
        </div>
      )}

      {/* Rock */}
      <button
        className={`hover:scale-110 active:scale-90 transform absolute ${
          isBonus
            ? "bottom-0 right-0 translate-x-0 translate-y-[33.33%]"
            : "left-[50%] bottom-0 translate-x-[-50%] translate-y-[50%]"
        } cursor-pointer transition-transform duration-100 ease-in focus:outline-none focus-visible:shadow-outline`}
        onClick={() => {
          dispatch(setShowResults(true));
          dispatch(setUserChoice("rock"));
        }}
      >
        <Choices choice="rock" isBonus={isBonus} />
      </button>
      {houseChoice === "rock" && (
        <div
          className={`scale-90 transform absolute ${
            isBonus
              ? "bottom-0 right-0 translate-x-0 translate-y-[33.33%]"
              : "left-[50%] bottom-0 translate-x-[-50%] translate-y-[50%]"
          } cursor-pointer transition-transform duration-100 ease-in focus:outline-none focus-visible:shadow-outline -z-10 pointer-events-none`}
        >
          <Choices choice="rock" isHouseChoice isBonus={isBonus} />
        </div>
      )}

      {isBonus && (
        <>
          {/* Spock */}
          <button
            className="hover:scale-110 active:scale-90 absolute left-0 top-[33.33%] transform translate-x-[-50%] translate-y-[-50%] cursor-pointer transition-transform duration-100 ease-in focus:outline-none focus-visible:shadow-outline"
            onClick={() => {
              dispatch(setShowResults(true));
              dispatch(setUserChoice("spock"));
            }}
          >
            <Choices choice="spock" isBonus={isBonus} />
          </button>
          {houseChoice === "spock" && (
            <div
              className={`scale-90 absolute left-0 top-[33.33%] transform translate-x-[-50%] translate-y-[-50%] cursor-pointer transition-transform duration-100 ease-in focus:outline-none focus-visible:shadow-outline -z-10 pointer-events-none`}
            >
              <Choices choice="spock" isHouseChoice isBonus={isBonus} />
            </div>
          )}

          {/* Lizard */}
          <button
            className="hover:scale-110 active:scale-90 absolute left-[16.665%] bottom-0 transform translate-x-[-50%] translate-y-[33.33%] cursor-pointer transition-transform duration-100 ease-in focus:outline-none focus-visible:shadow-outline"
            onClick={() => {
              dispatch(setShowResults(true));
              dispatch(setUserChoice("lizard"));
            }}
          >
            <Choices choice="lizard" isBonus={isBonus} />
          </button>
          {houseChoice === "lizard" && (
            <div
              className={`scale-90 absolute left-[16.665%] bottom-0 transform translate-x-[-50%] translate-y-[33.33%] cursor-pointer transition-transform duration-100 ease-in focus:outline-none focus-visible:shadow-outline -z-10 pointer-events-none`}
            >
              <Choices choice="lizard" isHouseChoice isBonus={isBonus} />
            </div>
          )}
        </>
      )}
    </motion.div>
  );
}

export default Options;
