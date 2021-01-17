import React, { useState } from 'react';
import { data } from './data';

type PersonContextType = {
  removePerson: (id: number) => void;
  people: {
    id: number;
    name: string;
  }[];
};

const PersonContextDefaultValues = {
  removePerson: () => {},
  people: data,
};

const PersonContext = React.createContext<PersonContextType>(PersonContextDefaultValues);

const PersonProvider: React.FC = ({ children }) => {
  const [people, setPeople] = useState(data);

  const removePerson = (id: number) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return <PersonContext.Provider value={{ removePerson, people }}>{children}</PersonContext.Provider>;
};

export { PersonProvider, PersonContext };
