import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Beers from './pages/beers/View';
import Home from './pages/home/View';
import RandomBeers from './pages/randomBeers/View';
import NavBar from './components/navbar/View';
import Footer from './components/footer/View';
import './App.css';

class App extends Component {
  render() {
   
    
    return (
      <div className="App">
       <NavBar></NavBar>
        <Switch>
          <Route path="/beers">
            <Beers />
          </Route>
          <Route path="/random-beers">
            <RandomBeers />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
         
       <Footer></Footer>
      </div>
    );
  }
}


export default App
