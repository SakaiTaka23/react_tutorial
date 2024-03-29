import { useContext } from 'react';
import { TodosContext } from './TodosContext';

const App = () => {
  const { todos, addTodo } = useContext(TodosContext);
  console.log(todos, addTodo);

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

export default App;
