import LogoWhite from "../images/LogoWhite.png";
import colors from "./Colors";

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
    width: "50px",
    height: "50px",
    backgroundImage: `url(${LogoWhite})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  CC: {
    color: colors.lightText,
  },

  link: {
    textDecoration: "none",
    color: colors.lightText,
    fontSize: "80px"
  },

};
