import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './sliceContacts';
import { filterReducer } from './sliceFilter';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
