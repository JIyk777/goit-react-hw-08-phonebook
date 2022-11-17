import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contacts/contactsSlice';
import { authSlice } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    myContacts: contactsSlice.reducer,
    auth: authSlice.reducer,
  },
});
