import React from "react";

import InfoIcon from "@material-ui/icons/Info";

import { withStyles } from "@material-ui/styles";
import styles from "../../styles/HomeStyles";

import Nav from "../Partials/Nav";
import Jumbotron from "./Jumbotron";
import Footer from "../Partials/Footer";

import { Link } from "react-router-dom";

const Home = ( props ) => {
  const { classes } = props;

  return (
    <div className={classes.Home}>
      <Nav currentLocation={"Home"} />
      <Jumbotron />
      <div className={classes.About}>
        <div className={classes.AboutBox}>
          <div className={classes.Logo}></div>
          <div className={classes.AboutContent}>
            <h1 className={classes.AboutTitle}>About</h1>
            <hr />
            <p className={classes.AboutText}>
              The Bentley Consulting Group is the foremost consulting club on
              the Bentley University campus and provides its members with a
              community that works together to help each other achieve their
              goals. The BCG was recently relaunched in 2019 after a falling
              out of the executive board and since then has grown to over two
              hundred members and has been involved with dozens of real world
              business projects in partnership with Probono Consulting as well
              as RSM. If you are interested in consulting, just learning about
              what consulting is, or are preparing for a career in the field,
              this is the organization for you.
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
              Beginning this semester, the BCG now offers a consulting boocamp
              designed to prepare students for the world of consulting.
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
          <h1 className={classes.SectionTitle}>Our Partnerships</h1>
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
        <a href="https://www.tableau.com/">
          <div className={classes.LogoBlockTableau} />
        </a>
        <a href="https://www.salesforce.com/">
          <div className={classes.LogoBlockSalesForce} />
        </a>
        <a href="https://slack.com/">
          <div className={classes.LogoBlockSlack} />
        </a>
        <a href="https://clickup.com/">
          <div className={classes.LogoBlockClickup} />
        </a>
        <a href="https://airtable.com/">
          <div className={classes.LogoBlockAirtable} />
        </a>
        <div className={classes.SectionTitleBlock}>
          <h1 className={classes.SectionTitle}>Learn More</h1>
        </div>
        <div className={classes.SectionSubTitle}>
          <h1>Reach out to or Join the BCG</h1>
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
                <InfoIcon className={classes.InfoIcon} />
              </div>
            </div>
          </Link>
          <Link to="/ContactUs" className={classes.Link}>
            <div className={classes.ClickableBlock}>
              <div className={classes.BlockImageContact} />
              <div className={classes.BlockContent}>
                <h2 className={classes.BlockTitle}>Contact</h2>
                <p className={classes.BlockText}>
                  Would you like to work with the BCG or schedule an event?
                </p>
                <InfoIcon className={classes.InfoIcon} />
              </div>
            </div>
          </Link>
        </div>
        <div className={classes.SectionSubTitle}>
          <h1>Find events or meet our team.</h1>
          <p>
            Would you like to become a consultant? Are you a business owner or
            representative that would like to contact us?
          </p>
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
                <InfoIcon className={classes.InfoIcon} />
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
                <InfoIcon className={classes.InfoIcon} />
              </div>
            </div>
          </Link>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default withStyles(styles)(Home);
