import React from "react";
import Nav from "../Partials/Nav";
import Tiles from "./BootcampTiles";
import Footer from "../Partials/Footer";
import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/styles";
import styles from "../../styles/BootcampStyles";

const Bootcamp = (props) => {
  const { classes } = props;

  return (
    <div>
      <Nav currentLocation={"Bootcamp"} />
      <div className={classes.SectionTitleBlock}>
        <h1 className={classes.SectionTitle}>Consulting Bootcamp</h1>
      </div>
      <div className={classes.SectionSubTitle}>
        <h1>
          The Bentley Consulting Group Consulting Bootcamp
        </h1>
        <p>
          The Bentley Consulting Group bootcamp is a fantastic opportunity for
          students interested in consulting to get a head start.
        </p>
      </div>
      <Tiles />
      <div className={classes.GoButtonContainer}>
        <Button
          variant="contained"
          className={classes.GoButton}
          href="https://forms.office.com/r/NvEP4Vbvrt"
        >
          Sign Up
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default withStyles(styles)(Bootcamp);
