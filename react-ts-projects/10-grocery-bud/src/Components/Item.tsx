import { Box, Typography } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import React, { FC, useContext } from 'react';
import { GroceryContext } from '../GroceryContext';

type ItemProp = {
  id: string;
  title: string;
};

const Item: FC<ItemProp> = ({ id, title }) => {
  const { deleteList } = useContext(GroceryContext);

  return (
    <Box display='flex' flexDirection='row'>
      <Typography>{title}</Typography>
      <Edit />
      <Delete onClick={() => deleteList(id)} />
    </Box>
  );
};

export default Item;
