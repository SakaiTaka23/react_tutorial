import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import Lorem from './Components/Lorem';

function App() {
  const [count, setCount] = useState(0);

  const getCount = (count: number) => {
    setCount(count);
  };

  return (
    <div className='App'>
      <Typography>tired of boring lorem ipsum?</Typography>
      <Form getCount={getCount} />
      <Lorem generate={count} />
    </div>
  );
}

export default App;
