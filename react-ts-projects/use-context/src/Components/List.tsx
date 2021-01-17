import React, { useContext } from 'react';
import { PersonContext } from '../PersonContext';
import SinglePerson from './SinglePerson';

const List = () => {
  const mainData = useContext(PersonContext);
  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

export default List;
