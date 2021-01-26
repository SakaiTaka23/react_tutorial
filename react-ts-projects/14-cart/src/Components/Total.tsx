import { Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const Total = () => {
  const { cartItem } = useContext(CartContext);
  const sum = Math.round(cartItem.items.reduce((prev_sum, item) => prev_sum + item.price * item.amount, 0) * 100) / 100;

  return (
    <Typography variant='h4' color='primary'>
      Total : {sum}
    </Typography>
  );
};

export default Total;
