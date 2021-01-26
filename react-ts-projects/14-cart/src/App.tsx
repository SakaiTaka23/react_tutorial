import React, { useContext } from 'react';
import './App.css';
import Nav from './Components/Nav';
import ItemList from './Components/ItemList';
import Total from './Components/Total';
import Clear from './Components/Clear';
import { CartContext } from './CartContext';
import { Grid, Typography } from '@material-ui/core';

function App() {
  const { cartItem } = useContext(CartContext);
  const count = cartItem.items.length;

  if (count > 0) {
    return (
      <>
        <Nav />
        <Grid container alignItems='center' justify='center'>
          <Typography variant='h3' color='primary'>
            YOUR BAG
          </Typography>
        </Grid>
        <ItemList />
        <Total />
        <Clear />
      </>
    );
  } else {
    return (
      <>
        <Nav />
        <Typography variant='h3' color='primary'>
          YOUR BAG IS EMPTY
        </Typography>
      </>
    );
  }
}

export default App;
