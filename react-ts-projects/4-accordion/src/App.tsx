import { Typography } from '@material-ui/core';
import React from 'react';
import './App.css';
import Question from './components/question';
import questions from './data';

function App() {
  return (
    <div className='App'>
      <Typography>Questions And Answers About Login</Typography>
      {questions.map((question) => {
        return <Question key={question.id} {...question} />;
      })}
    </div>
  );
}

export default App;
