import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  ContactListItemStyled,
  ContactListItemBtn,
} from './ContactListItem.styled';
import { deleteContact } from 'redux/operations';

export function ContactListItem({ name, number, id }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <ContactListItemStyled>
      {name}: {number}
      <ContactListItemBtn onClick={handleDelete} type="button">
        Delete
      </ContactListItemBtn>
    </ContactListItemStyled>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
