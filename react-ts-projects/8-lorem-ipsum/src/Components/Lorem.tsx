import React from 'react';
import data from '../data';

type LoremProp = {
  generate: number;
};

const Lorem: React.FC<LoremProp> = ({ generate }) => {
  const lorems = data.slice(0, generate);

  return (
    <ul>
      {lorems.map((lorem, index) => {
        return <li key={index}>{lorem}</li>;
      })}
    </ul>
  );
};

export default Lorem;
