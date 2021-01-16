import React from 'react';
import randomColor from 'randomcolor';
import './App.css';
import { Box, Typography } from '@material-ui/core';
import Form from './Components/Form';
import SingleColor from './Components/SingleColor';

function App() {
  const green = randomColor({
    count: 10,
    hue: 'green',
  });
  console.log(green);

  return (
    <div className='App'>
      <Box display='flex' flexDirection='row'>
        <Box mx={5}>
          <Typography variant='h5'>Color Generator</Typography>
        </Box>
        <Box>
          <Form />
        </Box>
      </Box>
      <Box display='flex' flexWrap='wrap'>
        <SingleColor />
      </Box>
    </div>
  );
}

export default App;
