import { useSelector, useDispatch } from 'react-redux';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

import { addContact, removeContact } from 'redux/contacts/contacts-slice';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

import {Filter} from './Filter/Filter';

export function App() {
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const onAddContact = ({ name, number }) => {
    const commonName = contacts.find(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });
    if (commonName) {
      alert(`${name} is already in contacts!`);

    }
    const action = addContact({name, number});
    dispatch(action)
  }

  const onRemoveContact = (payload) => {
    dispatch(removeContact(payload));
  }

  const onSetFilter = ({target}) => {
    dispatch(setFilter(target.value));
  }

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={onAddContact}/>
        <h2>Contacts</h2>
        <Filter onChange={onSetFilter} value={filter} />
        <ContactList contacts={contacts} removeContact={onRemoveContact} />
          </>
    );
}
