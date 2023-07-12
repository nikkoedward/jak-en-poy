"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  choice: string;
  isHouseChoice?: boolean;
  isBonus?: boolean;
};

const Choices = ({ choice, isHouseChoice, isBonus }: Props) => {
  return (
    <motion.div
      className={isHouseChoice ? `${choice}-house` : choice}
      layoutId={isHouseChoice ? `${choice}-house` : choice}
    >
      <div
        className={`bg-${choice} bg-item-${choice} rounded-full ${
          isBonus
            ? "w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36"
            : "h-24 w-24 sm:h-36 sm:w-36 md:h-40 md:w-40 lg:h-44 lg:w-44 xl:h-48 xl:w-48"
        } relative`}
      >
        <div className="overflow-hidden bg-white-shadow top-[50%] left-[50%] w-[75%] h-[75%] transform translate-x-[-50%] translate-y-[-50%] absolute rounded-full">
          <div className="bg-white w-full h-full transform translate-x-0 translate-y-[8px] relative rounded-full" />
        </div>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <Image
          alt="options"
          src={`/images/icon-${choice}.svg`}
          width={65}
          height={65}
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-8 w-8 sm:w-14 sm:h-14 md:w-[60px] md:h-[60px] xl:w-16 xl:h-16"
        />
      </div>

      <div
        className={`bg-item-${choice}-dark w-full h-full rounded-full transform translate-x-0 translate-y-[8px] absolute -z-50 top-0`}
      />
    </motion.div>
  );
};

export default Choices;
