import sizes from "./Sizes";
import colors from "./Colors";

export default {
  Member: {
    width: "300px",
    height: "500px",
    margin: "60px 30px 90px 30px",
    transition: "box-shadow .25s",
    borderRadius: "10px",
    [sizes.down("md")]: {
      margin: "50px",
      marginBottom: "90px",
      width: "350px",
      boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
    },
  },

  Headshot: {
    width: "300px",
    height: "350px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    [sizes.down("md")]: {
      width: "350px",
    },
    "& div": {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      opacity: "0%",
      transition: "opacity 0.2s ease-in-out",
    },
    "&:hover div": {
      backgroundColor: colors.blue,
      opacity: "70%",
    },
    "& p": {
      color: "white",
    }
  },

  Body: {
    height: "170px",
    backgroundColor: colors.blue,
    color: colors.lightBackground,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  Name: {
    marginBottom: "-5px",
  },

  Position: {
    fontSize: "16px",
    textAlign: "center",
  },

  Icons: {
    height: "40px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },

  Icon: {
    color: colors.lightText,
    fontSize: "2rem",
    margin: "0px 15px 0px 15px",
    paddingBottom: "10px",
  },
};
