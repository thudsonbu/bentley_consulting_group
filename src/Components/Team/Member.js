import React from "react";

import { Link } from "react-router-dom";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon    from "@mui/icons-material/Email";

import { withStyles } from "@mui/styles";
import styles         from "../../styles/MemberStyles.js";

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
