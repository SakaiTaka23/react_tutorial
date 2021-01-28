import React, { FC, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

type SingleCocktailProps = {};
type Props = SingleCocktailProps &
  RouteComponentProps<{
    id: string;
  }>;

type Detail = {
  name: string;
  category: string;
  alcoholic: string;
  glass: string;
  img: string;
};

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail: FC<Props> = (props) => {
  const [detail, setDetail] = useState<Detail>({ name: '', category: '', alcoholic: '', glass: '', img: '' });
  const id = props.match.params.id;

  const fetchDetails = async () => {
    const response = await (await fetch(url + id)).json();
    const { drinks } = response;
    if (drinks) {
      const newDetail: Detail = drinks.map((drink: any) => {
        const { strDrink, strCategory, strAlcoholic, strGlass, strDrinkThumb } = drink;
        return {
          name: strDrink,
          category: strCategory,
          alcoholic: strAlcoholic,
          glass: strGlass,
          img: strDrinkThumb,
        };
      });
      setDetail(newDetail);
    } else {
      console.log('id error');
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  console.log(detail);

  return <div>single cocktail detail:{detail.alcoholic}</div>;
};

export default SingleCocktail;
