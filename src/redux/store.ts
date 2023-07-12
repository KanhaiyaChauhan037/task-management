import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "./taskSlice";

export const store = configureStore({
  reducer: {
    book: taskSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
