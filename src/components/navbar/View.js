import React, { Component } from 'react';
import {
    Link,
} from 'react-router-dom';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './View.Styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



class NavBar extends Component {
    render() {
        const {classes} = this.props
        return (
            <div className={classes.navbar}>
                <AppBar position="static" classname={classes.AppBar}>
                    <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/beers">Beers</Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/random-beers">RandomBeers</Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/">Home</Link>
                    </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
};



NavBar.propTypes = {
    classes: PropTypes.shape({
      navbar: PropTypes.string.isRequired,
      AppBar: PropTypes.string.isRequired,
      menuButton: PropTypes.string.isRequired,
      tittle: PropTypes.string.isRequired,
    }).isRequired,
  
  }
  
  export default withStyles(styles)(NavBar)
