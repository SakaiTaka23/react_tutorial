import { Box, Button, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';

type FromProp = {
  getCount: (count: number) => void;
};

const Form: React.FC<FromProp> = ({ getCount }) => {
  const [count, setCount] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getCount(count);
  };

  const checkCount = (count: number) => {
    if (count > 9) {
      return 9;
    }
    if (count < 0) {
      return 0;
    }
    return count;
  };

  return (
    <form className='lorem-form' onSubmit={handleSubmit}>
      <Box display='flex' justifyContent='center'>
        <Box>
          <Typography variant='h6'>Paragraphs:</Typography>
        </Box>
        <Box mx={3}>
          <TextField
            type='number'
            name='amount'
            id='amount'
            value={count}
            variant='filled'
            onChange={(e) => setCount(checkCount(parseInt(e.target.value)))}
            style={{ paddingTop: '5px' }}
          />
        </Box>
        <Box>
          <Button type='submit' color='primary' variant='contained'>
            generate
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default Form;
