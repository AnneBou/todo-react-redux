import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../redux/reducers/TodoReducer';

export const store = configureStore({
  reducer: {
    todo: todoReducer
  }
});
