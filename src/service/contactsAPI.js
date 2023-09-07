// https://64f85f54824680fd217f78ba.mockapi.io/contacts/contacts
import axios from 'axios';

axios.defaults.baseURL = 'https://64f85f54824680fd217f78ba.mockapi.io/contacts';

export const getContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const postContact = async contact => {
  const response = await axios.post('/contacts', contact);
  return response.data;
};

export const removeContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};
