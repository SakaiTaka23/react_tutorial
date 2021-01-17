import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import './App.css';
import Alert from './Components/Alert';
import Clear from './Components/Clear';
import Form from './Components/Form';
import List from './Components/List';

function App() {
  return (
    <Grid container justify='center' alignItems='center'>
      <Grid item className='glass' xs={6}>
        <Alert />
        <Typography variant='h5'>Grocery Bud</Typography>
        <Form />
        <List />
        <Clear />
      </Grid>
    </Grid>
  );
}

export default App;
