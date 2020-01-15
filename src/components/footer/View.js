import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './View.Styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Footer extends Component {
    render() {
        const {classes} = this.props
        return (
            <div className={classes.footer}>
                <React.Fragment>
                    <CssBaseline />
                    <Container fixed className={classes.footerContainer}>
                        <Typography component="div" className={classes.text}>Develop by Moni</Typography>
                    </Container>
                </React.Fragment>
            </div>
        )
    }
};

Footer.propTypes = {
    classes: PropTypes.shape({
      footer: PropTypes.string.isRequired,
      footerContainer: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  
  }
  
  export default withStyles(styles)(Footer)
