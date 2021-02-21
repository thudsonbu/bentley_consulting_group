import sizes from "./sizes";

export default {
  BootcampContainer: {
    paddingTop: "8vh",
    marginBottom: "50px",
    width: "100%",
    height: "300px",
    display: "Flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  SectionTitleBlock: {
    backgroundColor: "#064cd5",
    height: "200px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  SectionTitle: {
    color: "#ffffff",
    fontSize: "4rem",
    padding: "20px",
    fontWeight: "300",
  },
  SectionSubTitle: {
    marginTop: "30px",
    padding: "30px 40px 20px 40px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
  },
};
