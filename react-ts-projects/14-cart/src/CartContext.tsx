import React, { createContext, FC, useEffect, useReducer, useState } from 'react';
import { CartAction, CartReducer, CartState, CART_ACTIONS } from './CartReducer';

const url = 'https://course-api.com/react-useReducer-cart-project';

type CartContextState = {
  cartItem: CartState;
  CartDispatch: React.Dispatch<CartAction>;
  isLoading: boolean;
};

const CartContext = createContext({} as CartContextState);

const CartProvider: FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [cartItem, CartDispatch] = useReducer(CartReducer, { items: [] });

  const fetchData = async () => {
    const response = await (await fetch(url)).json();
    CartDispatch({ type: CART_ACTIONS.SET, payload: { items: response } });
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <CartContext.Provider value={{ cartItem, CartDispatch, isLoading }}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
