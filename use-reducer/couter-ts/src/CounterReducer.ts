import { CountAction, CountState } from './types/todoType';

enum ACTIONS {
  INCREMENT = 'increment',
  DECREMENT = 'decrement',
}

const reducer: React.Reducer<CountState, CountAction> = (state: CountState, action: CountAction) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return { count: state.count };
  }
};

export { ACTIONS, reducer };
