import { ContactsForm, Label, Input, Button } from './ContactsForm.styled';
import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from 'redux/contactsSlice';

export const ContactForm = () => {
  const [createContact] = useCreateContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const formName = event.target.elements.name.value;
    const formNumber = event.target.elements.number.value;
    if (
      contacts.find(cont => cont.name.toLowerCase() === formName.toLowerCase())
    ) {
      return alert(`${formName} is already in contacts`);
    }
    createContact({ formName, formNumber });
    form.reset();
  };

  return (
    <ContactsForm onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label htmlFor="number">
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="Submit">Add to Contacts</Button>
    </ContactsForm>
  );
};
