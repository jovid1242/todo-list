import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: {
    items: [],
    isLoad: false,
    isError: ""
  }
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state) => {
      state.todo.items += 1;
    },
    remove: (state) => {
      state.todo.items -= 1;
    }
  }
});

export const { add, remove } = todoSlice.actions;

export default todoSlice.reducer;
