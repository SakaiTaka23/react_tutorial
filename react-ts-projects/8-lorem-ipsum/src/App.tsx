import { Typography } from '@material-ui/core';
import React from 'react';
import './App.css';
import Form from './Components/Form';
import Lorem from './Components/Lorem';

function App() {
  return (
    <div className='App'>
      <Typography>tired of boring lorem ipsum?</Typography>
      <Form />
      <Lorem />
    </div>
  );
}

export default App;
