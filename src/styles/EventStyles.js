import sizes from "./Sizes";
import colors from "./Colors";

const tileHeight = "440px";

export default {
  Event: {
    width: "330px",
    height: tileHeight,
    margin: "60px 40px 150px 40px",
    overflow: "hidden",
    "&:hover": {
      boxShadow: "0 7px 12px rgba(0,0,0,0.28)",
    },
    [sizes.down("md")]: {
      margin: "50px",
      marginBottom: "110px",
      width: "350px",
      boxShadow: "0 7px 12px rgba(0,0,0,0.28)",
    },
    "&:hover $EventDrawer": {
      marginTop: "-" + tileHeight,
      opacity: '90%'
    }
  },

  EventTitle: {
    fontSize: "24px",
    padding: "30px 0px",
    width: "100%",
    textAlign: "center",
    margin: "0",
  },

  EventDrawer: {
    marginTop: "-85px",
    transition: "all .25s ease-in-out",
    height: tileHeight,
    padding: "0px 15px 10px 15px",
    backgroundColor: colors.blue,
    color: colors.lightText,
    "& p": {
      marginTop: "-5px"
    }
  },

  EventImage: {
    height: tileHeight,
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    cursor: "pointer",
  }
};
