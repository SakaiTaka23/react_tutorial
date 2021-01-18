import React, { createContext, FC, useState } from 'react';
import { GroceryContextType, item } from './types';
import data from './mockData';

const GroceryContextDefaultValue: GroceryContextType = {
  list: [],
  addList: () => {},
  clearList: () => {},
  deleteList: () => {},
};

const GroceryContext = createContext<GroceryContextType>(GroceryContextDefaultValue);

const GroceryProvider: FC = ({ children }) => {
  const [list, setList] = useState<item[]>(data);

  const addList = (item: string) => {
    const newItem = { id: new Date().getTime().toString(), title: item };
    setList([...list, newItem]);
  };

  const clearList = () => {
    setList([]);
  };

  const deleteList = (id: string) => {
    const result = list.filter((item) => item.id !== id);
    setList(result);
  };

  return <GroceryContext.Provider value={{ list, addList, clearList, deleteList }}>{children}</GroceryContext.Provider>;
};

export { GroceryContext, GroceryProvider };
