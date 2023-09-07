import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { selectContacts, selectIsLoading } from 'redux/selectors';
import { Loader } from './Loader/Loader';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && <Loader />}
      <h2>Contacts</h2>
      {contacts?.length === 0 ? (
        <p>You didn't have any contacts yet</p>
      ) : (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </div>
  );
};
