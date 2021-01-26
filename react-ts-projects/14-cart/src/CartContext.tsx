import React, { createContext, useEffect, useReducer } from 'react';
import { CartAction, CartReducer, CartState, CART_ACTIONS } from './CartReducer';

const url = 'https://course-api.com/react-useReducer-cart-project';

type CartContextState = {
  cartItem: CartState;
  CartReducer: React.Reducer<CartState, CartAction>;
};

const ContextDefaultValues = {
  cartItem: { items: [] },
  CartReducer: (state: CartState, action: CartAction) => {},
};

const CartContext = createContext<CartContextState>(ContextDefaultValues);

const CartProvider = () => {
  const [cartItem, dispatch] = useReducer(CartReducer, { items: [] });

  const fetchData = async () => {
    const response = await (await fetch(url)).json();
    dispatch({ type: CART_ACTIONS.SET, payload: { items: response } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>cart</div>;
};

export default CartProvider;
