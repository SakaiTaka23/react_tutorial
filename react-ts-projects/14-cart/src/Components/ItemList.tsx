import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import SingleItem from './Item';

const ItemList = () => {
  const { cartItem } = useContext(CartContext);
  const { items } = cartItem;
  console.log(cartItem);

  return (
    <div>
      {items.map((item) => {
        return <SingleItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default ItemList;
