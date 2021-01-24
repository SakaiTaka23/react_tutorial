import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import React from 'react';
import { links } from '../data';

const Navbar = () => {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        {links.map((link) => {
          return <BottomNavigationAction key={link.id} href={link.url} label={link.text} />;
        })}
      </BottomNavigation>
    </>
  );
};

export default Navbar;
