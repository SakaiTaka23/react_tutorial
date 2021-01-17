import React, { useContext } from 'react';
import TodosProvider, { TodosContext } from './TodosContext';

const App = () => {
  const { todos, addTodo } = useContext(TodosContext);

  return (
    <div>
      <div>
        {todos.map((todo, i) => (
          <div key={i}>{todo}</div>
        ))}
      </div>
      <button onClick={() => addTodo('new todo')}>add todo</button>
    </div>
  );
};

export default () => (
  <TodosProvider>
    <App />
  </TodosProvider>
);
