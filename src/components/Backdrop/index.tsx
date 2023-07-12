"use client";
import { useAppDispatch } from "@redux/hooks";
import { setIsRulesOpen } from "@redux/slices/configSlice";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
  isOpen: boolean;
};

const Backdrop = (props: Props) => {
  const dispatch = useAppDispatch();
  return (
    <motion.div
      className={`absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#000000a1] z-10`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => dispatch(setIsRulesOpen(false))}
    >
      {props.children}
    </motion.div>
  );
};

export default Backdrop;
