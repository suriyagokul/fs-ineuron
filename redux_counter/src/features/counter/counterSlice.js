import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      /*  Redux Toolkit allows us to write "mutating" logic in reducers. It
          doesn't actually mutate the state because it uses the Immer library,
         which detects changes to a "draft state" and produces a brand new
         immutable state based off those changes */
      state.value += 1; // we can mutate/change the state
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByValue: (state, action) => {
      state.value += action.payload;
      // payload is nothing but data.. at any potime we can access action.type and action.payload
    },
  },
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;

export default counterSlice.reducer;
