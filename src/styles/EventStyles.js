import sizes from "./sizes";

export default {
  Event: {
    width: "350px",
    height: "430px",
    margin: "60px 50px 150px 50px",
    transition: "all .2s",
    "&:hover": {
      boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
    },
    [sizes.down("md")]: {
      margin: "50px",
      marginBottom: "110px",
      width: "350px",
      boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
    },
  },

  EventInfo: {
    height: "700px",
  },

  EventContent: {
    width: "100%",
    marginTop: "-40px",
    color: "#ffffff",
    backgroundColor: "#064cd5",
  },

  EventTitle: {
    fontSize: "1.3rem",
    paddingTop: "15px",
    width: "100%",
    textAlign: "center",
  },

  InfoIcon: {
    fontSize: "2rem",
    marginLeft: "85%",
    marginBottom: "2%",
  },

  EventDrawer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "250px",
    padding: "0px 15px 10px 15px",
    backgroundColor: "#064cd5",
    color: "#ffffff",
  },

  EventImage: {
    height: "350px",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    cursor: "pointer",
  },

  EventLocation: {
    marginTop: "-10px",
  },

  EventTime: {
    marginTop: "-10px",
  },

  EventDescription: {
    marginTop: "-10px",
  },
};
