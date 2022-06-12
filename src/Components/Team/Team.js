import React from "react";
import Member from "./Member";
import Nav from "../Layout/Nav";
import Footer from "../Layout/Footer";
import teamseed from "./TeamSeed";

import shared from "../../styles/Shared";
import colors from "../../styles/Colors";

import { withStyles } from "@mui/styles";

const Team = (props) => {
  const { classes } = props;

  const team = teamseed.map((member) => (
    <Member
      headshot={member.headshot}
      name={member.name}
      position={member.position}
      github={member.github}
      linkedin={member.linkedin}
    />
  ));

  return (
    <div className={classes.Team}>
      <div className={classes.SectionTitleBlock}>
        <h1 className={classes.SectionTitle}>Executive Board</h1>
      </div>
      <div className={classes.SectionSubTitle}>
        <h1>Meet Our Executive Board</h1>
        <p>
          The leaders of the Bentley Consulting Group are devoted to the
          organization and seeing our consultants thrive.
        </p>
      </div>
      {team}
    </div>
  );
};

const styles = {
  ...shared,
  Team: {
    display: "Flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: colors.lightBackground,
    backgroundSize: "cover",
    minHeight: "96vh",
    marginBottom: "250px",
  },
};

export default withStyles(styles)(Team);
