import { createSlice } from '@reduxjs/toolkit';
const todoListSlice = createSlice({
  name: 'todoList',
  initialState: [
    { id: 0, name: 'yes', completed: false, priority: 'Medium' },
    { id: 1, name: 'aaaa', completed: false, priority: 'Medium' },
    { id: 2, name: 'yedadss', completed: false, priority: 'Medium' },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoState: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
  },
});
export default todoListSlice;
