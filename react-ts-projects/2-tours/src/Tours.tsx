import React from 'react';
import Tour from './Tour';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';

type ToursProps = {
  tours: {
    id: string;
    name: string;
    info: string;
    image: string;
    price: string;
  }[];
  removeTour: (id: string) => void;
};

const Tours: React.FC<ToursProps> = (props) => {
  return (
    <>
      <Typography variant='h1' component='h2' gutterBottom>
        Our Tours
      </Typography>
      {props.tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={props.removeTour} />;
      })}
    </>
  );
};

export default Tours;
