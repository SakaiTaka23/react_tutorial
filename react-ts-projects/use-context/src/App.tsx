import React from 'react';
import './App.css';
import List from './Components/List';
import { PersonProvider } from './PersonContext';

function App() {
  return (
    <PersonProvider>
      <h3>Context API / useContext</h3>
      <List />
    </PersonProvider>
  );
}

export default App;
