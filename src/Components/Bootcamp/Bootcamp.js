import React from "react";
import Nav from "../Partials/Nav";
import Tiles from "./BootcampTiles";
import Footer from "../Partials/Footer";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

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
          <h1 className={classes.SectionSubtitleTitle}>
            The Bentley Consulting Group Consulting Bootcamp
          </h1>
          <p className={classes.SectionSubtitleDescription}>
            The Bentley Consulting Group bootcamp is a fantastic opportunity for
            students interested in consulting to get a head start.
          </p>
        </div>
      </div>
      <Tiles />
      <div className={classes.GoButtonContainer}>
        <Button
          variant="contained"
          className={classes.GoButton}
          href="https://forms.office.com/Pages/ResponsePage.aspx?id=rr4wkPw8iEep4hMCBP8fEIxsXjbW6zxPj5gz0uRW5O5UOFpDU1pUNUVYRFdZNFVQR1ROOUpWVTMwNC4u"
        >
          Sign Up
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default withStyles(styles)(Bootcamp);
