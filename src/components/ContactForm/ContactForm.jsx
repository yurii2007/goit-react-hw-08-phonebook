import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
  const [contact, setContact] = useState({ name: '', number: '' });
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const isExist = contacts.find(elem => elem.name.toLowerCase() === contact.name.toLowerCase());
    if (isExist) return alert(`${contact.name} is already in contacts`);
    dispatch(addContact(contact));
    setContact({ name: '', number: '' });
  };

  const handleOnChange = event => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          value={contact.name}
          onChange={handleOnChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          value={contact.number}
          onChange={handleOnChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};