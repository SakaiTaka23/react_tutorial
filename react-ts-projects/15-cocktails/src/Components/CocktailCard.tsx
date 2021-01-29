import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { cocktail } from '../Types/cocktailType';

const CocktailCard: FC<cocktail> = ({ id, name, image, info, glass }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <div>{name}</div>
      <div>{glass}</div>
      <p>{info}</p>
      <Link to={`/cocktail/${id}`}>detail</Link>
    </div>
  );
};

export default CocktailCard;
