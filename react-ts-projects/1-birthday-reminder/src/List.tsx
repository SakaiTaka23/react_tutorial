import React from 'react';

type Props = {
  people: People;
};

type People = {
  id: number;
  name: string;
  age: number;
  image: string;
};

const List: React.FC<Props> = ({ people }) => {
  const { id, name, age, image } = people;
  return (
    <>
      <article key={id}>
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{age}years</p>
        </div>
      </article>
    </>
  );
};

export default List;
