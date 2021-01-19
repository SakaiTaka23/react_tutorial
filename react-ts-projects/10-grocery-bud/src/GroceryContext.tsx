import React, { createContext, FC, useEffect, useState } from 'react';
import { AlertValue, GroceryContextType, item } from './types';
import data from './mockData';

const GroceryContextDefaultValue: GroceryContextType = {
  alert: false,
  alertMessage: '',
  list: [],
  addList: () => {},
  clearList: () => {},
  deleteList: () => {},
  showAlert: () => {},
};

const GroceryContext = createContext<GroceryContextType>(GroceryContextDefaultValue);

const GroceryProvider: FC = ({ children }) => {
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [list, setList] = useState<item[]>(data);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

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

  const showAlert = (action: AlertValue) => {
    setAlert(true);
    setAlertMessage(action);
  };

  return (
    <GroceryContext.Provider value={{ alert, alertMessage, list, addList, clearList, deleteList, showAlert }}>
      {children}
    </GroceryContext.Provider>
  );
};

export { GroceryContext, GroceryProvider };
