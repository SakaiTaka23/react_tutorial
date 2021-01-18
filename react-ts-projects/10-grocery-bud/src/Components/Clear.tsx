import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { GroceryContext } from '../GroceryContext';

const Clear = () => {
  const { clearList } = useContext(GroceryContext);

  return (
    <Button variant='contained' color='primary' onClick={clearList}>
      clear
    </Button>
  );
};

export default Clear;
