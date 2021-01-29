import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { CocktailProvider } from './CocktailContext';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Error from './Pages/Error';
import Home from './Pages/Home';
import IdError from './Pages/IdError';
import SingleCocktail from './Pages/SingleCocktail';
import { theme } from './Theme';

function App() {
  return (
    <CocktailProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/cocktail/:id' component={SingleCocktail} />
            <Route path='/error/id' component={IdError} />
            <Route path='*' component={Error} />
          </Switch>
        </Router>
      </ThemeProvider>
    </CocktailProvider>
  );
}

export default App;
