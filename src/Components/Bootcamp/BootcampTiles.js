import React from "react";

import bootcampSeed from "./BootcampSeed";

import { withStyles } from "@mui/styles";
import styles         from "../../styles/BootcampTilesStyles";


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
