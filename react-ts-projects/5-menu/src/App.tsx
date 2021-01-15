import { Box } from '@material-ui/core';
import React from 'react';
import './App.css';
import Menu from './Components/Menu';
import data from './data';

function App() {
  return (
    <div className='App'>
      <h1>Our Menu</h1>
      <Box flexWrap='wrap'>
        {data.map((item) => {
          return <Menu key={item.id} {...item} />;
        })}
      </Box>
    </div>
  );
}

export default App;
