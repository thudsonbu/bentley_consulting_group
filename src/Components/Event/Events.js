import React from "react";

import Nav from "../Partials/Nav";
import Event from "./Event";
import Footer from "../Partials/Footer";

import { withStyles } from "@material-ui/styles";
import styles from "../../styles/EventsStyles";

import events from "./EventsSeed";

const Events = (props) => {
  const { classes } = props;

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
        <div className={classes.SectionTitleBlock}>
          <h1 className={classes.SectionTitle}>Upcoming Events</h1>
        </div>
        <div className={classes.SectionSubTitle}>
          <h1>Events the BCG has planned this year.</h1>
        </div>
        <div className={classes.EventsContainer}>
          {eventBlocks}
        </div>
        <Footer />
    </div>
  );
};

export default withStyles(styles)(Events);
