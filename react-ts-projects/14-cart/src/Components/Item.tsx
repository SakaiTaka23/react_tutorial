import React, { FC } from 'react';
import { Item } from '../CartReducer';

const SingleItem: FC<Item> = ({ id, title, price, img, amount }) => {
  return (
    <div>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{price}</h3>
      <h3>{amount}</h3>
    </div>
  );
};

export default SingleItem;
