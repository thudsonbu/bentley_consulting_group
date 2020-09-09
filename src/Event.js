import React, { Component } from 'react';

import Collapse from '@material-ui/core/Collapse';
import InfoIcon from '@material-ui/icons/Info';

import classNames from 'classnames';
import { withStyles } from '@material-ui/styles';
import styles from './styles/EventStyles';

class Event extends Component{
    constructor(props){
        super(props)
        this.state = {
            drawerOpen: false,
        }
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    toggleDrawer() {
        if (this.state.drawerOpen){
            this.setState({
                drawerOpen: false,
            })
        } else {
            this.setState({
                drawerOpen: true,
            })
        }
    }


    render() {
        const { classes, image, title, date, location, description } = this.props;
        const { drawerOpen } = this.state;
        console.log(image);
        return (
            <div className={classNames(classes.Event, {[classes.EventInfo]: drawerOpen})}>
                <div className={classes.EventImage} style={{backgroundImage: `url(${image})`,}} onClick={this.toggleDrawer}>
                </div>
                <div className={classes.EventContent} onClick={this.openDialog}>
                    <h2 className={classes.EventTitle}>{title}</h2>
                    <div className={classes.EventData}>
                        <div className={classes.EventDateAndTime}>
                            <p className={classes.EventDate}><strong>Date:</strong> {date}</p>
                            <p className={classes.EventLocation}><strong>Location:</strong> {location}</p>
                        </div>
                        <InfoIcon onClick={this.toggleDrawer}/>
                    </div>
                </div>
                <Collapse in={drawerOpen} >
                    <div className={classes.EventDrawer}>
                        <strong>Description:</strong> {description}
                    </div>
                </Collapse>
            </div>
        )
    }
}

export default withStyles(styles)(Event);