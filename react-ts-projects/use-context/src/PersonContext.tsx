import React, { useState } from 'react';
import { data } from './data';

type PersonContextState = {
  removePerson: (id: number) => void;
  people: {
    id: number;
    name: string;
  }[];
};

const PersonContextDefaultValues: PersonContextState = {
  removePerson: () => {},
  people: data,
};

const PersonContext = React.createContext<PersonContextState>(PersonContextDefaultValues);

const PersonProvider: React.FC = ({ children }) => {
  const [people, setPeople] = useState(data);
  const removePerson = (id: number) => {
    console.log(id);
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return <PersonContext.Provider value={{ people, removePerson }}>{children}</PersonContext.Provider>;
};

export { PersonProvider, PersonContext };
