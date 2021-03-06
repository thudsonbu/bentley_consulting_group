import sizes from "./sizes";

export default {
  TileContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "space-between",
    width: "60%",
    paddingLeft: "20%",
    paddingTop: "50px",
    [sizes.down("md")]: {
      paddingTop: "100px",
      width: "80%",
      paddingLeft: "10%",
    },
  },

  BootcampTile: {
    margin: "30px",
    width: "200px",
    height: "200px",
    backgroundColor: "#064cd5",
    color: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
    "&:hover": {
      boxShadow: "0px 0px 20px 12px rgba(170,170,170,1)",
    },
    "&:hover $Icon": {
      display: "none",
    },
    "&:hover $Title": {
      marginTop: "40px",
    },
    "&:hover $Description": {
      display: "block",
    },
  },

  Icon: {
    fontSize: "1rem",
    width: "100%",
    height: "100px",
    paddingTop: "25px",
  },

  Title: {
    fontSize: "1.3rem",
    textAlign: "center",
    paddingBottom: "25px",
    padding: "5px",
    marginTop: "-3px",
  },

  Description: {
    display: "none",
    textAlign: "center",
    marginTop: "-30px",
    padding: "5px",
  },
};
