import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './View.Styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <React.Fragment>
                    <CssBaseline />
                    <Container fixed className="footerContainer">
                        <Typography component="div">Develop by Moni</Typography>
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
    }).isRequired,
  
  }
  
  export default withStyles(styles)(Footer)
