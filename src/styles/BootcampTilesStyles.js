import sizes from "./Sizes";
import colors from "./Colors";

export default {
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
      paddingTop: "120px",
      width: "80%",
    },
  },

  BootcampTile: {
    margin: "30px",
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
      opacity: "0%"
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
      opacity: "0%"
    },
    "& p": {
      fontSize: "16px",
      textAlign: "center",
      marginTop: "-175px",
      height: "100px",
      padding: "16px",
      transition: "opacity 0.1s",
      opacity: "0%"
    },
    "&:hover p": {
      transition: "opacity 0.2s",
      opacity: "90%"
    }
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
