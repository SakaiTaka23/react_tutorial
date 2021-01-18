import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import './App.css';
import Alert from './Components/Alert';
import Clear from './Components/Clear';
import Form from './Components/Form';
import List from './Components/List';
import { GroceryProvider } from './GroceryContext';

function App() {
  return (
    <GroceryProvider>
      <Grid container justify='center' alignItems='center' alignContent='center'>
        <Grid item xs={6} className='glass'>
          <Alert />
          <Typography variant='h5'>Grocery Bud</Typography>
          <Form />
          <List />
          <Clear />
        </Grid>
      </Grid>
    </GroceryProvider>
  );
}

export default App;
