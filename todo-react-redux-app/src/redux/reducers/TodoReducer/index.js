import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  values : ['task1', 'task2', 'task3']
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {

    createTask: (state, action) => {
      state.values.push(action.payload);
    },

    editTask: (state, action) => {
      state.values.push(action.payload);
    },

    deleteTask: (state, action) => {
      state.values.push(action.payload);
    }
  }
});

export const {
  createTask,
  editTask,
  deleteTask
} = todoSlice.actions;

export default todoSlice.reducer;
