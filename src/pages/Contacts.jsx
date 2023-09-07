import { ContactForm } from "components/ContactForm/ContactForm"
import { ContactList } from "components/ContactList/ContactList"

const ContactsPage = () => {
    return (
        <>
        <h1>Phonebook</h1>
        <ContactForm />
        <ContactList />
        </>
    )
}

export default ContactsPage