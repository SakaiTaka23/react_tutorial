import { Box, Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  menu: {
    textTransform: 'capitalize',
  },
});

type MenuProps = {
  title: string;
  price: number;
  img: string;
  desc: string;
};

const Menu: React.FC<MenuProps> = ({ title, price, img, desc }) => {
  const classes = useStyles();
  return (
    <Box p={1} m={1}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={img} title={title} />
          <CardContent>
            <Typography className={classes.menu} gutterBottom variant='h5' component='h2'>
              {title} ${price}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default Menu;
