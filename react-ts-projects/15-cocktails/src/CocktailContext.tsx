import { createContext, FC, useEffect, useState } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

type CocktailContextState = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  cocktails: any;
};

const CocktailContext = createContext({} as CocktailContextState);

const CocktailProvider: FC = ({ children }) => {
  const [search, setSearch] = useState('');
  const [cocktails, setCocktails] = useState({});

  console.log(cocktails);

  const fetchCocktails = async (search: string) => {
    const response = await fetch(url + search);
    const newCocktails = await response.json();
    setCocktails(newCocktails);
  };

  useEffect(() => {
    fetchCocktails(search);
  }, [search]);

  return <CocktailContext.Provider value={{ search, setSearch, cocktails }}>{children}</CocktailContext.Provider>;
};

export { CocktailContext, CocktailProvider };
