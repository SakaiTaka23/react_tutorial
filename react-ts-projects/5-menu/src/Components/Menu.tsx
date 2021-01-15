import { Box } from '@material-ui/core';
import React from 'react';

type MenuProps = {
  title: string;
  price: number;
  img: string;
  desc: string;
};

const Menu: React.FC<MenuProps> = ({ title, price, img, desc }) => {
  return (
    <Box flexDirection='row'>
      <img src={img} alt={title} />
      <div>
        <Box flexDirection='row'>
          {title}
          {price}
        </Box>
        {desc}
      </div>
    </Box>
  );
};

export default Menu;
