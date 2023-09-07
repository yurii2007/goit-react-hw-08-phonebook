const { ContactForm } = require("components/ContactForm/ContactForm")
const { ContactList } = require("components/ContactList/ContactList")

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