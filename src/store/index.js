import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../Reducer/login";
import todoSlice from "../Reducer";

export const store = configureStore({
  reducer: {
    LOGIN: loginSlice,
    TODO: todoSlice,
  },
});
