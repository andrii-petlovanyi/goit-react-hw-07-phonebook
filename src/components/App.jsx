import { useSelector } from 'react-redux';

import { Box } from './Box';
import { ContactForm } from './ContactsForm/ContactsForm';
import { FilterContacts } from './Filter/Filter';
import { ContactList } from './ContactsList/ContactsList';
import { theme } from './Theme';
import { getContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Box
      as="section"
      width={380}
      listStyle="none"
      mx="auto"
      mt="20px"
      p="20px"
      borderRadius="20px"
      backgroundColor={theme.colors.mainBackground}
      boxShadow={theme.shadows.custom}
    >
      <Box
        as="h1"
        display="flex"
        justifyContent="center"
        color={theme.colors.text}
        fontFamily={theme.fonts.title}
      >
        PhoneBook
      </Box>
      <ContactForm />
      <Box
        as="span"
        width={330}
        height={3}
        backgroundColor={theme.colors.text}
        display="flex"
        mx="auto"
        my="40"
      />
      <Box
        as="h2"
        my={40}
        display="flex"
        color={theme.colors.text}
        fontFamily={theme.fonts.title}
        justifyContent="center"
      >
        {contacts.length > 0 ? 'Contacts' : 'No contacts'}
      </Box>

      {contacts.length > 1 && <FilterContacts />}
      <ContactList />
    </Box>
  );
};
