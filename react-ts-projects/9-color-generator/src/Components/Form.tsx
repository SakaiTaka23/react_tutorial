import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

type FormProp = {
  generateColor: (color: string) => void;
};

const Form: React.FC<FormProp> = ({ generateColor }) => {
  const [color, setColor] = useState('#f47351');

  const getColor = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    generateColor(color);
  };

  return (
    <form onSubmit={getColor}>
      <TextField id='color' name='color' value={color} onChange={(e) => setColor(e.target.value)} variant='outlined' />
      <Button type='submit' color='primary' variant='contained'>
        Submit
      </Button>
    </form>
  );
};

export default Form;
