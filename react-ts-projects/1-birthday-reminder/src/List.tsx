import React from 'react';

type ListProps = {
  people: { id: number; name: string; age: number; image: string }[];
};

// type People = {
//   id: number;
//   name: string;
//   age: number;
//   image: string;
// };

const List: React.FC<ListProps> = (props) => {
  return (
    <>
      {props.people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
