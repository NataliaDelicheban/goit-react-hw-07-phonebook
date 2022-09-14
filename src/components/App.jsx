import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import {Filter} from './Filter/Filter';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export function App() {
  const [contacts, setContacts] = useState(() => { return JSON.parse(localStorage.getItem('contacts')) ?? initialContacts });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const onSubmit = ({name, number}) => {
    const isInContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    
    if (isInContact) {
      alert(`${name} is already in contacts!`);
      return;
    }

    const newContact = { id: nanoid(), name, number };
    setContacts([...contacts, newContact]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const changeFilter = event => {
    setFilter(event.target.value);
  };

  const getFilteredContacts = () => {
    const normaslizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normaslizedFilter),
    );
  };

  const filteredContacts = getFilteredContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={onSubmit} />
        <h2>Contacts</h2>
        <Filter onChange={changeFilter} value={filter} />
        <ContactList
          contacts={filteredContacts}
          onClick={deleteContact} />
          </>
    );
}
