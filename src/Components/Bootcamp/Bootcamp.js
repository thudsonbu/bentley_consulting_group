import React from "react";
import Tiles from "./BootcampTiles";
import Button from "@mui/material/Button";
import { withStyles } from "@mui/styles";
import colors from "../../styles/Colors";
import shared from "../../styles/Shared";

const Bootcamp = (props) => {
  const { classes } = props;

  return (
    <div className={classes.Bootcamp}>
      <div className={classes.SectionTitleBlock}>
        <h1 className={classes.SectionTitle}>Consulting Bootcamp</h1>
      </div>
      <div className={classes.SectionSubTitle}>
        <h1>The Bentley Consulting Group Consulting Bootcamp</h1>
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
    </div>
  );
};

const styles = {
  ...shared,

  Bootcamp: {
    backgroundColor: colors.lightBackground,
    backgroundSize: "cover",
    minHeight: "96vh",
    marginBottom: "250px",
  },

  GoButtonContainer: {
    marginTop: "50px",
    width: "100%",
    height: "150px",
    display: "flex",
    justifyContent: "center",
    aligntItems: "center",
    marginBottom: "50px",
  },

  GoButton: {
    width: "300px",
    height: "100px",
    fontSize: "24px",
    backgroundColor: colors.blue,
    color: colors.lightText,
    padding: "20px",
    transition: "opacity .25s, background .25s",
    "&:hover": {
      background: colors.blue,
      transition: "opacity .25s, background 15s",
    },
  },
};

export default withStyles(styles)(Bootcamp);
