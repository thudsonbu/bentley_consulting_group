import React    from "react";
import { Link } from "react-router-dom";

import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import GroupIcon          from "@mui/icons-material/Group";
import PhoneIphoneIcon    from "@mui/icons-material/PhoneIphone";
import FlightTakeoffIcon  from "@mui/icons-material/FlightTakeoff";

import Button from "@mui/material/Button";

import { withStyles } from "@mui/styles";
import styles         from "../../styles/FooterStyles";

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

export default withStyles(styles)(Footer);
