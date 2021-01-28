import React from 'react';
import CocktailList from '../Components/CocktailList';
import SearchForm from '../Components/SearchForm';

const Home = () => {
  return (
    <>
      <SearchForm />
      <CocktailList />
    </>
  );
};

export default Home;
