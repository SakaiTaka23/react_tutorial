import React, { useContext } from 'react';
import { PersonContext } from '../PersonContext';

type SinglePersonProp = {
  id: number;
  name: string;
};

const SinglePerson: React.FC<SinglePersonProp> = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);

  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default SinglePerson;
