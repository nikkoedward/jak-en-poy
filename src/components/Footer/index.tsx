"use client";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { selectShowResults, setIsRulesOpen } from "@redux/slices/configSlice";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

function Footer({ isBonus }: { isBonus?: boolean }) {
  const dispatch = useAppDispatch();
  const showResults = useAppSelector(selectShowResults);
  return (
    <div className="w-full flex items-center justify-center md:justify-end my-8">
      <div>
        {!showResults && (
          <Link href={!isBonus ? "/bonus" : "/"}>
            <motion.div
              className="flex items-center justify-center border-2 border-solid border-grey-outline py-2 px-8 rounded-md text-grey-main mb-4 w-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isBonus ? "ORIGINAL" : "BONUS"}
            </motion.div>
          </Link>
        )}

        <motion.button
          className="flex items-center justify-center border-2 border-solid border-grey-outline py-2 px-8 rounded-md text-grey-main w-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            dispatch(setIsRulesOpen(true));
          }}
        >
          RULES
        </motion.button>
      </div>
    </div>
  );
}

export default Footer;
