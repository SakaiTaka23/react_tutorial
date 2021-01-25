import React, { useReducer } from 'react';
import './App.css';
import { ACTIONS, reducer } from './CounterReducer';

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
