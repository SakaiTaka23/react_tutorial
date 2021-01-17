import React, { useState } from 'react';
import { data } from './data';

// const AppContext = React.createContext(null);

// const AppProvider = () => {
//     const [isOpen, setIsOpen] = useState(true);

//     return (
//         <AppContext.Provider
//             value={{ isOpen }
//         ></AppContext.Provider>
//     )
// }

// export default AppProvider;

const PersonContext = React.createContext(null);

// two components - Provider,Consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id: number) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>Context API / useContext</h3>
      <List />
    </PersonContext.Provider>
  );
};

export default ContextAPI;
