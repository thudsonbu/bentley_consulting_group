import React from "react";

import Event from "./Event";
import events from "./EventsSeed";

import sizes from "../../styles/Sizes";
import shared from "../../styles/Shared";
import colors from "../../styles/Colors";

import { withStyles } from "@mui/styles";

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
      <div className={classes.SectionTitleBlock}>
        <h1 className={classes.SectionTitle}>Upcoming Events</h1>
      </div>
      <div className={classes.SectionSubTitle}>
        <h1>Events the BCG has planned this year.</h1>
      </div>
      <div className={classes.EventsContainer}>{eventBlocks}</div>
    </div>
  );
};

const styles = {
  ...shared,

  Events: {
    backgroundColor: colors.lightBackground,
    backgroundSize: "cover",
    minHeight: "96vh",
    marginBottom: "250px",
  },

  EventsContainer: {
    width: "100%",
    display: "Flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    minHeight: "55vh",
  },

  ClickableBlock: {
    width: "300px",
    height: "450px",
    margin: "60px",
    transition: "box-shadow .25s",
    "&:hover": {
      cursor: "pointer",
      boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
    },
    [sizes.down("md")]: {
      margin: "50px",
      width: "350px",
      boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
    },
  },
};

export default withStyles(styles)(Events);
