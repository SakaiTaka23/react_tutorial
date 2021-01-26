import { Button, Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { CART_ACTIONS } from '../CartReducer';
import DeleteIcon from '@material-ui/icons/Delete';

const Clear = () => {
  const { CartDispatch } = useContext(CartContext);

  return (
    <Grid container alignItems='center' justify='center'>
      <Button
        variant='contained'
        color='secondary'
        startIcon={<DeleteIcon />}
        onClick={() => CartDispatch({ type: CART_ACTIONS.CLEAR })}
      >
        clear all
      </Button>
    </Grid>
  );
};

export default Clear;
