import React from "react";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Jumbotron from "./Jumbotron";

import { withStyles } from "@mui/styles";

import { Link } from "react-router-dom";

import sizes from "../../styles/Sizes";
import shared from "../../styles/Shared";
import colors from "../../styles/Colors";
import boxShadows from "../../styles/BoxShadows";

import logo from "../../images/Logo.png";
import projects from "../../images/presentation.jpg";
import cases from "../../images/charts.jpg";
import courses from "../../images/education.jpg";
import EY from "../../images/EY.jpeg";
import Massaro from "../../images/MassaroLogo.PNG";
import RSM from "../../images/RSM logo.jpg";
import PWC from "../../images/pwc.png";
import Deloitte from "../../images/DeloitteNewSmall.png";
import events from "../../images/events.jpg";
import team from "../../images/team.jpg";
import contact from "../../images/contact.jpg";
import join from "../../images/join.jpg";
import tableau from "../../images/tableau.jpg";
import salesforce from "../../images/salesforce.jpg";
import clickup from "../../images/clickup.png";
import airtable from "../../images/airtable.png";

const Home = (props) => {
  const { classes } = props;

  return (
    <div className={classes.Home}>
      <Jumbotron />
      <div className={classes.Container}>
        <div className={classes.AboutBox}>
          <div className={classes.Logo} />
          <div className={classes.AboutContent}>
            <h1>About</h1>
            <hr />
            <p>
              The Bentley Consulting Group is the foremost consulting club on
              the Bentley University campus and provides its members with a
              community that works together to help each other achieve their
              goals. The BCG was recently relaunched in 2019 and since then has
              grown to over four hundred members and has been involved with
              dozens of real world business projects in partnership with Probono
              Consulting as well as RSM. If you are interested in consulting,
              just learning about what consulting is, or are preparing for a
              career in the field, this is the organization for you.
            </p>
          </div>
        </div>
        <div className={classes.SectionTitleBlock}>
          <h1 className={classes.SectionTitle}>What We Do</h1>
        </div>
        <div className={classes.SectionSubTitle}>
          <h1>Real Experience, Real Skills</h1>
          <p>
            Through projects, case studies, short courses, and events,
            consultants learn the skills employers need.
          </p>
        </div>
        <div className={classes.Block}>
          <div className={classes.BlockImageCourses} />
          <div className={classes.BlockContent}>
            <h2 className={classes.BlockTitle}>Bootcamps</h2>
            <p className={classes.BlockText}>
              The BCG offers a consulting bootcamp designed to prepare students
              for the world of consulting.
            </p>
          </div>
        </div>
        <div className={classes.Block}>
          <div className={classes.BlockImageCases} />
          <div className={classes.BlockContent}>
            <h2 className={classes.BlockTitle}>Cases</h2>
            <p className={classes.BlockText}>
              Each semester the BCG hosts several case workshops where
              consulting cases often used in interviews are studied and
              reviewed.
            </p>
          </div>
        </div>
        <div className={classes.Block}>
          <div className={classes.BlockImageProjects} />
          <div className={classes.BlockContent}>
            <h2 className={classes.BlockTitle}>Projects</h2>
            <p className={classes.BlockText}>
              The BCG regularly partners with all kinds of business from local
              shops to multi billion dollar organizations to help solve their
              business problems.
            </p>
          </div>
        </div>
        <div className={classes.SectionTitleBlock}>
          <h1 className={classes.SectionTitle}>Our Partners</h1>
        </div>
        <div className={classes.SectionSubTitle}>
          <h1>Network With Employers</h1>
          <p>
            Employers that have worked with the BCG or regularly recruit from
            us.
          </p>
        </div>
        <a href="https://www.ey.com/en_us">
          <div className={classes.LogoBlockEY} />
        </a>
        <a href="https://rsmus.com/">
          <div className={classes.LogoBlockRSM} />
        </a>
        <a href="https://www2.deloitte.com/us/en.html">
          <div className={classes.LogoBlockDeloitte} />
        </a>
        <a href="https://www.pwc.com/">
          <div className={classes.LogoBlockPWC} />
        </a>
        <a href="https://massaroconsulting.com/">
          <div className={classes.LogoBlockMassaro} />
        </a>
        <div className={classes.SectionSubTitle}>
          <h1>Learn In Demand Technologies</h1>
          <p>Technologies that consultants can learn through the BCG.</p>
        </div>
        <a href="https://www.salesforce.com/">
          <div className={classes.LogoBlockSalesForce} />
        </a>
        <a href="https://clickup.com/">
          <div className={classes.LogoBlockClickup} />
        </a>
        <a href="https://airtable.com/">
          <div className={classes.LogoBlockAirtable} />
        </a>
        <a href="https://www.tableau.com/">
          <div className={classes.LogoBlockTableau} />
        </a>
        <div className={classes.SectionTitleBlock}>
          <h1 className={classes.SectionTitle}>Learn More</h1>
        </div>
        <div className={classes.SectionSubTitle}>
          <h1>Reach Out To or Join the BCG</h1>
          <p>
            Would you like to become a consultant? Are you a business owner or
            representative that would like to contact us?
          </p>
        </div>
        <div className={classes.BlockContainer}>
          <Link to="/JoinUs" className={classes.Link}>
            <div className={classes.Block}>
              <div className={classes.BlockImageJoin} />
              <div className={classes.BlockContent}>
                <h2 className={classes.BlockTitle}>Join</h2>
                <p className={classes.BlockText}>
                  Interested in joining the BCG or being added to our email
                  list?
                </p>
                <ArrowForwardIcon className={classes.ArrowIcon} />
              </div>
            </div>
          </Link>
          <Link to="/ContactUs" className={classes.Link}>
            <div className={classes.Block}>
              <div className={classes.BlockImageContact} />
              <div className={classes.BlockContent}>
                <h2 className={classes.BlockTitle}>Contact</h2>
                <p className={classes.BlockText}>
                  Would you like to work with the BCG or schedule an event?
                </p>
                <ArrowForwardIcon className={classes.ArrowIcon} />
              </div>
            </div>
          </Link>
        </div>
        <div className={classes.SectionSubTitle}>
          <h1>Find Events or Meet Our Team.</h1>
          <p>Take a look at our upcoming events and meet our team.</p>
        </div>
        <div className={classes.BlockContainer}>
          <Link to="/Events" className={classes.Link}>
            <div className={classes.Block}>
              <div className={classes.BlockImageEvents} />
              <div className={classes.BlockContent}>
                <h2 className={classes.BlockTitle}>Events</h2>
                <p className={classes.BlockText}>
                  See what events the BCG have planned this semester.
                </p>
                <ArrowForwardIcon className={classes.ArrowIcon} />
              </div>
            </div>
          </Link>
          <Link to="/Team" className={classes.Link}>
            <div className={classes.Block}>
              <div className={classes.BlockImageTeam} />
              <div className={classes.BlockContent}>
                <h2 className={classes.BlockTitle}>Team</h2>
                <p className={classes.BlockText}>
                  Meet our executive board and consultants or reach out
                  directly.
                </p>
                <ArrowForwardIcon className={classes.ArrowIcon} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

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
    boxShadow: boxShadows.default,
  },
};

