import { Button, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { Loading } from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState<Tour[]>([]);

  const removeTour = (id: string) => {
    console.log(tours);
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
      console.log(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <Typography variant='h1' component='h2' gutterBottom>
            No Tours Left
          </Typography>
          <Button variant='contained' color='primary' className='btn' onClick={fetchTours}>
            refresh
          </Button>
        </div>
      </main>
    );
  }

  return (
    <>
      <Tours tours={tours} removeTour={removeTour} />
    </>
  );
}

export default App;
