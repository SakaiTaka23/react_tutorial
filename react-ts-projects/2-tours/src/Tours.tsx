import React from 'react';
import Tour from './Tour';

type ToursProps = {
  tours: {
    id: string;
    name: string;
    info: string;
    image: string;
    price: string;
  }[];
};

const Tours: React.FC<ToursProps> = (props) => {
  return (
    <>
      <h1>this is tours component</h1>
      {props.tours.map((tour) => {
        return <Tour key={tour.id} />;
      })}
    </>
  );
};

export default Tours;
