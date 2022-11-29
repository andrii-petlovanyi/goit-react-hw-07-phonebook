import { useDispatch } from 'react-redux';
import { Label, Input } from './Filter.styled';
import { Box } from '../Box';
import { setFilter } from 'redux/filterSlice';

export const FilterContacts = () => {
  const dispatch = useDispatch();
  const onChange = event => {
    const filtered = event.target.value;
    dispatch(setFilter(filtered));
  };
  return (
    <Box
      display="flex"
      pl="30px"
      flexDirection="column"
      justifyContent="center"
      p={0}
    >
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          onChange={onChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
    </Box>
  );
};
