import React, { FC, useContext } from 'react';
import { CartContext } from '../CartContext';
import { CART_ACTIONS, Item } from '../CartReducer';

const SingleItem: FC<Item> = ({ id, title, price, img, amount }) => {
  const { CartDispatch } = useContext(CartContext);

  return (
    <div>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{price}</h3>
      <h3>{amount}</h3>
      <button
        onClick={
          amount === 1
            ? () => CartDispatch({ type: CART_ACTIONS.DELETE, payload: { id: id } })
            : () => CartDispatch({ type: CART_ACTIONS.SUB, payload: { id: id } })
        }
      >
        -
      </button>
      <button onClick={() => CartDispatch({ type: CART_ACTIONS.ADD, payload: { id: id } })}>+</button>
      <button onClick={() => CartDispatch({ type: CART_ACTIONS.DELETE, payload: { id: id } })}>remove</button>
    </div>
  );
};

export default SingleItem;