const blockImageDefaults = {
  height: "250px",
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const styles = {
  ...shared,

  Home: {
    backgroundColor: colors.lightBackground,
    backgroundSize: "cover",
    minHeight: "96vh",
    marginBottom: "250px",
  },

  Container: {
    marginTop: "50px",
    marginBottom: "50px",
    width: "100%",
    display: "Flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    lineHeight: "1.5rem",
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
      textAlign: "Left",
    },
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
    "&:hover svg": {
      marginLeft: "265px",
      transition: "margin 0.1s ease-in-out",
    },
  },

  Link: {
    textDecoration: "none",
    [sizes.down("md")]: {
      margin: "50px",
    },
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
  },

  BlockTitle: {
    width: "100%",
    textAlign: "center",
  },

  BlockText: {
    padding: "0px 20px 10px 20px",
    textAlign: "center",
  },

  LogoBlockEY: {
    ...logoBlockDefaults,
    backgroundImage: `url(${EY})`,
  },

  LogoBlockRSM: {
    ...logoBlockDefaults,
    backgroundImage: `url(${RSM})`,
  },

  LogoBlockDeloitte: {
    ...logoBlockDefaults,
    backgroundImage: `url(${Deloitte})`,
  },

  LogoBlockMassaro: {
    ...logoBlockDefaults,
    width: "340px",
    padding: "0 20px 0 20px",
    backgroundImage: `url(${Massaro})`,
    [sizes.down("md")]: {
      height: "75px",
    },
  },

  LogoBlockPWC: {
    ...logoBlockDefaults,
    backgroundImage: `url(${PWC})`,
  },

  LogoBlockTableau: {
    ...logoBlockDefaults,
    padding: "0px 30px 0px 30px",
    width: "340px",
    backgroundImage: `url(${tableau})`,
  },

  LogoBlockSalesForce: {
    ...logoBlockDefaults,
    backgroundImage: `url(${salesforce})`,
  },

  LogoBlockClickup: {
    ...logoBlockDefaults,
    backgroundImage: `url(${clickup})`,
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

export default withStyles(styles)(Home);
