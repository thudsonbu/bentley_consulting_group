import sizes from "./Sizes";
import shared from "./Shared";
import boxShadows from "./BoxShadows";

import logo from "../images/Logo.png";
import projects from "../images/presentation.jpg";
import cases from "../images/charts.jpg";
import courses from "../images/education.jpg";
import EY from "../images/EY.jpeg";
import Massaro from "../images/MassaroLogo.PNG";
import RSM from "../images/RSM logo.jpg";
import PWC from "../images/pwc.png";
import Deloitte from "../images/DeloitteNewSmall.png";
import events from "../images/events.jpg";
import team from "../images/team.jpg";
import contact from "../images/contact.jpg";
import join from "../images/join.jpg";
import tableau from "../images/tableau.jpg";
import salesforce from "../images/salesforce.jpg";
import clickup from "../images/clickup.png";
import airtable from "../images/airtable.png";

const logoBlockDefaults = {
  height: "175px",
  width: "220px",
  margin: "50px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "box-shadow .25s",
  borderRadius: "10px",
  "&:hover": {
    cursor: "pointer",
    boxShadow: boxShadows.default
  }
};

const blockImageDefaults = {
  height: "250px",
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
}

export default {
  ...shared,

  About: {
    marginTop: "50px",
    marginBottom: "50px",
    width: "100%",
    height: "300px",
    display: "Flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    lineHeight: "1.5rem"
  },

  AboutBox: {
    width: "90%",
    display: "Flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },

  Logo: {
    width: "420px",
    height: "250px",
    backgroundImage: `url(${logo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginRight: "-80px",
    [sizes.down("sm")]: {
      width: "300px",
      height: "200px",
    },
  },

  AboutContent: {
    width: "65%",
    maxWidth: "800px",
    [sizes.down("sm")]: {
      paddingTop: "20px",
      paddingLeft: "60px",
      paddingRight: "40px",
    },
    "& h1": {
      fontSize: "28px",
      textAlign: "Left"
    }
  },

  Block: {
    width: "300px",
    margin: "60px",
    transition: "box-shadow .15s",
    "&:hover": {
      boxShadow: boxShadows.default,
    },
    [sizes.down("md")]: {
      width: "320px",
      boxShadow: boxShadows.default,
    },
  },

  Link: {
    textDecoration: "none",
    [sizes.down("md")]: {
      margin: "50px"
    }
  },

   ArrowIcon: {
    fontSize: "25px",
    color: "#ffffff",
    marginLeft: "260px",
    marginTop: "25px",
    [sizes.down("md")]: {
      marginLeft: "270px",
    },
    transition: "margin 0.1s ease-in-out",
  },

  BlockContainer: {
    width: "80%",
    display: "Flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },

  BlockImageProjects: {
    ...blockImageDefaults,
    backgroundImage: `url(${projects})`,
  },

  BlockImageCases: {
    ...blockImageDefaults,
    backgroundImage: `url(${cases})`,
  },

  BlockImageCourses: {
    ...blockImageDefaults,
    backgroundImage: `url(${courses})`,
  },

  BlockContent: {
    height: "200px",
    padding: "10px 0 10px 0",
    width: "100%",
    color: "#ffffff",
    backgroundColor: "#064cd5",
    "&:hover svg": {
      marginLeft: "265px",
      transition: "margin 0.1s ease-in-out",
    },
  },

  BlockTitle: {
    width: "100%",
    textAlign: "center",
  },

  BlockText: {
    padding: "0px 20px 10px 20px",
    textAlign: "center"
  },

  LogoBlockEY: {
    ...logoBlockDefaults,
    backgroundImage: `url(${EY})`,
  },

  LogoBlockRSM: {
    ...logoBlockDefaults,
    backgroundImage: `url(${RSM})`
  },

  LogoBlockDeloitte: {
    ...logoBlockDefaults,
    backgroundImage: `url(${Deloitte})`
  },

  LogoBlockMassaro: {
    ...logoBlockDefaults,
    width: "340px",
    padding: "0 20px 0 20px",
    backgroundImage: `url(${Massaro})`,
    [sizes.down("md")]: {
      height: "75px",
    }
  },

  LogoBlockPWC: {
    ...logoBlockDefaults,
    backgroundImage: `url(${PWC})`
  },

  LogoBlockTableau: {
    ...logoBlockDefaults,
    padding: "0px 30px 0px 30px",
    width: "340px",
    backgroundImage: `url(${tableau})`
  },

  LogoBlockSalesForce: {
    ...logoBlockDefaults,
    backgroundImage: `url(${salesforce})`
  },

  LogoBlockClickup: {
    ...logoBlockDefaults,
    backgroundImage: `url(${clickup})`
  },

  LogoBlockAirtable: {
    ...logoBlockDefaults,
    paddingLeft: "60px",
    backgroundImage: `url(${airtable})`,
  },

  BlockImageJoin: {
    height: "250px",
    width: "100%",
    backgroundImage: `url(${join})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  BlockImageContact: {
    height: "250px",
    width: "100%",
    backgroundImage: `url(${contact})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  BlockImageEvents: {
    height: "250px",
    width: "100%",
    backgroundImage: `url(${events})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  BlockImageTeam: {
    height: "250px",
    width: "100%",
    backgroundImage: `url(${team})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },



};
