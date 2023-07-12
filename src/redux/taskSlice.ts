import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TaskState } from "../types";

type initialStateType = {
  bookList: TaskState[];
};
const bookList: TaskState[] =
  JSON.parse(localStorage.getItem("userData") as string) ?? [];

const initialState: initialStateType = {
  bookList,
};

export const taskSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addNewBook: (state, action: PayloadAction<TaskState>) => {
      state.bookList?.push(action.payload);
    },
    updateBook: (state, action: PayloadAction<TaskState>) => {
      const {
        payload: { title, id, description, status },
      } = action;

      state.bookList = state.bookList.map((book) =>
        book.id === id ? { ...book, description, title, status } : book
      );
      localStorage.setItem("userData", JSON.stringify(state.bookList));
    },
    deleteBook: (state, action: PayloadAction<{ id: string }>) => {
      const newArr = state.bookList.filter(
        (book) => book.id !== action.payload
      );
      localStorage.setItem("userData", JSON.stringify(newArr));
      state.bookList = newArr;
    },
  },
});

export const { addNewBook, updateBook, deleteBook } = taskSlice.actions;

export const selectBookList = (state: RootState) => state.book.bookList;
export default taskSlice.reducer;
