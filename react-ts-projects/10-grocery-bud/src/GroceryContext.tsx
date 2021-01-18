import React, { createContext, FC, useState } from 'react';
import { GroceryContextType, item } from './types';

const GroceryContextDefaultValue: GroceryContextType = {
  list: [],
  addList: () => {},
  clearList: () => {},
};

const GroceryContext = createContext<GroceryContextType>(GroceryContextDefaultValue);

const GroceryProvider: FC = ({ children }) => {
  const [list, setList] = useState<item[]>([{ id: '1', title: 'item' }]);

  const addList = (item: string) => {
    const newItem = { id: new Date().getTime().toString(), title: item };
    setList([...list, newItem]);
  };

  const clearList = () => {
    setList([]);
  };

  return <GroceryContext.Provider value={{ list, addList, clearList }}></GroceryContext.Provider>;
};

export { GroceryContext, GroceryProvider };
