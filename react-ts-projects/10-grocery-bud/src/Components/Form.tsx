import { Button, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { GroceryContext } from '../GroceryContext';

const Form = () => {
  const { addList } = useContext(GroceryContext);
  const [item, setItem] = useState('');

  const getItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (item === '') {
      console.log('item needed!');
      return;
    }
    addList(item);
    setItem('');
  };

  return (
    <form onSubmit={getItem}>
      <TextField id='item' name='item' placeholder='some item' value={item} onChange={(e) => setItem(e.target.value)} />
      <Button type='submit' variant='contained' color='primary'>
        Submit
      </Button>
    </form>
  );
};

export default Form;
