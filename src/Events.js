import React, { Component } from 'react';

import Nav from './Nav';
import Event from './Event';
import Footer from './Footer';

import { withStyles } from '@material-ui/styles';
import styles from './styles/EventsStyles';

import events from './EventsSeed';

class Events extends Component{
    constructor(props){
        super(props)
    }

    render() {
        const { classes } = this.props;
        const eventBlocks = events.map((event) => (
            <Event
                image={event.image}
                title={event.title}
                date={event.date}
            />
        ))
        return (
            <div className={classes.Events}>
                <div className={classes.EventsContainer}>
                    <Nav currentLocation={"Events"} />
                    <div className={classes.SectionTitleBlock}>
                        <h1 className={classes.SectionTitle}>Upcoming Events</h1>
                    </div>
                    <div className={classes.SectionSubTitle}>
                        <h1>Events that the BCG has planned this semester.</h1>
                        <p>Learn about each events that the BCG has planned, and RSVP to events.</p>
                    </div>
                    {eventBlocks}
                    <Footer />
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Events);

