import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('hi');
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  const [isError, setIsError] = useState(false);

  return (
    <>
      <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1>
      <h1>{text || 'default value'}</h1>
      <h1>{text && 'text is not null'}</h1>

      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      <h1>{isError && 'Error'}</h1>
      {isError ? <p>there is an error...</p> : <div>there is no error</div> }
    </>
  );
};

export default ShortCircuit;
