/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';
import {readLocalStorArray, readLocalStorString, writeLocalStorArray, writeLocalStorString} from '../actions/localStor';

const initialState = {
  todos: readLocalStorArray('ToDoList') || [],
  applicationTheme: readLocalStorString('ThemeApp') || 'light',
};

const counterSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    addToDo: (state, {payload}) => {

        state.todos.unshift(payload);

        writeLocalStorArray('ToDoList', state.todos);
    },

    removeToDo: (state, {payload}) => {

        state.todos = state.todos.filter(todo => todo.id !== payload);
        writeLocalStorArray('ToDoList', state.todos);
    },

    chengeThemeApp: (state, {payload}) => {

        writeLocalStorString('ThemeApp', payload);

        state.applicationTheme = payload;

    }
  },
});

export const mainReducer = (state = initialState, action) => {
  return counterSlice.reducer(state, action);
};

export const {addToDo, removeToDo, chengeThemeApp} = counterSlice.actions;
