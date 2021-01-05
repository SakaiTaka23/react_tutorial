import React from 'react';

type TourProps = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
  removeTour: (id: string) => void;
};

const Tour: React.FC<TourProps> = (props) => {
  const { id, name, info, image, price } = props;
  return (
    <>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <h4>${price}</h4>
      <p>{info}</p>
      <button>Read More</button>
      <button onClick={() => props.removeTour(id)}>Not Interested</button>
    </>
  );
};

export default Tour;
