import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const Nav = () => {
  const { cartItem } = useContext(CartContext);
  const amount = cartItem.items.reduce((sum, item) => sum + item.amount, 0);

  return (
    <nav>
      <div>Cart</div>
      <div>{amount}</div>
    </nav>
  );
};

export default Nav;
