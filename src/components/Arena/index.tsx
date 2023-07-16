"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import {
  selectHouseChoice,
  selectShowResults,
  selectUserChoice,
  setHouseChoice,
  setUserChoice,
  setShowResults,
} from "@redux/slices/configSlice";
import ChoiceType from "../../types/choice";
import Options from "./Options";
import Battle from "./Battle";
import { motion } from "framer-motion";
import checkResult from "@utils/checkResult";

function Arena({ isBonus }: { isBonus?: boolean }) {
  const dispatch = useAppDispatch();
  const userChoice = useAppSelector(selectUserChoice);
  const houseChoice = useAppSelector(selectHouseChoice);
  const showResults = useAppSelector(selectShowResults);

  const generateHouseChoice = () => {
    const noOfChoices = isBonus ? 5 : 3;
    const computerChoice: ChoiceType =
      Math.floor(Math.random() * noOfChoices) + 1;
    const computerChoiceDecoded =
      computerChoice === ChoiceType.Rock
        ? "rock"
        : computerChoice === ChoiceType.Paper
        ? "paper"
        : computerChoice === ChoiceType.Scissors
        ? "scissors"
        : computerChoice === ChoiceType.Lizard
        ? "lizard"
        : "spock";
    return computerChoiceDecoded;
  };

  useEffect(() => {
    const housePick = generateHouseChoice();
    dispatch(setHouseChoice(housePick));
  }, []);

  return (
    <>
      <div className="relative h-full w-full md:w-[75vw] 2xl:w-[50vw] flex justify-center mx-auto">
        <div
          className={`h-full w-full absolute ${
            showResults ? "top-[33.33%]" : "top-[50%]"
          } md:top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]`}
        >
          <div className=" w-full h-full flex items-center justify-around md:justify-center">
            {showResults ? <Battle /> : <Options isBonus={isBonus} />}
          </div>

          {showResults && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                  delay: 0.75,
                },
              }}
              className="absolute bottom-0 md:bottom-[33.33%] left-[50%] transform translate-x-[-50%] flex flex-col justify-center mx-auto items-center"
            >
              <p className="text-white text-6xl font-bold leading-loose whitespace-nowrap">
                {checkResult(userChoice, houseChoice) === "win"
                  ? "YOU WIN"
                  : checkResult(userChoice, houseChoice) === "draw"
                  ? "DRAW"
                  : "YOU LOSE"}
              </p>
              <motion.button
                className="bg-grey-main py-4 rounded-md w-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  const housePick = generateHouseChoice();
                  dispatch(setShowResults(false));
                  setTimeout(() => {
                    dispatch(setUserChoice(""));
                    dispatch(setHouseChoice(housePick));
                  }, 250);
                }}
              >
                PLAY AGAIN
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}

export default Arena;
