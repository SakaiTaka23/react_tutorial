import React, { useEffect, useState } from 'react';
import randomColor from 'randomcolor';
import './App.css';
import { Box, Typography } from '@material-ui/core';
import Form from './Components/Form';
import SingleColor from './Components/SingleColor';

function App() {
  const [color, setColor] = useState<string[]>([]);

  const generateColor = (color: string) => {
    const newColor = randomColor({
      count: 20,
      hue: color,
    });
    setColor(newColor);
  };

  useEffect(() => {
    generateColor('somecolor');
  }, []);

  return (
    <div className='App'>
      <Box display='flex' flexDirection='row'>
        <Box mx={5}>
          <Typography variant='h5'>Color Generator</Typography>
        </Box>
        <Box>
          <Form generateColor={generateColor} />
        </Box>
      </Box>
      <Box display='flex' flexWrap='wrap'>
        {color.map((colorCode) => (
          <SingleColor key={colorCode} colorCode={colorCode} />
        ))}
      </Box>
    </div>
  );
}

export default App;
