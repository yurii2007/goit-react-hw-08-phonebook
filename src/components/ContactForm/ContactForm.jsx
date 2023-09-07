import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/selectors';
import { InputWrapper, FormWrapper, ButtonWrapper } from './ContactForm.styled';

export const ContactForm = () => {
  const [contact, setContact] = useState({ name: '', number: '' });
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const isExist = contacts.find(
      elem => elem.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isExist) return alert(`${contact.name} is already in contacts`);
    dispatch(addContact(contact));
    setContact({ name: '', number: '' });
  };

  const handleOnChange = event => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputWrapper>
        <input
          placeholder="Name"
          value={contact.name}
          onChange={handleOnChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <span>Name :</span>
      </InputWrapper>
      <InputWrapper>
        <input
          placeholder="Number"
          value={contact.number}
          onChange={handleOnChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <span>Number :</span>
      </InputWrapper>
      <ButtonWrapper type="submit">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
            ></path>
          </svg>
          Add Contact
        </span>
      </ButtonWrapper>
    </FormWrapper>
  );
};
