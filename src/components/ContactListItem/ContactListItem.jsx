import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import { ListItem, ListItemText, BtnDel } from './ContactListItem.styled';

export const ContactListItem = ({ contact = {} }) => {
  const { id, name, phone } = contact;
  const [deleteContact] = useDeleteContactMutation();
  return (
    <ListItem id={id}>
      <ListItemText>
        <b>{name}</b> : {phone}
      </ListItemText>
      <BtnDel
        type="button"
        onClick={() => {
          deleteContact(id);
        }}
      ></BtnDel>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
