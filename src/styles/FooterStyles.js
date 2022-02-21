import LogoWhite from "../images/LogoWhite.png";
import colors from "./Colors";
import sizes from "./Sizes";

export default {
  Footer: {
    marginTop: "150px",
    width: "100%",
    height: "250px",
    backgroundColor: colors.blue,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [sizes.down("md")]: {
      marginTop: "80px"
    }
  },

  FooterLinks: {
    paddingTop: "20px",
    width: "70%",
    height: "50%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },

  Icon: {
    color: colors.lightText,
  },

  FooterCC: {
    width: "100%",
    height: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "10px",
    paddingTop: "30xp"
  },

  button: {
    borderColor: "transparent",
    backgroundColor: "transparent",
    color: colors.lightText,
  },

  miniLogo: {
    color: "black",
    paddingLeft: "30px",
    width: "40px",
    height: "40px",
    backgroundImage: `url(${LogoWhite})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  CC: {
    color: colors.lightText,
    fontSize: "15px"
  },

  link: {
    textDecoration: "none",
    color: colors.lightText,
    fontSize: "80px",
    [sizes.down("md")]: {
      fontSize: "50px"
    }
  },

};
