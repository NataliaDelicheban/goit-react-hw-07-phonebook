import React from 'react';
import PropTypes from 'prop-types'
import css from './ContactList.module.css';
import { ContactElement } from '../ContactElement/ContactElement';

export const ContactList = ({ contacts, removeContact }) => {
    return (
        <ul className={css.contactList}>
            {contacts.map(({ id, name, phone }) => {
                return (
                    <ContactElement
                        key={id}
                        name={name}
                        number={phone}
                        onClick={() => removeContact(id)}
                    />
                );
            })}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
            onClick: PropTypes.func,
        })
    ),
}
