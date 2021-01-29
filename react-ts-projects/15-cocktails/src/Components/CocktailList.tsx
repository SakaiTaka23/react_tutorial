import { Box } from '@material-ui/core';
import React, { useContext } from 'react';
import { CocktailContext } from '../CocktailContext';
import CocktailCard from './CocktailCard';

const CocktailList = () => {
  const { cocktails } = useContext(CocktailContext);

  return (
    <Box display='flex' flexWrap='wrap' justifyContent='center' alignItems='center' m={2}>
      {cocktails.map((cocktail) => {
        return (
          <Box m={2} key={cocktail.id}>
            <CocktailCard {...cocktail} />
          </Box>
        );
      })}
    </Box>
  );
};

export default CocktailList;
