import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@mui/styles";
import sizes from "../../styles/Sizes";
import colors from "../../styles/Colors";

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
    const { classes, image, title, date, time, location, description } =
      this.props;

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
          <p>
            <strong>Date:</strong> {date}{" "}
          </p>
          <p>
            <strong>Time:</strong> {time}{" "}
          </p>
          <p>
            <strong>Location:</strong> {location}{" "}
          </p>
          <p>
            <strong>Description:</strong> {description}{" "}
          </p>
        </div>
      </div>
    );
  }
}

const tileHeight = "440px";

const styles = {
  Event: {
    width: "330px",
    height: tileHeight,
    margin: "60px 40px 150px 40px",
    overflow: "hidden",
    "&:hover": {
      boxShadow: "0 7px 12px rgba(0,0,0,0.28)",
    },
    [sizes.down("md")]: {
      margin: "50px",
      marginBottom: "110px",
      width: "350px",
      boxShadow: "0 7px 12px rgba(0,0,0,0.28)",
    },
    "&:hover $EventDrawer": {
      marginTop: "-" + tileHeight,
      opacity: "90%",
    },
  },

  EventTitle: {
    fontSize: "24px",
    padding: "30px 0px",
    width: "100%",
    textAlign: "center",
    margin: "0",
  },

  EventDrawer: {
    marginTop: "-85px",
    transition: "all .25s ease-in-out",
    height: tileHeight,
    padding: "0px 15px 10px 15px",
    backgroundColor: colors.blue,
    color: colors.lightText,
    "& p": {
      marginTop: "-5px",
    },
  },

  EventImage: {
    height: tileHeight,
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    cursor: "pointer",
  },
};

export default withStyles(styles)(Event);
