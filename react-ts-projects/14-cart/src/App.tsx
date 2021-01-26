import React, { useContext } from 'react';
import './App.css';
import Nav from './Components/Nav';
import ItemList from './Components/ItemList';
import Total from './Components/Total';
import Clear from './Components/Clear';
import { CartContext } from './CartContext';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: '50rem',
    padding: '2.5rem 0',
    margin: '40px auto 0',
  },
  title: {
    fontWeight: 'bold',
  },
  bar: {
    background: '#617d98',
    borderWidth: '.25px',
    borderColor: 'transparent',
    marginTop: '15px',
    marginBottom: '10px',
  },
  clear: {
    marginTop: '50px',
  },
  alert: {
    margin: '50px',
  },
});

const App = () => {
  const classes = useStyles();
  const { cartItem } = useContext(CartContext);
  const count = cartItem.items.length;

  if (count > 0) {
    return (
      <>
        <Nav />
        <Grid className={classes.root}>
          <Grid container alignItems='center' justify='center'>
            <Typography className={classes.title} variant='h4' color='primary'>
              YOUR BAG
            </Typography>
          </Grid>
          <ItemList />
          <hr className={classes.bar} />
          <Total />
          <div className={classes.clear}>
            <Clear />
          </div>
        </Grid>
      </>
    );
  } else {
    return (
      <>
        <Nav />
        <Grid container alignItems='center' justify='center'>
          <Typography className={classes.alert} variant='h3' color='primary'>
            YOUR BAG IS EMPTY
          </Typography>
        </Grid>
      </>
    );
  }
};

export default App;
