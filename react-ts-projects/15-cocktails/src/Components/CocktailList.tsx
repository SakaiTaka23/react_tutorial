import React, { useContext } from 'react';
import { CocktailContext } from '../CocktailContext';
import CocktailCard from './CocktailCard';

const CocktailList = () => {
  const { cocktails } = useContext(CocktailContext);

  return (
    <>
      {cocktails.map((cocktail) => {
        return <CocktailCard key={cocktail.id} {...cocktail} />;
      })}
    </>
  );
};

export default CocktailList;
