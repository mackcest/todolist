import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from './reducers/slice/FillterSlice';
import todoListSlice from './reducers/slice/TodoListSlice';

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});
export default store;
