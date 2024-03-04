import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  filter: 'all',
  search: '',
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodoCompleted: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    },
    toggleTodoCurrent: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, current: !todo.current };
        } else {
          return { ...todo, current: false };
        }
      });
    },
  },
});

export const { addTodo, deleteTodo, toggleTodoCompleted, toggleTodoCurrent } = commonSlice.actions;
export default commonSlice.reducer;
