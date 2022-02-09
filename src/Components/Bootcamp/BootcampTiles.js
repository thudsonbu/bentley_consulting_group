import React from "react";

import { withStyles } from "@material-ui/styles";
import styles from "../../styles/BootcampTilesStyles";

import bootcampSeed from "./BootcampSeed";

const BootcampTiles = (props) => {
  const { classes } = props;

  const bootcampTiles = bootcampSeed.map(seed => {

    const icon = React.createElement(
      seed.icon,
      { className: classes.Icon }
    );

    return (
      <div className={classes.BootcampTile}>
        <div>{icon}</div>
        <h1>{seed.title}</h1>
        <p>{seed.description}</p>
      </div>
    );
  });

  return (
    <div className={classes.TileContainer}>
      {bootcampTiles}
    </div>
  );
};

export default withStyles(styles)(BootcampTiles);
