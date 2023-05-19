import { createSlice, nanoid } from '@reduxjs/toolkit';
import { state } from './state';

const contactsSlice = createSlice({
  name: 'contacts',
  state: state.contacts,
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        return [...state, payload];
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact: (state, { payload }) => {
      return state.filter(({ id }) => id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
