import React from 'react';

type TabProp = {
  company: string;
};

const Tab: React.FC<TabProp> = ({ company }) => {
  return <div>{company}</div>;
};

export default Tab;
