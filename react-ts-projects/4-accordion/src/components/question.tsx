import { Button } from '@material-ui/core';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import React from 'react';

type questionProp = {
  title: string;
  info: string;
};

const Question: React.FC<questionProp> = (props) => {
  const { title, info } = props;
  return (
    <div>
      <Button>
        <AddCircleRoundedIcon color='secondary' />
      </Button>
      <h1>{title}</h1>
      <h2>{info}</h2>
    </div>
  );
};

export default Question;
