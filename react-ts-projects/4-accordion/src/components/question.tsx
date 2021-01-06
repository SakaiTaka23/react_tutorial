import { Divider } from '@material-ui/core';
import React from 'react';

type questionProp = {
  id: number;
  title: string;
  info: string;
};

const Question: React.FC<questionProp> = (prop) => {
  return <div>this is question</div>;
};

export default Question;
