import { Grid } from '@material-ui/core';
import React from 'react';
import data from '../data';

type LoremProp = {
  generate: number;
};

const Lorem: React.FC<LoremProp> = ({ generate }) => {
  const lorems = data.slice(0, generate);

  return (
    <Grid container direction='column'>
      {lorems.map((lorem, index) => {
        return <Grid key={index}>{lorem}</Grid>;
      })}
    </Grid>
  );
};

export default Lorem;
