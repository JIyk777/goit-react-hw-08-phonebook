import React from 'react';

import { FilterInput } from './FilterStyle';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue } from 'redux/contacts/contactsSelector';
import { changeFilter } from 'redux/contacts/contactsSlice';

export const Filter = () => {
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const onChangeFilter = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <label>
      <FilterInput
        type="text"
        value={filterValue}
        onChange={onChangeFilter}
        placeholder="Please enter name"
      ></FilterInput>
    </label>
  );
};
