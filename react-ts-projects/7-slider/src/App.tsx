import { Box, Grid, IconButton, Typography } from '@material-ui/core';
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
      <Grid container direction='row' justify='center' alignItems='baseline'>
        <Grid item xs={3} onClick={() => changePeople(showing, '-')}>
          <IconButton color='primary'>
            <NavigateBeforeIcon fontSize='large' />
          </IconButton>
        </Grid>
        <Grid item xs={6}>
          <People {...data[showing]} />
        </Grid>
        <Grid item xs={3} onClick={() => changePeople(showing, '+')}>
          <IconButton color='primary'>
            <NavigateNextIcon fontSize='large' />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
