import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@redux/store";
import { ChoicesWord } from "../../types/choice";

interface configProps {
  isRulesOpen: boolean;
  score: number;
  userChoice: ChoicesWord["choice"];
  houseChoice: ChoicesWord["choice"];
  showResults: boolean;
}

const initialState: configProps = {
  isRulesOpen: false,
  score: 0,
  userChoice: "",
  houseChoice: "",
  showResults: false,
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setIsRulesOpen: (state, action: PayloadAction<boolean>) => {
      state.isRulesOpen = action.payload;
    },
    setScore: (state, action: PayloadAction<number>) => {
      state.score = action.payload;
    },
    setUserChoice: (state, action: PayloadAction<ChoicesWord["choice"]>) => {
      state.userChoice = action.payload;
    },
    setHouseChoice: (state, action: PayloadAction<ChoicesWord["choice"]>) => {
      state.houseChoice = action.payload;
    },
    setShowResults: (state, action: PayloadAction<boolean>) => {
      state.showResults = action.payload;
    },
  },
});

export const {
  setIsRulesOpen,
  setScore,
  setUserChoice,
  setHouseChoice,
  setShowResults,
} = configSlice.actions;
export const selectIsRulesOpen = (state: RootState) => state.config.isRulesOpen;
export const selectScore = (state: RootState) => state.config.score;
export const selectUserChoice = (state: RootState) => state.config.userChoice;
export const selectHouseChoice = (state: RootState) => state.config.houseChoice;
export const selectShowResults = (state: RootState) => state.config.showResults;
export default configSlice.reducer;
