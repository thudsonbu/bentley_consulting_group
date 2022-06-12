import React from "react";

import { Link } from "react-router-dom";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

import sizes from "../../styles/Sizes";
import colors from "../../styles/Colors";

import { withStyles } from "@mui/styles";

const Member = (props) => {
  const { headshot, name, position, linkedin, info, classes } = props;

  return (
    <div className={classes.Member}>
      <div
        className={classes.Headshot}
        style={{ backgroundImage: `url(${headshot})` }}
      >
        <div>
          <p>{info}</p>
        </div>
      </div>
      <div className={classes.Body}>
        <h2 className={classes.Name}>{name}</h2>
        <p className={classes.Position}>{position}</p>
        <div className={classes.Icons}>
          <a href={linkedin}>
            <LinkedInIcon className={classes.Icon} />
          </a>
          <Link to="/ContactUs">
            <EmailIcon className={classes.Icon} />
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  Member: {
    width: "300px",
    height: "500px",
    margin: "60px 30px 90px 30px",
    transition: "box-shadow .25s",
    borderRadius: "10px",
    [sizes.down("md")]: {
      margin: "50px",
      marginBottom: "90px",
      width: "350px",
      boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
    },
  },

  Headshot: {
    width: "300px",
    height: "350px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    [sizes.down("md")]: {
      width: "350px",
    },
    "& div": {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      opacity: "0%",
      transition: "opacity 0.2s ease-in-out",
    },
    "&:hover div": {
      backgroundColor: colors.blue,
      opacity: "70%",
    },
    "& p": {
      color: "white",
    },
  },

  Body: {
    height: "170px",
    backgroundColor: colors.blue,
    color: colors.lightBackground,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  Name: {
    marginBottom: "-5px",
  },

  Position: {
    fontSize: "16px",
    textAlign: "center",
  },

  Icons: {
    height: "40px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },

  Icon: {
    color: colors.lightText,
    fontSize: "2rem",
    margin: "0px 15px 0px 15px",
    paddingBottom: "10px",
  },
};

export default withStyles(styles)(Member);
