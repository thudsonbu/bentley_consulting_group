import React from "react";

import { withStyles } from "@material-ui/styles";
import styles from "../../styles/BootcampTilesStyles";

import GroupAddIcon from "@material-ui/icons/GroupAdd";
import BuildIcon from "@material-ui/icons/Build";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import SuperVisorAccountIcon from "@material-ui/icons/SupervisorAccount";

const BootcampTiles = (props) => {
  const { classes } = props;

  return (
    <div className={classes.TileContainer}>
      <div className={classes.BootcampTile}>
        <GroupAddIcon className={classes.Icon} />
        <p className={classes.Title}>Networking</p>
        <p className={classes.Description}>
          Through various events students will be able to meet with real
          consultants and get ahead.
        </p>
      </div>
      <div className={classes.BootcampTile}>
        <BuildIcon className={classes.Icon} />
        <p className={classes.Title}>Problem Solving</p>
        <p className={classes.Description}>
          By working though numerous cases and exercises students will sharpen
          their problem solving.
        </p>
      </div>
      <div className={classes.BootcampTile}>
        <DoubleArrowIcon className={classes.Icon} />
        <p className={classes.Title}>Skill Development</p>
        <p className={classes.Description}>
          Learn how to use PowerPoint, Excel, Airtable, and other tools commonly
          used in consulting.
        </p>
      </div>{" "}
      <div className={classes.BootcampTile}>
        <DataUsageIcon className={classes.Icon} />
        <p className={classes.Title}>Interview Prep</p>
        <p className={classes.Description}>
          Get access to guides, resources and cases to ensure you ace your
          interviews.
        </p>
      </div>{" "}
      <div className={classes.BootcampTile}>
        <HowToRegIcon className={classes.Icon} />
        <p className={classes.Title}>Recommendations</p>
        <p className={classes.Description}>
          Students often receive letters of recommendation after completing a
          project succesfully.
        </p>
      </div>{" "}
      <div className={classes.BootcampTile}>
        <SuperVisorAccountIcon className={classes.Icon} />
        <p className={classes.Title}>Mentorship</p>
        <p className={classes.Description}>
          Get one on one coaching from Bentley Consulting Group's experienced
          eboard members.
        </p>
      </div>
    </div>
  );
};

export default withStyles(styles)(BootcampTiles);
