import { useSelector, useDispatch } from 'react-redux';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import {Filter} from './Filter/Filter';

import { addContact, removeContact } from 'redux/contacts/contacts-actions';
import { setFilter } from 'redux/filter/filter-actions';

import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

// const initialContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export function App() {
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);
 
  const dispatch = useDispatch();

  const onAddContact = (payload) => {
    const action = addContact(payload);
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
        <ContactList contacts={contacts} removeContact={onRemoveContact}/>
      </>
    );
}
