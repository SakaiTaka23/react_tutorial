import React, { useReducer } from 'react';
import './App.css';

enum ACTIONS {
  INCREMENT = 'increment',
  DECREMENT = 'decrement',
}

type CountState = {
  count: number;
};

type CountAction = { type: ACTIONS };

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

function App() {
  const [state, despatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    despatch({ type: ACTIONS.INCREMENT });
  };

  const decrement = () => {
    despatch({ type: ACTIONS.DECREMENT });
  };

  return (
    <div className='App'>
      <>
        <button onClick={() => decrement()}>-</button>
        <span>{state.count}</span>
        <button onClick={() => increment()}>+</button>
      </>
    </div>
  );
}

export default App;
