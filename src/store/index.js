/* eslint-disable prettier/prettier */
import {mainReducer} from './redusers/main';
import {configureStore, combineReducers} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  main: mainReducer,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
