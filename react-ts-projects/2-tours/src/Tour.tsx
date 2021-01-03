import React from 'react';

type TourProps = {
  name: string;
  info: string;
  image: string;
  price: string;
};

const Tour: React.FC<TourProps> = (props) => {
  const { name, info, image, price } = props;
  return (
    <>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <h4>${price}</h4>
      <p>{info}</p>
      <button>Read More</button>
      <button>Not Interested</button>
    </>
  );
};

export default Tour;
