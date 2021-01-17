import { Button } from '@material-ui/core';
import React from 'react';
import { FaBars } from 'react-icons/fa';

const Home = () => {
  return (
    <div>
      <Button>
        <FaBars />
      </Button>
      <Button>show modal</Button>
    </div>
  );
};

export default Home;
