import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: '24',
    message: 'message',
  });

  // const [name, setName] = useState('peter');
  // const [age, setAge] = useState(24);
  // const [message, setmessage] = useState('message');

  const changeMessage = () => {
    setPerson({ ...person, name: 'es' });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessage}>
        change Message
      </button>
    </>
  );
};

export default UseStateObject;
