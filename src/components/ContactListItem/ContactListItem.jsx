import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { ListItem, ListItemText, BtnDel } from './ContactListItem.styled';

export const ContactListItem = ({ contact = {} }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  return (
    <ListItem id={id}>
      <ListItemText>
        <b>{name}</b> : {number}
      </ListItemText>
      <BtnDel
        type="button"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      ></BtnDel>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
