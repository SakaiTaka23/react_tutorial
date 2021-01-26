import { Reducer } from 'react';

enum CART_ACTIONS {
  CLEAR = 'clear',
  SET = 'set',
}

type CartState = {
  items: Item[];
};

type Item = {
  id: number;
  title: string;
  price: number;
  img: string;
  amount: number;
};

type CartAction =
  | {
      type: CART_ACTIONS.CLEAR;
    }
  | {
      type: CART_ACTIONS.SET;
      payload: CartState;
    };

const CartReducer: Reducer<CartState, CartAction> = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.CLEAR:
      return { ...state, items: [] };
    case CART_ACTIONS.SET:
      return { ...state, items: action.payload.items };
    default:
      return state;
  }
};

export { CartReducer, CART_ACTIONS };
export type { CartState, Item, CartAction };
