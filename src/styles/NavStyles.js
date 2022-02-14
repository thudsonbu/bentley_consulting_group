import sizes from "./Sizes";
import logo from "../images/Logo.png";
import colors from "./Colors";

export default {
  Nav: {
    height: "10vh",
  },

  AppBar: {
    width: "100%",
    backgroundColor: colors.lightBackground,
  },

  ToolBar: {
    background: "transparent",
    backgroundColor: colors.lightBackground,
  },

  NavLeft: {
    marginRight: "auto",
    display: "flex",
    [sizes.down("md")]: {
      width: "100%",
      justifyContent: "space-between",
    },
  },

  miniLogo: {
    color: "black",
    marginLeft: "20px",
    paddingLeft: "30px",
    width: "50px",
    height: "50px",
    backgroundImage: `url(${logo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  menuButton: {
    [sizes.up("md")]: {
      display: "none",
    },
  },

  NavRight: {
    color: "black",
    marginLeft: "auto",
    height: "50%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "right",
    alignItems: "center",
    [sizes.down("md")]: {
      display: "none",
    },
  },

  Icon: {
    color: colors.darkText,
  },

  button: {
    paddingBottom: "10px",
    marginRight: "15px",
    borderColor: "transparent",
    borderRadius: "0px",
    backgroundColor: "#ffffff",
    color: "#000000",
    [sizes.down("sm")]: {
      display: "none",
    },
  },

  buttonActive: {
    borderBottom: `2px solid ${ colors.blue }`,
  },

  link: {
    textDecoration: "none",
    color: "black",
  },
};
