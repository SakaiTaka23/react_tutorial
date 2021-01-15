import { Button } from '@material-ui/core';
import React from 'react';

type TabProp = {
  order: number;
  company: string;
  changeTab: (order: number) => void;
};

const Tab: React.FC<TabProp> = ({ company, order, changeTab }) => {
  return <Button onClick={() => changeTab(order)}>{company}</Button>;
};

export default Tab;
