import { Button, ButtonGroup, CardActionArea, CardActions, CardContent, Typography } from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import Card from '@material-ui/core/Card';
import React from 'react';

type reviewProps = {
  id: number;
  name: string;
  job: string;
  image: string;
  text: string;
  changePerson: (id: number, action: 'plus' | 'minus') => void;
};

const Review: React.FC<reviewProps> = (props) => {
  const { id, name, job, image, text, changePerson } = props;
  return (
    <>
      <Card>
        <CardActionArea>
          <img src={image} alt={name} width='30%' height='117.34px' />
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
              <ArrowBackIos onClick={() => changePerson(id, 'minus')} />
            </Button>
            <Button>Suprive Me</Button>
            <Button>
              <ArrowForwardIos onClick={() => changePerson(id, 'plus')} />
            </Button>
          </ButtonGroup>
        </CardActions>
      </Card>
    </>
  );
};

export default Review;
