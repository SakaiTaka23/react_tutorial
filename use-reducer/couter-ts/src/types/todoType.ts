import { ACTIONS } from '../CounterReducer';

type CountState = {
  count: number;
};

type CountAction = { type: ACTIONS };

export type { CountState, CountAction };
