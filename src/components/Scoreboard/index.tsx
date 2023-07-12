"use client";
import React from "react";
import Image from "next/image";
import { useAppSelector } from "@redux/hooks";
import { selectScore } from "@redux/slices/configSlice";

function Scoreboard({ isBonus }: { isBonus?: boolean }) {
  const score = useAppSelector(selectScore);

  return (
    <div className="flex flex-row justify-center">
      {/* Image */}
      <div className="flex flex-row justify-between items-center w-full md:w-[75vw] 2xl:w-[50vw] m-8 p-4 border-2 border-solid border-grey-outline rounded-xl">
        <Image
          alt="options"
          src={`/images/${isBonus ? "logo-bonus" : "logo"}.svg`}
          width={isBonus ? 115 : 96}
          height={isBonus ? 114 : 92}
        />
        {/* Score Text */}
        <div className="flex items-center justify-center bg-grey-main rounded-lg ">
          <div className="flex flex-col  py-2 px-8">
            <p className="text-score text-sm md:text-sm mb-1">SCORE</p>
            <p className="text-dark text-6xl flex-1 text-center leading-10">
              {score}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scoreboard;
