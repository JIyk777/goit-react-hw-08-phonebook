import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchRemoveContact,
  fetchAllContacts,
  fetchAddContact,
} from 'redux/services/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await fetchAllContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const removeContactByID = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const contacts = await fetchRemoveContact(id);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const contacts = await fetchAddContact(contact);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
