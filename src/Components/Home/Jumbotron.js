import React from "react";

import sizes from "../../styles/Sizes";

import { withStyles } from "@mui/styles";

import background from "../../images/bentleyLibrary.jpg";

const Jumbotron = (props) => {
  return (
    <div className={props.classes.Jumbotron}>
      <h1 className={props.classes.JumbotronTitle}>Bentley Consulting Group</h1>
    </div>
  );
};

const styles = {
  Jumbotron: {
    height: "100vh",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [sizes.up("sm")]: {
      backgroundAttachment: "fixed",
    },
  },

  JumbotronTitle: {
    fontSize: "80px",
    textAlign: "center",
    [sizes.down("md")]: {
      marginLeft: "10px",
      fontSize: "48px",
    },
  },
};

export default withStyles(styles)(Jumbotron);
