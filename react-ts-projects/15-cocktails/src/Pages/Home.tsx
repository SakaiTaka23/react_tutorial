import React from 'react';
import CocktailCard from '../Components/CocktailCard';
import SearchForm from '../Components/SearchForm';

const Home = () => {
  return (
    <>
      <SearchForm />
      <CocktailCard />
    </>
  );
};

export default Home;
