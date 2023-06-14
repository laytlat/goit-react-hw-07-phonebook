import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { ContactListStyled } from './ContactList.styled';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { ColorRing } from 'react-loader-spinner';

export function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.items.filter(
    contact =>
      contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.phone.includes(filter)
  );

  return (
    <ContactListStyled>
      {isLoading && !error && <ColorRing />}
      {filteredContacts.map(contact => {
        return (
          <ContactListItem
            key={contact.id}
            name={contact.name}
            id={contact.id}
            number={contact.phone}
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
