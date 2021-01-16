import React, { useEffect, useState } from 'react';
import randomColor from 'randomcolor';
import './App.css';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import Form from './Components/Form';
import SingleColor from './Components/SingleColor';

const useStyles = makeStyles({
  title: {
    margin: '10px',
  },
});

function App() {
  const classes = useStyles();
  const [color, setColor] = useState<string[]>([]);

  const generateColor = (color: string) => {
    const newColor = randomColor({
      count: 21,
      hue: color,
    });
    setColor(newColor);
  };

  useEffect(() => {
    generateColor('somecolor');
  }, []);

  return (
    <div className='App'>
      <Box display='flex' flexDirection='row' mt={5} mb={2}>
        <Box mx={10}>
          <Typography className={classes.title} variant='h5'>
            Color Generator
          </Typography>
        </Box>
        <Box mt='10px'>
          <Form generateColor={generateColor} />
        </Box>
      </Box>
      <Grid container wrap='wrap' alignItems='stretch'>
        {color.map((colorCode) => (
          <Grid item xs={4}>
            <SingleColor key={colorCode} colorCode={colorCode} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
