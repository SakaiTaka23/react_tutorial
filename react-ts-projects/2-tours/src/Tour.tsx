import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

type TourProps = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
  removeTour: (id: string) => void;
};

const Tour: React.FC<TourProps> = (props) => {
  const [readMore, setReadMore] = useState(false);
  const { id, name, info, image, price } = props;
  return (
    <>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <h4>${price}</h4>
      <p>
        {readMore ? info : `${info.substring(0, 200)}...`}
        <Button variant='contained' color='primary' onClick={() => setReadMore(!readMore)}>
          {readMore ? 'show less' : 'show more'}
        </Button>
      </p>
      <Button variant='contained' color='secondary' onClick={() => props.removeTour(id)}>
        Not Interested
      </Button>
    </>
  );
};

export default Tour;
