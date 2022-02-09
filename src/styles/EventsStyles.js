import sizes from "./Sizes";
import shared from "./Shared";

export default {
  ...shared,
  EventsContainer: {
    width: "100%",
    display: "Flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  ClickableBlock: {
    width: "300px",
    height: "450px",
    margin: "60px",
    transition: "box-shadow .25s",
    "&:hover": {
      cursor: "pointer",
      boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
    },
    [sizes.down("md")]: {
      margin: "50px",
      width: "350px",
      boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
    },
  }
};
