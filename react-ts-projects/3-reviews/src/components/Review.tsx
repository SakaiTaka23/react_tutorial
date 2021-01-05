import {
  Button,
  ButtonGroup,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import Card from '@material-ui/core/Card';
import React from 'react';

const Review = () => {
  return (
    <>
      <h1>this is card component</h1>
      <Card>
        <CardActionArea>
          <CardMedia
            component='img'
            alt='name'
            width='200'
            height='400'
            image='https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg'
            title='name'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              Name
            </Typography>
            <Typography gutterBottom variant='h5' component='h2'>
              Role
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              info
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <ButtonGroup>
            <Button>
              <ArrowBackIos />
            </Button>
            <Button>
              <ArrowForwardIos />
            </Button>
          </ButtonGroup>
          <Button>Suprive Me</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Review;
