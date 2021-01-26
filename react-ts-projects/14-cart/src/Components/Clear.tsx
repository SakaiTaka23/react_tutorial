import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { CART_ACTIONS } from '../CartReducer';

const Clear = () => {
  const { CartDispatch } = useContext(CartContext);

  return <Button onClick={() => CartDispatch({ type: CART_ACTIONS.CLEAR })}>clear</Button>;
};

export default Clear;
