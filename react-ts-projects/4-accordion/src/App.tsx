import { Container, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import './App.css';
import Question from './components/question';
import questions from './data';

function App() {
  return (
    <div className='App'>
      <Container maxWidth='sm'>
        <Grid item xs={6}>
          <Typography>Questions And Answers About Login</Typography>
          <Paper variant='outlined' elevation={3}>
            {questions.map((question) => {
              return <Question key={question.id} {...question} />;
            })}
          </Paper>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
