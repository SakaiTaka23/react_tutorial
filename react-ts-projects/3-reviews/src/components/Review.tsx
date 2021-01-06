import { Button, ButtonGroup, CardActionArea, CardActions, CardContent, Typography } from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import Card from '@material-ui/core/Card';
import React from 'react';

type reviewProps = {
  name: string;
  job: string;
  image: string;
  text: string;
};

const Review: React.FC<reviewProps> = (props) => {
  const { name, job, image, text } = props;
  return (
    <>
      <h1>this is card component</h1>
      <Card>
        <CardActionArea>
          <img src={image} alt={name} width='30%' height='50%' />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {name}
            </Typography>
            <Typography gutterBottom variant='h5' component='h2'>
              {job}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions style={{ justifyContent: 'center' }}>
          <ButtonGroup>
            <Button>
              <ArrowBackIos />
            </Button>
            <Button>Suprive Me</Button>
            <Button>
              <ArrowForwardIos />
            </Button>
          </ButtonGroup>
        </CardActions>
      </Card>
    </>
  );
};

export default Review;
