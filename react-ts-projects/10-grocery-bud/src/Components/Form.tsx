import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

const Form = () => {
  const [item, setItem] = useState('');

  const getItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(item);
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
