import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { CocktailProvider } from './CocktailContext';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Error from './Pages/Error';
import Home from './Pages/Home';
import SingleCocktail from './Pages/SingleCocktail';

function App() {
  return (
    <CocktailProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/cocktail/:id'>
            <SingleCocktail />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </CocktailProvider>
  );
}

export default App;
