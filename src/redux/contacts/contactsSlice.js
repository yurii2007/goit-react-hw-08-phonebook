import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      { id: '0', name: 'Learn HTML and CSS', number: '123456' },
      { id: '1', name: 'Get good at JavaScript', number: '123456' },
    ],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      const index = state.items.findIndex(contact => contact.id === action.payload.id);
      state.items.splice(index, 1);
      state.isLoading = false;
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;