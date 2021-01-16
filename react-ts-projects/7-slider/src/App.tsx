import { Box, Typography } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import React, { useState } from 'react';
import './App.css';
import People from './Components/People';
import data from './data';

function App() {
  const [showing, setShowing] = useState(0);

  return (
    <div className='App'>
      <Box mt={5} mb={3}>
        <Typography variant='h3'>Reviews</Typography>
      </Box>
      <Box display='flex' flexDirection='row' justifyContent='center'>
        <NavigateBeforeIcon />
        <People {...data[showing]} />
        <NavigateNextIcon />
      </Box>
    </div>
  );
}

export default App;
