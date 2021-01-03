import React, { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [people, setPeople] = useState(data);
  console.log(people);

  return (
    <main>
      <section>
        <h3>birthdays today</h3>
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
