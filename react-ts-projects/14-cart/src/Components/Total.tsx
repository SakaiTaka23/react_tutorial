import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const Total = () => {
  const { cartItem } = useContext(CartContext);
  const sum = Math.round(cartItem.items.reduce((prev_sum, item) => prev_sum + item.price * item.amount, 0) * 100) / 100;

  return <div>total : {sum}</div>;
};

export default Total;
