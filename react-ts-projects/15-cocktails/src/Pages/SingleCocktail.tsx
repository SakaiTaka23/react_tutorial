import { FC, useEffect, useState } from 'react';
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

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await (await fetch(url + id)).json();
      const { drinks } = response;
      if (drinks) {
        const { strDrink, strCategory, strAlcoholic, strGlass, strDrinkThumb } = drinks[0];
        const newDetail = {
          name: strDrink,
          category: strCategory,
          alcoholic: strAlcoholic,
          glass: strGlass,
          img: strDrinkThumb,
        };
        setDetail(newDetail);
      } else {
        console.log('id error');
      }
    };
    fetchDetails();
  }, [id]);

  console.log(detail);

  return (
    <div>
      <img src={detail.img} alt={detail.name} />
      <div>{detail.name}</div>
      <div>{detail.category}</div>
      <div>{detail.alcoholic}</div>
      <div>{detail.glass}</div>
    </div>
  );
};

export default SingleCocktail;
