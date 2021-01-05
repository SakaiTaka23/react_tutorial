import React, { useState } from 'react';
import './App.css';
import Review from './components/Review';
import data from './data';
import Typography from '@material-ui/core/Typography';

function App() {
  console.log(data);
  const [showingID, setShowingID] = useState(0);

  return (
    <div className='App'>
      <Typography variant='h1'>Our Reviews</Typography>
      <Review />
    </div>
  );
}

export default App;
