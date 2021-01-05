import React, { useState } from 'react';

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
        <button onClick={() => setReadMore(!readMore)}> {readMore ? 'show less' : 'show more'}</button>
      </p>
      <button onClick={() => props.removeTour(id)}>Not Interested</button>
    </>
  );
};

export default Tour;
