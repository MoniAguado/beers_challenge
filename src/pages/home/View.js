import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './View.Styles';

class Home extends Component {
    render() {
        const {classes} = this.props
        return (
            <div className={classes.mainHome}>
                Home
            </div>
        )
    }
};

Home.propTypes = {
    classes: PropTypes.shape({
        mainHome: PropTypes.string.isRequired,
    }).isRequired,
  
  }

  export default withStyles(styles)(Home)
