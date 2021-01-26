import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const Nav = () => {
  const { cartItem } = useContext(CartContext);
  const count = cartItem.items.length;

  return (
    <nav>
      <div>Cart</div>
      <div>{count}</div>
    </nav>
  );
};

export default Nav;
