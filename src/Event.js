import React, { Component } from 'react';

import { withStyles } from '@material-ui/styles';
import styles from './styles/EventStyles';

class Event extends Component{
    constructor(props){
        super(props)
    }

    render() {
        const { classes, image, title, date } = this.props;
        console.log(image);
        return (
            <div className={classes.Event}>
                <div className={classes.EventImage} style={{backgroundImage: `url(${image})`,}}/>
                <div className={classes.EventContent}>
                    <h2 className={classes.EventTitle}>{title}</h2>
                    <p className={classes.EventDate}>{date}</p>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Event);