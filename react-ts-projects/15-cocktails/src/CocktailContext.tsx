import { createContext, FC, useEffect, useState } from 'react';
import { cocktail } from './Types/cocktailType';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

type CocktailContextState = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  cocktails: cocktail[];
};

const CocktailContext = createContext({} as CocktailContextState);

const CocktailProvider: FC = ({ children }) => {
  const [search, setSearch] = useState('');
  const [cocktails, setCocktails] = useState<cocktail[]>([]);

  console.log(cocktails);

  const fetchCocktails = async (search: string) => {
    const response = await (await fetch(url + search)).json();
    const { drinks } = response;
    if (drinks) {
      const newCocktails: cocktail[] = drinks.map((drink: any) => {
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = drink;
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      setCocktails(newCocktails);
    } else {
      setCocktails([]);
    }
  };

  useEffect(() => {
    fetchCocktails(search);
  }, [search]);

  return <CocktailContext.Provider value={{ search, setSearch, cocktails }}>{children}</CocktailContext.Provider>;
};

export { CocktailContext, CocktailProvider };
