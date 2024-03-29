import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../../styles/JumbotronStyles";
const Jumbotron = (props) => {
  return (
    <div className={props.classes.Jumbotron}>
      <h1 className={props.classes.JumbotronTitle}>Bentley Consulting Group</h1>
      <div className={props.classes.SeeAboutContainer}>
        { /*<p className={props.classes.SeeAbout}>Learn More</p> Tom couldnt get this working */ }
      </div>
    </div>
  );
};

export default withStyles(styles)(Jumbotron);
