import React, { useContext } from 'react';
import './App.css';
import Nav from './Components/Nav';
import ItemList from './Components/ItemList';
import Total from './Components/Total';
import Clear from './Components/Clear';
import { CartContext } from './CartContext';

function App() {
  const { cartItem } = useContext(CartContext);
  const count = cartItem.items.length;

  if (count > 0) {
    return (
      <>
        <Nav />
        YOUR BAG
        <ItemList />
        <Total />
        <Clear />
      </>
    );
  } else {
    return (
      <div>
        <Nav />
        YOUR BAG IS EMPTY
      </div>
    );
  }
}

export default App;
