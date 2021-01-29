import { Card, CardActionArea, CardActions, CardContent, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from '../Theme';
import { cocktail } from '../Types/cocktailType';

const CocktailCard: FC<cocktail> = ({ id, name, image, info, glass }) => {
  const classes = useStyles();

  return (
    <Card className={classes.glass}>
      <CardActionArea>
        <img src={image} alt={name} />
        <CardContent>
          <Typography variant='h5'>{name}</Typography>
          <Typography variant='subtitle1'>{glass}</Typography>
          <Typography variant='body1' paragraph>
            {info}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/cocktail/${id}`}>DETAILS</Link>
      </CardActions>
    </Card>
  );
};

export default CocktailCard;
