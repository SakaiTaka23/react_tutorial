import { makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import Lorem from './Components/Lorem';

const useStyles = makeStyles({
  title: {
    textTransform: 'uppercase',
    marginTop: '40px',
    marginBottom: '20px',
  },
});

function App() {
  const classes = useStyles();
  const [count, setCount] = useState(0);

  const getCount = (count: number) => {
    setCount(count);
  };

  return (
    <div className='App'>
      <Typography className={classes.title} variant='h4'>
        tired of boring lorem ipsum?
      </Typography>
      <Form getCount={getCount} />
      <Lorem generate={count} />
    </div>
  );
}

export default App;
