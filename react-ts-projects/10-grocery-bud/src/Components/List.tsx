import React, { useContext } from 'react';
import { GroceryContext } from '../GroceryContext';
import Item from './Item';

const List = () => {
  const { list } = useContext(GroceryContext);

  return (
    <div>
      {list.map((item) => {
        return <Item key={item.id} {...item} />;
      })}
    </div>
  );
};

export default List;
