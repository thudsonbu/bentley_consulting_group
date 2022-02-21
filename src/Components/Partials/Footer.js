import React from "react";
import { Link } from "react-router-dom";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import GroupIcon from "@material-ui/icons/Group";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";

import { withStyles } from "@material-ui/styles";
import styles from "../../styles/FooterStyles";

import Button from "@material-ui/core/Button";

function Footer(props) {
  return (
    <div className={props.classes.Footer}>
      <div className={props.classes.FooterLinks}>
        <Link to={"/Events"} className={props.classes.link}>
          <Button
            className={props.classes.button}
            startIcon={<EventAvailableIcon className={props.classes.Icon} />}
            size="medium"
            style={{fontSize: "20px"}}
          >
            Events
          </Button>
        </Link>
        <Link to={"/Bootcamp"} className={props.classes.link}>
          <Button
            className={props.classes.button}
            startIcon={<FlightTakeoffIcon className={props.classes.Icon} />}
            size="medium"
            style={{fontSize: "20px"}}
          >
            Bootcamp
          </Button>
        </Link>
        <Link to={"/Team"} className={props.classes.link}>
          <Button
            className={props.classes.button}
            startIcon={<GroupIcon className={props.classes.Icon} />}
            size="medium"
            style={{ fontSize: "20px" }}
          >
            Team
          </Button>
        </Link>
        <Link to={"/ContactUs"} className={props.classes.link}>
          <Button
            className={props.classes.button}
            startIcon={<PhoneIphoneIcon className={props.classes.Icon} />}
            size="medium"
            style={{ fontSize: "20px" }}
          >
            Contact Us
          </Button>
        </Link>
      </div>
      <div className={props.classes.FooterCC}>
        <div className={props.classes.miniLogo} />
        <div className={props.classes.CC}>
          <p>© 2022 Thomas Hudson All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

//TODO fix footer cc overlap on small screens

export default withStyles(styles)(Footer);
