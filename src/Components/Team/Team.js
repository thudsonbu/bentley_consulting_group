import React from "react";

import Member from "./Member";
import Nav    from "../Partials/Nav";
import Footer from "../Partials/Footer";

import teamseed from "./TeamSeed";

import { withStyles } from "@mui/styles";
import styles         from "../../styles/TeamStyles.js";

const Team = ( props ) => {
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
      <Nav currentLocation={"Team"} />
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
      <Footer />
    </div>
  );
};

export default withStyles(styles)(Team);
