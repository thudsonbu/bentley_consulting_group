import React from "react";
import { Link } from "react-router-dom";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import GroupIcon from "@mui/icons-material/Group";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import LogoWhite from "../../images/LogoWhite.png";
import colors from "../../styles/Colors";
import sizes from "../../styles/Sizes";
import Button from "@mui/material/Button";
import { withStyles } from "@mui/styles";

function Footer(props) {
  return (
    <div className={props.classes.Footer}>
      <div className={props.classes.FooterLinks}>
        <Link to={"/Events"} className={props.classes.Link}>
          <Button
            className={props.classes.Btn}
            startIcon={<EventAvailableIcon className={props.classes.Icon} />}
            size="medium"
            style={{ fontSize: "20px" }}
          >
            Events
          </Button>
        </Link>
        <Link to={"/Bootcamp"} className={props.classes.Link}>
          <Button
            className={props.classes.Btn}
            startIcon={<FlightTakeoffIcon className={props.classes.Icon} />}
            size="medium"
            style={{ fontSize: "20px" }}
          >
            Bootcamp
          </Button>
        </Link>
        <Link to={"/Team"} className={props.classes.Link}>
          <Button
            className={props.classes.Btn}
            startIcon={<GroupIcon className={props.classes.Icon} />}
            size="medium"
            style={{ fontSize: "20px" }}
          >
            Team
          </Button>
        </Link>
        <Link to={"/ContactUs"} className={props.classes.Link}>
          <Button
            className={props.classes.Btn}
            startIcon={<PhoneIphoneIcon className={props.classes.Icon} />}
            size="medium"
            style={{ fontSize: "20px" }}
          >
            Contact Us
          </Button>
        </Link>
      </div>
      <div className={props.classes.FooterCC}>
        <div className={props.classes.MiniLogo} />
        <div className={props.classes.CC}>
          <p>© 2022 Thomas Hudson All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  Footer: {
    position: "fixed",
    bottom: "0",
    width: "100%",
    height: "250px",
    backgroundColor: colors.blue,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [sizes.down("md")]: {
      marginTop: "80px",
    },
    zIndex: "-1",
  },

  FooterLinks: {
    paddingTop: "20px",
    width: "70%",
    height: "50%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    zIndex: "-1",
  },

  Icon: {
    color: colors.lightText,
  },

  FooterCC: {
    width: "100%",
    height: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "10px",
    paddingTop: "30xp",
  },

  Btn: {
    borderColor: "transparent",
    backgroundColor: "transparent",
    color: colors.lightText,
  },

  miniLogo: {
    color: "black",
    paddingLeft: "30px",
    width: "40px",
    height: "40px",
    backgroundImage: `url(${LogoWhite})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  CC: {
    color: colors.lightText,
    fontSize: "15px",
  },

  Link: {
    textDecoration: "none",
    color: colors.lightText,
    fontSize: "80px",
    [sizes.down("md")]: {
      fontSize: "50px",
    },
  },
};

export default withStyles(styles)(Footer);
