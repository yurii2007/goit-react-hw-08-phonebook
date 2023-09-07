import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, postContact, removeContact } from 'service/contactsAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await getContacts();
      return contacts;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
    const result = postContact(contact);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const result = removeContact(id);
      return result
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
