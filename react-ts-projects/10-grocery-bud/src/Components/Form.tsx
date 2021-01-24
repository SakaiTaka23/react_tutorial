import { Button, TextField } from '@material-ui/core';
import React, { useContext } from 'react';
import { GroceryContext } from '../GroceryContext';

const Form = () => {
  const { addList, item, updateItem } = useContext(GroceryContext);

  const getItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (item === '') {
      console.log('item needed!');
      return;
    }
    addList(item);
  };

  return (
    <form onSubmit={getItem}>
      <TextField
        id='item'
        name='item'
        placeholder='some item'
        value={item}
        onChange={(e) => updateItem(e.target.value)}
      />
      <Button type='submit' variant='contained' color='primary'>
        Submit
      </Button>
    </form>
  );
};

export default Form;
