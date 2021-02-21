import sizes from "./sizes";
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

export default {
  Home: {
    height: "200vh",
  },
  About: {
    marginTop: "50px",
    marginBottom: "50px",
    width: "100%",
    height: "300px",
    display: "Flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
  AboutBox: {
    width: "90%",
    display: "Flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
  Logo: {
    width: "500px",
    height: "300px",
    backgroundImage: `url(${logo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginRight: "-100px",
    [sizes.down("sm")]: {
      width: "300px",
      height: "200px",
    },
  },
  AboutContent: {
    width: "600px",
    [sizes.down("sm")]: {
      paddingTop: "20px",
      paddingLeft: "40px",
      paddingRight: "40px",
    },
  },
  AboutTitle: {
    fontSize: "1.7rem",
    textAlign: "Left",
    fontWeight: "300",
    textTransform: "uppercase",
  },
  AboutText: {},
  SectionTitleBlock: {
    marginTop: "100px",
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
  Block: {
    width: "300px",
    height: "450px",
    margin: "60px",
    transition: "box-shadow .25s",
    "&:hover": {
      boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
    },
    [sizes.down("md")]: {
      margin: "50px",
      width: "350px",
      boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
    },
  },
  ClickableBlock: {
    width: "300px",
    height: "450px",
    margin: "60px",
    transition: "box-shadow .25s",
    boxShadow: "0px 0px 20px 6px rgba(194,194,194,1)",
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
  BlockContainer: {
    width: "80%",
    display: "Flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
  BlockImageProjects: {
    height: "250px",
    width: "100%",
    backgroundImage: `url(${projects})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  BlockImageCases: {
    height: "250px",
    width: "100%",
    backgroundImage: `url(${cases})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  BlockImageCourses: {
    height: "250px",
    width: "100%",
    backgroundImage: `url(${courses})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  BlockContent: {
    width: "100%",
    height: "200px",
    marginTop: "-19px",
    color: "#ffffff",
    backgroundColor: "#064cd5",
  },
  BlockTitle: {
    paddingTop: "20px",
    width: "100%",
    textAlign: "center",
  },
  BlockText: {
    padding: "0px 20px 10px 20px",
  },
  LogoBlockEY: {
    margin: "50px",
    height: "150px",
    width: "150px",
    backgroundImage: `url(${EY})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "box-shadow .25s",
    borderRadius: "50%",
    "&:hover": {
      boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
      cursor: "pointer",
    },
    [sizes.down("sm")]: {
      margin: "25px",
      height: "200px",
      width: "200px",
    },
  },
  LogoBlockRSM: {
    margin: "40px",
    height: "175px",
    width: "175px",
    backgroundImage: `url(${RSM})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "box-shadow .25s",
    borderRadius: "50%",
    "&:hover": {
      boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
      cursor: "pointer",
    },
    [sizes.down("sm")]: {
      margin: "15px",
      height: "250px",
      width: "250px",
    },
  },
  LogoBlockDeloitte: {
    margin: "40px",
    height: "150px",
    width: "150px",
    backgroundImage: `url(${Deloitte})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "50%",
    transition: "box-shadow .25s",
    "&:hover": {
      boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
      cursor: "pointer",
    },
    [sizes.down("sm")]: {
      margin: "15px",
      height: "200px",
      width: "200px",
    },
  },
  LogoBlockMassaro: {
    margin: "40px",
    height: "150px",
    width: "300px",
    backgroundImage: `url(${Massaro})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "50%",
    transition: "box-shadow .25s",
    "&:hover": {
      boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
      cursor: "pointer",
    },
    [sizes.down("sm")]: {
      margin: "25px",
    },
  },
  LogoBlockPWC: {
    margin: "40px",
    height: "150px",
    width: "150px",
    backgroundImage: `url(${PWC})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "50%",
    transition: "box-shadow .25s",
    "&:hover": {
      boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
      cursor: "pointer",
    },
    [sizes.down("sm")]: {
      margin: "15px",
      height: "200px",
      width: "200px",
    },
  },
  LogoBlockTableau: {
    margin: "40px",
    height: "175px",
    width: "400px",
    backgroundImage: `url(${tableau})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "50%",
    transition: "box-shadow .25s",
    "&:hover": {
      boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
      cursor: "pointer",
    },
    [sizes.down("sm")]: {
      margin: "25px",
      height: "150px",
      width: "400px",
    },
  },
  LogoBlockSalesForce: {
    margin: "15px",
    height: "200px",
    width: "200px",
    backgroundImage: `url(${salesforce})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "50%",
    transition: "box-shadow .25s",
    "&:hover": {
      boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
      cursor: "pointer",
    },
    [sizes.down("sm")]: {
      margin: "10px",
      marginLeft: "90px",
      height: "250px",
      width: "250px",
    },
  },
  LogoBlockClickup: {
    margin: "50px",
    height: "200px",
    width: "220px",
    backgroundImage: `url(${clickup})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "50%",
    transition: "box-shadow .25s",
    "&:hover": {
      boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
      cursor: "pointer",
    },
    [sizes.down("sm")]: {
      margin: "25px",
      marginBottom: "0px",
    },
  },
  LogoBlockAirtable: {
    margin: "25px",
    height: "200px",
    width: "250px",
    backgroundImage: `url(${airtable})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "50%",
    transition: "box-shadow .25s",
    "&:hover": {
      boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
      cursor: "pointer",
    },
    [sizes.down("sm")]: {
      margin: "25px",
      marginLeft: "50px",
    },
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
  Link: {
    textDecoration: "none",
  },
  InfoIcon: {
    fontSize: "2rem",
    color: "#ffffff",
    marginLeft: "260px",
    marginTop: "25px",
    [sizes.down("md")]: {
      marginLeft: "307px",
    },
  },
};
