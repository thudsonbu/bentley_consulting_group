import React from "react";
import Nav from "../Partials/Nav";
import Footer from "../Partials/Footer";

import { withStyles } from "@material-ui/styles";
import styles from "../../styles/BootcampStyles";

const Bootcamp = (props) => {
  const { classes } = props;

  return (
    <div className={classes.Bootcamp}>
      <Nav currentLocation={"Bootcamp"} />
      <div className={classes.BootcampContainer}>
        <div className={classes.SectionTitleBlock}>
          <h1 className={classes.SectionTitle}>Consulting Bootcamp</h1>
        </div>
        <div className={classes.SectionSubtitle}>
          <h1>The Bentley Consulting Group Consulting Bootcamp</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withStyles(styles)(Bootcamp);
