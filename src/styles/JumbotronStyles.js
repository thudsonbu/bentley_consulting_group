import sizes from "./Sizes";
import background from "../images/bentleyLibrary.jpg";

export default {
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

  SeeAboutContainer: {
    height: "10px",
    cursor: "pointer"
  },

  SeeAbout: {
    animation: "$learnMore 700ms ease-in-out infinite alternate",
    fontWeight: "700",
  },

  '@keyframes learnMore': {
    from: {},
    to: {transform: "scale(0.95)"}
  },
};
