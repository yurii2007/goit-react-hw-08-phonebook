import { InputWrapper } from 'components/ContactList/ContactList.styled';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <>
      <h3>Find contacts by name</h3>
      <InputWrapper type="text" name="filter" onChange={handleChange} />
    </>
  );
};