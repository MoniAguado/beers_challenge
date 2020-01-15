import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './App.Styles';
import Beers from './pages/beers/View';
import Home from './pages/home/View';
import RandomBeers from './pages/randomBeers/View';
import NavBar from './components/navbar/View';
import Footer from './components/footer/View';
import './App.css';

class App extends Component {
  render() {
   const {classes} = this.props
    
    return (
      <div className={classes.appContainer}>
       <NavBar></NavBar>
       <div className={classes.main}>
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
        </div>
       <Footer></Footer>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.shape({
    appContainer: PropTypes.string.isRequired,
    main: PropTypes.string.isRequired,
  }).isRequired,

}

export default withStyles(styles)(App)
