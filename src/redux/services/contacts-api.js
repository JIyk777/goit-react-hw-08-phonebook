import axios from 'axios';

axios.defaults.baseURL = 'https://63739214348e947299106482.mockapi.io';

export async function fetchAllContacts() {
  const response = await axios.get('/contacts');
  return response.data;
}

export async function fetchRemoveContact(id) {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
}

export async function fetchAddContact(contact) {
  const response = await axios.post(`/contacts`, contact);
  return response.data;
}
