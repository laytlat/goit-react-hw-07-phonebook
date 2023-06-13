import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { ContactListStyled } from './ContactList.styled';

export function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.number.includes(filter)
  );

  return (
    <ContactListStyled>
      {filteredContacts.map(contact => {
        return (
          <ContactListItem
            key={contact.id}
            name={contact.name}
            id={contact.id}
            number={contact.number}
          />
        );
      })}
    </ContactListStyled>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
