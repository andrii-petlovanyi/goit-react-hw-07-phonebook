import { List } from './ConctactsList.styled';
import { useSelector } from 'react-redux';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { getContacts, getFilter } from 'redux/selectors';
import { useFetchContactsQuery } from 'redux/contactsSlice';

export const ContactList = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const filter = useSelector(getFilter);

  const filteredContacts = () => {
    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filtered = filteredContacts();

  return (
    <List>
      {filtered?.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
