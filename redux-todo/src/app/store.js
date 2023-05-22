import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todo/createTodo";

export const store = configureStore({
  reducer: {
    data: todoSlice,
  },
});
