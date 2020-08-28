import React, { Component } from 'react';

import Nav from './Nav';
import Footer from './Footer';

import { withStyles } from '@material-ui/styles';
import styles from './styles/EventsStyles';

class Events extends Component{
    constructor(props){
        super(props)
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.Events}>
                <Nav currentLocation={"Events"} />
                <div className={classes.EventsContainer}>
                    
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Events);

