import { ContactForm } from './phonebook/add_new_contact/ContactForm';
import { ContactsList } from './phonebook/create_all_contacts_list/ContactsList';
import { Filter } from './phonebook/filter/Filter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';

export const Phonebook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>
      <h2>Contacts</h2>
      <Filter></Filter>
      <ContactsList></ContactsList>
    </>
  );
};
