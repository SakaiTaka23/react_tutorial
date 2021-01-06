import React, { useState } from 'react';
import './App.css';
import Review from './components/Review';
import data from './data';
import Typography from '@material-ui/core/Typography';

function App() {
  const [showingID, setShowingID] = useState(0);

  const changePerson = (action: 'plus' | 'minus') => {
    if (action === 'plus') {
      setShowingID(checkNum(showingID + 1));
    } else if (action === 'minus') {
      setShowingID(checkNum(showingID - 1));
    }
  };

  const checkNum = (id: number) => {
    if (id >= 4) {
      id = 0;
    } else if (id <= -1) {
      id = 3;
    }
    return id;
  };

  const randRange = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

  const showRandom = () => {
    setShowingID(randRange(0, 3));
  };

  return (
    <div className='App'>
      <Typography variant='h1'>Our Reviews</Typography>
      <Review key={data[showingID].id} {...data[showingID]} changePerson={changePerson} showRandom={showRandom} />
    </div>
  );
}

export default App;
