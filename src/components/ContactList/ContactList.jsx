import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
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

  if(contacts.length < 1) return <p>You don't have any contacts yet</p>

  return (
    <>
    <Filter />
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
    </>
  );
};