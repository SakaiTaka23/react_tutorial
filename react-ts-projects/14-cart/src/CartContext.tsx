import React, { createContext, FC, useReducer } from 'react';
import cartItems from './data';
import reducer from './reducer';
import { CartContextType } from './type';

const url = 'https://course-api.com/react-useReducer-cart-project';
const contextDefaultValue: CartContextType = {};

const CartContext = createContext<CartContextType>(contextDefaultValue);
const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const CartProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <CartContext.Provider>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
