import { ContactForm } from './add_new_contact/ContactForm';
import { ContactsList } from './create_all_contacts_list/ContactsList';
import { Filter } from './filter/Filter';

export const Phonebook = () => {
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
