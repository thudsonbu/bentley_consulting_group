import React, { Component } from "react";

import classNames from "classnames";
import { withStyles } from "@material-ui/styles";
import styles from "../../styles/EventStyles";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    if (this.state.drawerOpen) {
      this.setState({
        drawerOpen: false,
      });
    } else {
      this.setState({
        drawerOpen: true,
      });
    }
  }

  render() {
    const {
      classes,
      image,
      title,
      date,
      time,
      location,
      description,
    } = this.props;

    const { drawerOpen } = this.state;

    return (
      <div
        className={classNames(classes.Event, {
          [classes.EventInfo]: drawerOpen,
        })}
      >
        <div
          className={classes.EventImage}
          style={{ backgroundImage: `url(${image})` }}
          onClick={this.toggleDrawer}
        ></div>
          <div className={classes.EventDrawer}>
            <h2 className={classes.EventTitle}>{title}</h2>
            <p><strong>Date:</strong> {date} </p>
            <p><strong>Time:</strong> {time} </p>
            <p><strong>Location:</strong> {location} </p>
            <p><strong>Description:</strong> {description} </p>
          </div>
      </div>
    );
  }
}

export default withStyles(styles)(Event);
