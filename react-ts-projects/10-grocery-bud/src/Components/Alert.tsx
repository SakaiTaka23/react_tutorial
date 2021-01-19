import React, { useContext } from 'react';
import { GroceryContext } from '../GroceryContext';

const Alert = () => {
  const { alert, alertMessage } = useContext(GroceryContext);

  return alert ? <div>alert!{alertMessage}</div> : <div>no alert</div>;
};

export default Alert;
