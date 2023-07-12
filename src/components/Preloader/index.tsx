"use client";
import { useAppDispatch } from "@redux/hooks";
import { setScore } from "@redux/slices/configSlice";
import { useRef } from "react";

type Props = {
  score: number;
};

function Preloader({ score }: Props) {
  const dispatch = useAppDispatch();
  const isLoaded = useRef(false);
  if (!isLoaded.current) {
    score && dispatch(setScore(score));
    isLoaded.current = true;
  }
  return null;
}

export default Preloader;
