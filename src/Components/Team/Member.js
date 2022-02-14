import React from "react";

import { withStyles } from "@material-ui/core";
import styles from "../../styles/MemberStyles.js";

import { Link } from "react-router-dom";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

const Member = (props) => {
  const { headshot, name, position, linkedin, info, classes } = props;

  return (
    <div className={classes.Member}>
      <div
        className={classes.Headshot}
        style={{ backgroundImage: `url(${headshot})` }}
      >
        <div>
          <p>{ info }</p>
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

export default withStyles(styles)(Member);
