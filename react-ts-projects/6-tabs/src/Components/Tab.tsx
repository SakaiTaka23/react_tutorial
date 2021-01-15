import { Button, Grid } from '@material-ui/core';
import React from 'react';

type TabProp = {
  order: number;
  company: string;
  changeTab: (order: number) => void;
};

const Tab: React.FC<TabProp> = ({ company, order, changeTab }) => {
  return (
    <Grid container direction='column' justify='space-around' alignItems='center' spacing={4}>
      <Grid item>
        <Button color='primary' size='large' onClick={() => changeTab(order)}>
          {company}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Tab;
