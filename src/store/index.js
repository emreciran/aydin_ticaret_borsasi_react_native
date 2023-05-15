import { configureStore } from "@reduxjs/toolkit";
import settingsSlice from "./slices/settingsSlice";

const store = configureStore({
  reducer: {
    settingsSlice,
  },
});

export default store;
