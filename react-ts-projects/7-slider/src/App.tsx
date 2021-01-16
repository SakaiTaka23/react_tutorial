import { Box, IconButton, Typography } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import React, { useEffect, useState } from 'react';
import './App.css';
import People from './Components/People';
import data from './data';

function App() {
  const [showing, setShowing] = useState(0);

  const changePeople = (id: number, action: '+' | '-') => {
    if (action === '+') {
      setShowing(checkId(id + 1));
    } else {
      setShowing(checkId(id - 1));
    }
  };

  const checkId = (id: number) => {
    if (id < 0) {
      return 3;
    }
    if (id > 3) {
      return 0;
    }
    return id;
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setShowing(checkId(showing + 1));
    }, 9000);
    return () => clearInterval(slider);
  }, [showing]);

  return (
    <div className='App'>
      <Box mt={5} mb={3}>
        <Typography variant='h3'>Reviews</Typography>
      </Box>
      <Box display='flex' flexDirection='row' justifyContent='center'>
        <IconButton color='primary' onClick={() => changePeople(showing, '-')}>
          <NavigateBeforeIcon />
        </IconButton>
        <People {...data[showing]} />
        <IconButton color='primary' onClick={() => changePeople(showing, '+')}>
          <NavigateNextIcon />
        </IconButton>
      </Box>
    </div>
  );
}

export default App;
