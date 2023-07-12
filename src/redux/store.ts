import {
  Action,
  configureStore,
  EnhancedStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import ConfigReducer from "@redux/slices/configSlice";

export const store = configureStore({
  reducer: {
    config: ConfigReducer,
  },
  // Useful if you want to add some custom middleware but still want the default middleware redux toolkit provides.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV === "development",
});

export const makeStore = (): EnhancedStore => store;

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
