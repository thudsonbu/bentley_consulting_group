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
          href="https://nam11.safelinks.protection.outlook.com/?url=https%3A%2F%2Fforms.office.com%2FPages%2FDesignPage.aspx%3Ffragment%3DFormId%253Drr4wkPw8iEep4hMCBP8fEIxsXjbW6zxPj5gz0uRW5O5URFJXSlpJUEpDMlg3NEZRQzdZVU9GSFpQNy4u&data=04%7C01%7CWATKINS_MICH%40bentley.edu%7Cdab46812057e4636ca5608d982bc61b2%7C9030beae3cfc4788a9e2130204ff1f10%7C0%7C0%7C637684567915674304%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=ktsIbDGyEiEalRSgpqVstKNE%2BlRgsSaZtUlxXvuPRwY%3D&reserved=0"
        >
          Sign Up
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default withStyles(styles)(Bootcamp);
