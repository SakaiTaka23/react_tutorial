import React, { useState } from 'react';

type FromProp = {
  getCount: (count: number) => void;
};

const Form: React.FC<FromProp> = ({ getCount }) => {
  const [count, setCount] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getCount(count);
  };

  const checkCount = (count: number) => {
    if (count > 9) {
      return 9;
    }
    if (count < 0) {
      return 0;
    }
    return count;
  };

  return (
    <form className='lorem-form' onSubmit={handleSubmit}>
      <label htmlFor='amount'>paragraphs:</label>
      <input
        type='number'
        name='amount'
        id='amount'
        min='0'
        max='9'
        value={count}
        onChange={(e) => setCount(checkCount(parseInt(e.target.value)))}
      />
      <button type='submit' className='btn'>
        generate
      </button>
    </form>
  );
};

export default Form;
