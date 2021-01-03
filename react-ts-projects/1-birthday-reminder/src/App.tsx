import React, { useState } from 'react';
import { data } from './data';
import './App.css';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);
  console.log(people);

  return (
    <main>
      <section>
        <h3>{people.length}birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
