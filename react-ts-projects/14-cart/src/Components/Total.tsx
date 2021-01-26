import { Grid, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const Total = () => {
  const { cartItem } = useContext(CartContext);
  const sum = Math.round(cartItem.items.reduce((prev_sum, item) => prev_sum + item.price * item.amount, 0) * 100) / 100;

  return (
    <Grid container direction='row' justify='space-around' alignItems='center'>
      <Typography variant='h5' color='primary'>
        Total
      </Typography>
      <Typography variant='h5' color='primary'>
        $ {sum}
      </Typography>
    </Grid>
  );
};

export default Total;
