import React from 'react';
import { Box } from 'components/box/Box';
import { ContactDelBtn } from './ContactsListStyle';
import { removeContactByID } from 'redux/operations';

import { useDispatch, useSelector } from 'react-redux';

import { getContactsValue, getFilterValue } from 'redux/contactsSelector';

export const ContactsList = () => {
  const filter = useSelector(getFilterValue);
  const contacts = useSelector(getContactsValue);
  const dispatch = useDispatch();

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    visibleContacts.length !== 0 && (
      <Box
        as="ul"
        display="flex"
        flexDirection="column"
        width="300px"
        ml="auto"
        mr="auto"
        p={0}
      >
        {visibleContacts.map(contact => (
          <Box
            as="li"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p="5px 10px"
            key={contact.id}
          >
            <span>{contact.name}</span>
            <span>{contact.phone}</span>
            <ContactDelBtn
              type="button"
              onClick={() => dispatch(removeContactByID(contact.id))}
            >
              Del
            </ContactDelBtn>
          </Box>
        ))}
      </Box>
    )
  );
};

// ContactsList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
