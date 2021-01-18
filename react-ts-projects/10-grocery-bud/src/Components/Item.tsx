import React, { FC } from 'react';

type ItemProp = {
  title: string;
};

const Item: FC<ItemProp> = ({ title }) => {
  return <div>{title}</div>;
};

export default Item;
