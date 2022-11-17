import { createSlice } from '@reduxjs/toolkit';

import {
  removeContactByID,
  fetchContacts,
  addContact,
} from './contactsOperations';

export const contactsSlice = createSlice({
  name: 'myContacts',
  initialState: {
    contacts: { items: [], isLoading: false, error: null },
    filter: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.pending]: (state, action) => {
      state.contacts.isLoading = true;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.contacts.error = action.payload;
      state.contacts.isLoading = false;
    },

    [removeContactByID.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const index = state.contacts.items.findIndex(
        item => item.id === action.payload.id
      );
      state.contacts.items.splice(index, 1);
    },
    [removeContactByID.pending]: (state, action) => {
      state.contacts.isLoading = true;
    },
    [removeContactByID.rejected]: (state, action) => {
      state.contacts.error = action.payload;
      state.contacts.isLoading = false;
    },

    [addContact.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;

      state.contacts.items.push(action.payload);
    },

    [addContact.pending]: (state, action) => {
      state.contacts.isLoading = true;
    },
    [addContact.rejected]: (state, action) => {
      state.contacts.error = action.payload;
      state.contacts.isLoading = false;
    },
  },
});

export const { changeFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
