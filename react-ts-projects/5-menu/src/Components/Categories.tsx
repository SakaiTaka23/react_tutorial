import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';

type CategoriesProp = {
  categories: string[];
};

const Categories: React.FC<CategoriesProp> = ({ categories }) => {
  return (
    <Box display='flex' flexDirection='row' justifyContent='center' p={1} m={1}>
      {categories.map((category, index) => {
        return (
          <Box m={2} key={index}>
            <Button>
              <Typography color='primary' variant='h5'>
                {category}
              </Typography>
            </Button>
          </Box>
        );
      })}
    </Box>
  );
};

export default Categories;
