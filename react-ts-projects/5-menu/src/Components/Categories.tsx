import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';

type CategoriesProp = {
  categories: string[];
  filterCategory: (category: string) => void;
};

const Categories: React.FC<CategoriesProp> = ({ categories, filterCategory }) => {
  return (
    <Box display='flex' flexDirection='row' justifyContent='center' p={1} m={1}>
      {categories.map((category, index) => {
        return (
          <Box m={2} key={index}>
            <Button onClick={() => filterCategory(category)}>
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
