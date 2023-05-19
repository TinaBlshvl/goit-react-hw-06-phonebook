import { createSlice } from '@reduxjs/toolkit';
import { state } from './state';

const filterSlice = createSlice({
  name: 'filter',
  state: state.filter,
  reducers: {
    filterContacts: (state, { payload }) => {
      return (state = payload);
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
