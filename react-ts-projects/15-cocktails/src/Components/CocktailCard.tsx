import React, { FC } from 'react';
import { cocktail } from '../Types/cocktailType';

const CocktailCard: FC<cocktail> = ({ id, name, image, info, glass }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <div>{name}</div>
      <div>{glass}</div>
      <p>{info}</p>
      <button>Detail {id}</button>
    </div>
  );
};

export default CocktailCard;
