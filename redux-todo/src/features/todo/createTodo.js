import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const item = { id: nanoid(), text: action.payload };
      state.todo.push(item);
    },
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id != action.payload);
    },
    updateTodo: (state, action) => {
      let id = action.payload.id;
      let text = action.payload.text;
      console.log(action.payload.text);

      state.todo.forEach((todo) => (todo.id == id ? (todo.text = text) : ""));
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
