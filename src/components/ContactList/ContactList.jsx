import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { selectContacts, selectFilteredContacts } from 'redux/selectors';
import { ButtonWrapper,LiElem } from './ContactList.styled';

export const ContactList = () => {
  const shouldRender = useSelector(selectContacts);
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  if (shouldRender.length === 0) return <p>You didn't have any contacts yet</p>;

  return (
    <>
      <Filter />
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <LiElem key={id}>
              {name}: {number}
              <ButtonWrapper onClick={() => handleDeleteContact(id)} type="button">
                <span className="text">Delete</span>
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                  </svg>
                </span>
              </ButtonWrapper>
            </LiElem>
          );
        })}
      </ul>
    </>
  );
};
