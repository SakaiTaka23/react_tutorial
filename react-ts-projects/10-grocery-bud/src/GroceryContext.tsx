import React, { createContext, FC, useEffect, useState } from 'react';
import { AlertValue, GroceryContextType, item } from './types';
import data from './mockData';

const GroceryContextDefaultValue: GroceryContextType = {
  alert: false,
  alertMessage: '',
  item: '',
  list: [],
  addList: () => {},
  clearList: () => {},
  deleteList: () => {},
  editItem: () => {},
  updateItem: () => {},
};

const GroceryContext = createContext<GroceryContextType>(GroceryContextDefaultValue);

const GroceryProvider: FC = ({ children }) => {
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [list, setList] = useState<item[]>(data);
  const [item, setItem] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  const addList = (item: string) => {
    const newItem = { id: new Date().getTime().toString(), title: item };
    setList([...list, newItem]);
    showAlert(AlertValue.CREATE);
  };

  const clearList = () => {
    setList([]);
    showAlert(AlertValue.CLEAR);
  };

  const deleteList = (id: string) => {
    const result = list.filter((item) => item.id !== id);
    setList(result);
    showAlert(AlertValue.DELETE);
  };

  const editItem = (id: string) => {
    const edit = list.find((item) => item.id === id);
    setItem(edit?.title ?? '');
  };

  const updateItem = (item: string) => {
    setItem(item);
  };

  const showAlert = (action: AlertValue) => {
    setAlertMessage(action);
    setAlert(true);
  };

  return (
    <GroceryContext.Provider
      value={{ alert, alertMessage, item, list, addList, clearList, deleteList, editItem, updateItem }}
    >
      {children}
    </GroceryContext.Provider>
  );
};

export { GroceryContext, GroceryProvider };
