import React, { useContext } from 'react';
import { CocktailContext } from '../CocktailContext';

const SearchForm = () => {
  const { search, setSearch } = useContext(CocktailContext);
  console.log(search);

  return (
    <form>
      <input
        type='text'
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </form>
  );
};

export default SearchForm;
