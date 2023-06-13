import { FilterLabel, FilterInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export function Filter() {
  const dispatch = useDispatch();
  const handleSetFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput onChange={handleSetFilter} />
    </FilterLabel>
  );
}
