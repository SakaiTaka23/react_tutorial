import { Reducer } from 'react';

enum CART_ACTIONS {
  ADD = 'add',
  CLEAR = 'clear',
  DELETE = 'delete',
  SET = 'set',
  SUB = 'sub',
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
      type: CART_ACTIONS.DELETE | CART_ACTIONS.ADD | CART_ACTIONS.SUB;
      payload: { id: number };
    }
  | {
      type: CART_ACTIONS.SET;
      payload: CartState;
    };

const CartReducer: Reducer<CartState, CartAction> = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD: {
      let newItems = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return { ...state, items: newItems };
    }
    case CART_ACTIONS.CLEAR: {
      return { ...state, items: [] };
    }
    case CART_ACTIONS.DELETE: {
      let newItems = state.items.filter((item) => item.id !== action.payload.id);
      return { ...state, items: newItems };
    }
    case CART_ACTIONS.SET: {
      return { ...state, items: action.payload.items };
    }
    case CART_ACTIONS.SUB: {
      let newItems = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
      return { ...state, items: newItems };
    }
    default:
      return state;
  }
};

export { CartReducer, CART_ACTIONS };
export type { CartState, Item, CartAction };
