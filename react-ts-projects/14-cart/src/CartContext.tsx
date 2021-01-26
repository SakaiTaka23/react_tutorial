import React, { createContext, FC, useEffect, useReducer } from 'react';
import { CartAction, CartReducer, CartState, CART_ACTIONS } from './CartReducer';

const url = 'https://course-api.com/react-useReducer-cart-project';

type CartContextState = {
  cartItem: CartState;
  CartDispatch: React.Dispatch<CartAction>;
};

const CartContext = createContext({} as CartContextState);

const CartProvider: FC = ({ children }) => {
  const [cartItem, CartDispatch] = useReducer(CartReducer, { items: [] });

  const fetchData = async () => {
    const response = await (await fetch(url)).json();
    CartDispatch({ type: CART_ACTIONS.SET, payload: { items: response } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <CartContext.Provider value={{ cartItem, CartDispatch }}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
