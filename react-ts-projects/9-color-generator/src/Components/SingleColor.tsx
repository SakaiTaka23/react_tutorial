import { Paper } from '@material-ui/core';
import React from 'react';

type SingleColorProp = {
  colorCode: string;
};

const SingleColor: React.FC<SingleColorProp> = ({ colorCode }) => {
  return (
    <Paper variant='outlined' square style={{ backgroundColor: colorCode }}>
      {colorCode}
    </Paper>
  );
};

export default SingleColor;
