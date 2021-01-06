import { Container, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import './App.css';
import Question from './components/question';
import questions from './data';

function App() {
  return (
    <Container maxWidth='sm'>
      <Grid item xs={6}>
        <Paper>
          <Typography>Questions And Answers About Login</Typography>
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </Paper>
      </Grid>
    </Container>
  );
}

export default App;
