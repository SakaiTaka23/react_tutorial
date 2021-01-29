import { Box, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../Theme';

const About = () => {
  const classes = useStyles();
  return (
    <Box mt={5} mx={3} pb={5}>
      <Paper className={`${classes.glass} items`}>
        <Box display='flex' alignContent='center' justifyContent='center' pb={3}>
          <Typography variant='h3'>About us</Typography>
        </Box>
        <Typography variant='body1'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim omnis molestiae ratione fugit sed quis amet
          sequi at porro odio nihil iusto impedit obcaecati voluptatibus possimus, voluptatum non placeat! Molestiae!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum aspernatur alias nulla sint eos
          veritatis. Maxime delectus iure velit pariatur consequuntur ullam eos eveniet voluptate dolores sed, animi ex.
        </Typography>
      </Paper>
    </Box>
  );
};

export default About;
