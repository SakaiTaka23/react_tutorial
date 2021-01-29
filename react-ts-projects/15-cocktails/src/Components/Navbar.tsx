import { AppBar, Box, Button, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from '../Theme';

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.glass} position='static'>
      <Box display='flex' flexDirection='row' p={1} mx={3}>
        <Box flexGrow={1}>
          <Typography variant='h4'>TheCocktailDB</Typography>
        </Box>
        <Box>
          <Button>
            <Link to='/'>Home</Link>
          </Button>
          <Link to='/about'>About</Link>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Navbar;
