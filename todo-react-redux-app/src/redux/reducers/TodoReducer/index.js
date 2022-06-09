import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  values : []
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {

    createTask: (state, action) => {
      state.task = action.payload;
      state.loading = false;
    },

    editTask: (state, action) => {
      state.task = action.payload;
      state.loading = false;
    },

    deleteTask: (state) => {
      state.task = null;
    }
  }
});

export const {
  createTask,
  editTask,
  deleteTask
} = todoSlice.actions;

export default todoSlice.reducer;
