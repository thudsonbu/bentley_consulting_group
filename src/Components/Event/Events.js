import React, { Component } from "react";

import Nav from "../Partials/Nav";
import Event from "./Event";
import Footer from "../Partials/Footer";

import { withStyles } from "@material-ui/styles";
import styles from "../../styles/EventsStyles";

import events from "./EventsSeed";

class Events extends Component {
  render() {
    const { classes } = this.props;
    const eventBlocks = events.map((event) => (
      <Event
        image={event.image}
        title={event.title}
        date={event.date}
        time={event.time}
        location={event.location}
        description={event.description}
      />
    ));
    return (
      <div className={classes.Events}>
        <Nav currentLocation={"Events"} />
        <div className={classes.EventsContainer}>
          <div className={classes.SectionTitleBlock}>
            <h1 className={classes.SectionTitle}>Upcoming Events</h1>
          </div>
          <div className={classes.SectionSubTitle}>
            <h1>Events the BCG has planned this year.</h1>
            <p>
              Learn about each events that the BCG has planned, and RSVP to
              events.
            </p>
          </div>
          {eventBlocks}
          <Footer />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Events);
