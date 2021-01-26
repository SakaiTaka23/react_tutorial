import { Box, Grid, Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const Nav = () => {
  const { cartItem } = useContext(CartContext);
  const amount = cartItem.items.reduce((sum, item) => sum + item.amount, 0);

  return (
    <Grid container direction='row' justify='space-around' alignItems='center'>
      <Typography variant='h3' color='primary'>
        Cart
      </Typography>
      <Box display='flex' flexDirection='row'>
        <ShoppingCartIcon />
        <Typography variant='h3'>{amount}</Typography>
      </Box>
    </Grid>
  );
};

export default Nav;
