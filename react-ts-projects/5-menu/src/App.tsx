import { Box } from '@material-ui/core';
import React, { useState } from 'react';
import './App.css';
import Categories from './Components/Categories';
import Menu from './Components/Menu';
import data from './data';

function App() {
  const [menu, setMenu] = useState(data);
  const allCategories = ['all', ...Array.from(new Set(data.map((item) => item.category)))];

  const filterCategories = (category: string) => {
    let newMenu = data.filter((item) => item.category === category);
    if (category === 'all') newMenu = data;
    setMenu(newMenu);
  };

  return (
    <div className='App'>
      <h1>Our Menu</h1>

      <Categories categories={allCategories} filterCategory={filterCategories} />

      <Box display='flex' flexWrap='wrap' justifyContent='center' p={1} m={1}>
        {menu.map((item) => {
          return <Menu key={item.id} {...item} />;
        })}
      </Box>
    </div>
  );
}

export default App;
