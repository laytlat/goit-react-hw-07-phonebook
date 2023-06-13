import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  whitelist: ['contacts'],
});

export const store = configureStore({
  reducer: rootReducer,
});
