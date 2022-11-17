import { ContactForm } from './add_new_contact/ContactForm';
import { ContactsList } from './create_all_contacts_list/ContactsList';
import { Filter } from './filter/Filter';
import { Box } from 'components/box/Box';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="300px"
      ml="auto"
      mr="auto"
      mt={5}
      p={3}
      bg="#F0E68C"
      boxShadow="0px 0px 40px 0px #9AA0AD"
    >
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>
      <h2>Contacts</h2>
      <Filter></Filter>
      <ContactsList></ContactsList>
    </Box>
  );
};
