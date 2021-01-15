import { Button, Grid } from '@material-ui/core';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import React, { useState } from 'react';

type questionProp = {
  title: string;
  info: string;
};

const Question: React.FC<questionProp> = (props) => {
  const { title, info } = props;
  const [show, setShow] = useState(false);

  return (
    <Grid container direction='row'>
      <Grid item>
        <h1>{title}</h1>
        <h2>{show ? info : ''}</h2>
      </Grid>
      <Grid item>
        <Button onClick={() => setShow(!show)}>
          <AddCircleRoundedIcon color='secondary' />
        </Button>
      </Grid>
    </Grid>
  );
};

export default Question;
