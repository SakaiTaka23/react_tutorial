import { Box } from '@material-ui/core';
import React from 'react';
import './App.css';
import Menu from './Components/Menu';
import data from './data';

function App() {
  return (
    <div className='App'>
      <h1>Our Menu</h1>
      <Box display='flex' flexWrap='wrap' justifyContent='center' p={1} m={1}>
        {data.map((item) => {
          return <Menu key={item.id} {...item} />;
        })}
      </Box>
    </div>
  );
}

export default App;
