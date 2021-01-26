import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#2680c0',
    padding: '5px',
  },
  text: {
    color: 'white',
  },
  icon: {
    fontSize: '2.3rem',
    marginRight: '10px',
  },
});

const Nav = () => {
  const classes = useStyles();
  const { cartItem } = useContext(CartContext);
  const amount = cartItem.items.reduce((sum, item) => sum + item.amount, 0);

  return (
    <Grid className={classes.root} container direction='row' justify='space-around' alignItems='center'>
      <Typography className={classes.text} variant='h3'>
        Cart
      </Typography>
      <Box display='flex' flexDirection='row'>
        <Typography className={classes.text} variant='h3'>
          <ShoppingCartIcon className={classes.icon} />
          {amount}
        </Typography>
      </Box>
    </Grid>
  );
};

export default Nav;
