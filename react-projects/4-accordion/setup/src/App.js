import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  console.log(data);
  const [questions, setQuestions] = useState(data);

  return (
    <>
      <div className='container'>
        <h3>Questions And Answers About Login</h3>
        <section className='info'>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </>
  );
}

export default App;
