import sizes from "./sizes";
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
    fontSize: "5rem",
    fontWeight: "300",
    [sizes.down("md")]: {
      marginLeft: "10px",
      fontSize: "4rem",
    },
  },
  JumbotronSubtext: {
    fontSize: "2rem",
  },
};
