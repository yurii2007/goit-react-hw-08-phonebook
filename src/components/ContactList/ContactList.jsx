import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchContacts())
  },[dispatch])

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button onClick={() => handleDeleteContact(id)} type="button">
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};