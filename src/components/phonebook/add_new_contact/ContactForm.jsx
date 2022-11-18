import React from 'react';

import { Box } from 'components/box/Box';
import { FormAddBtn, FormInput, FormLabelText } from './ContactFormStyle';
import { addContact } from 'redux/contacts/contactsOperations';

import { useSelector, useDispatch } from 'react-redux';

import { getContactsValue } from 'redux/contacts/contactsSelector';

export const ContactForm = () => {
  const contacts = useSelector(getContactsValue);
  const dispatch = useDispatch();

  const createNewContact = (Name, Number) => {
    const allName = contacts.map(contact => contact.name);

    allName.includes(Name)
      ? alert(`${Name} is already in contacts.`)
      : dispatch(
          addContact({
            name: Name,

            number: Number,
          })
        );
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    createNewContact(form.elements.name.value, form.elements.number.value);
    form.reset();
  };

  return (
    <Box
      as="form"
      display="flex"
      flexDirection="column"
      width="300px"
      ml="auto"
      mr="auto"
      onSubmit={handleSubmit}
    >
      <Box as="label" display="flex" flexDirection="column" p="5px 0">
        <FormLabelText>Name</FormLabelText>
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Please enter name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Box>
      <Box as="label" display="flex" flexDirection="column" p="5px 0">
        <FormLabelText>Phone</FormLabelText>
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          placeholder="Please enter phone"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Box>
      <FormAddBtn type="submit">Add Contact</FormAddBtn>
    </Box>
  );
};

// ContactForm.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onAddNewContact: PropTypes.func.isRequired,
// };
