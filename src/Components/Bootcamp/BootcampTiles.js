import React from "react";
import bootcampSeed from "./BootcampSeed";
import { withStyles } from "@mui/styles";
import sizes from "../../styles/Sizes";
import colors from "../../styles/Colors";

const BootcampTiles = (props) => {
  const { classes } = props;

  const bootcampTiles = bootcampSeed.map((seed) => {
    const icon = React.createElement(seed.icon, { className: classes.Icon });

    return (
      <div className={classes.BootcampTile}>
        <div>{icon}</div>
        <h1>{seed.title}</h1>
        <p>{seed.description}</p>
      </div>
    );
  });

  return <div className={classes.TileContainer}>{bootcampTiles}</div>;
};

const styles = {
  TileContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "1000px",
    paddingTop: "50px",
    [sizes.down("md")]: {
      paddingTop: "50px",
      width: "80%",
    },
  },

  BootcampTile: {
    margin: "0px 30px 30px 30px",
    width: "200px",
    height: "200px",
    backgroundColor: colors.blue,
    color: colors.lightText,
    borderRadius: "10px",
    boxSizing: "border-box",
    boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 7px 12px rgba(0,0,0,0.28)",
    },
    "&:hover $Icon": {
      transition: "opacity 0.2s",
      opacity: "0%",
    },
    "& h1": {
      fontSize: "20px",
      textAlign: "center",
      paddingBottom: "25px",
      padding: "5px",
      opacity: "90%",
      transition: "opacity 0.1s",
    },
    "&:hover h1": {
      transition: "opacity 0.2s",
      opacity: "0%",
    },
    "& p": {
      fontSize: "16px",
      textAlign: "center",
      marginTop: "-175px",
      height: "100px",
      padding: "16px",
      transition: "opacity 0.1s",
      opacity: "0%",
    },
    "&:hover p": {
      transition: "opacity 0.2s",
      opacity: "90%",
    },
  },

  Icon: {
    fontSize: "16px",
    width: "100%",
    height: "100px",
    paddingTop: "25px",
    opacity: "100%",
    transition: "opacity 0.1s",
  },
};

export default withStyles(styles)(BootcampTiles);
