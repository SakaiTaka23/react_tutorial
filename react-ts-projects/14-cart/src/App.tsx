import React, { useContext } from 'react';
import './App.css';
import Nav from './Components/Nav';
import ItemList from './Components/ItemList';
import Total from './Components/Total';
import Clear from './Components/Clear';

function App() {
  return (
    <>
      <Nav />
      YOUR BAG
      <ItemList />
      <Total />
      <Clear />
    </>
  );
}

export default App;
