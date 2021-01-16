import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const PeopleStyles = makeStyles({
  img: {
    borderRadius: 50,
    width: 150,
    height: 150,
    objectFit: 'cover',
  },
});

type PeopleProp = {
  image: string;
  name: string;
  title: string;
  quote: string;
};

const People: React.FC<PeopleProp> = ({ image, name, title, quote }) => {
  const classes = PeopleStyles();

  return (
    <Box>
      <img src={image} alt={name} className={classes.img} />
      <Typography>{name}</Typography>
      <Typography>{title}</Typography>
      <Typography>{quote}</Typography>
    </Box>
  );
};

export default People;
