import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

type FormProp = {
  generateColor: (color: string) => void;
};

const Form: React.FC<FormProp> = ({ generateColor }) => {
  const [color, setColor] = useState('');

  const getColor = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    generateColor(color);
  };

  return (
    <>
      <form onSubmit={getColor}>
        <TextField
          id='color'
          name='color'
          placeholder='color name or code'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <Button type='submit' color='primary' variant='contained'>
          Submit
        </Button>
      </form>
    </>
  );
};

export default Form;
