import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const PeopleStyles = makeStyles({
  img: {
    borderRadius: 50,
    width: 150,
    height: 150,
    objectFit: 'cover',
  },
  name: {
    textTransform: 'uppercase',
    color: '#4dabf5',
  },
  title: {
    textTransform: 'capitalize',
  },
  quote: {
    color: 'gray',
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
      <Typography variant='h5' className={classes.name}>
        {name}
      </Typography>
      <Typography variant='h6' className={classes.title}>
        {title}
      </Typography>
      <Typography className={classes.quote}>{quote}</Typography>
    </Box>
  );
};

export default People;
