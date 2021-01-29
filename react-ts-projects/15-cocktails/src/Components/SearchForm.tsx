import { Box, Paper, TextField, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { CocktailContext } from '../CocktailContext';
import { useStyles } from '../Theme';

const SearchForm = () => {
  const classes = useStyles();
  const { search, setSearch } = useContext(CocktailContext);
  console.log(search);

  return (
    <Box p={5} display='flex' alignContent='center' justifyContent='center'>
      <Paper className={`${classes.glass} form`}>
        <Typography variant='h5'>Search Your Favorite Cocktail</Typography>
        <form>
          <TextField
            autoFocus
            fullWidth
            type='text'
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </form>
      </Paper>
    </Box>
  );
};

export default SearchForm;
