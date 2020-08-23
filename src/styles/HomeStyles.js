import sizes from './sizes';
import logo from '../images/Logo.png';
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
import slack from "../images/slack.png";
import salesforce from "../images/salesforce.jpg";
import clickup from "../images/clickup.png";
import airtable from "../images/airtable.png";

export default {
    Home: {
        overflow: "scroll",
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
        }
    },
    AboutContent: {
        width: "600px",
        [sizes.down("sm")]: {
            paddingTop: "20px",
            paddingLeft: "40px",
            paddingRight: "40px",
        }
    },
    AboutTitle: {
        fontSize: "2rem",
        textAlign: "Left",
    },
    AboutText: {
    },
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
    },
    SectionSubTitle: {
        marginTop: "50px",
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
        }
    },
    BlockContainer: {
        width: "80%",
        display: "Flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        [sizes.down("xl")]: {
            width: "100%",
        }
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
        },
    },
    LogoBlockRSM: {
        margin: "50px",
        height: "150px",
        width: "150px",
        backgroundImage: `url(${RSM})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "box-shadow .25s",
        borderRadius: "50%",
        "&:hover": {
            boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
        },
    },
    LogoBlockDeloitte: {
        margin: "50px",
        height: "150px",
        width: "150px",
        backgroundImage: `url(${Deloitte})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "50%",
        transition: "box-shadow .25s",
        "&:hover": {
            boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
        },
    },
    LogoBlockMassaro: {
        margin: "50px",
        height: "150px",
        width: "300px",
        backgroundImage: `url(${Massaro})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "50%",
        transition: "box-shadow .25s",
        "&:hover": {
            boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
        },
    },
    LogoBlockPWC: {
        margin: "50px",
        height: "150px",
        width: "150px",
        backgroundImage: `url(${PWC})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "50%",
        transition: "box-shadow .25s",
        "&:hover": {
            boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
        },
    },
    LogoBlockTableau: {
        margin: "50px",
        height: "200px",
        width: "400px",
        backgroundImage: `url(${tableau})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "50%",
        transition: "box-shadow .25s",
        "&:hover": {
            boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
        },
    },
    LogoBlockSalesForce: {
        margin: "50px",
        height: "150px",
        width: "150px",
        backgroundImage: `url(${salesforce})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "50%",
        transition: "box-shadow .25s",
        "&:hover": {
            boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
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
        },
    },
    LogoBlockAirtable: {
        margin: "50px",
        height: "200px",
        width: "220px",
        backgroundImage: `url(${airtable})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "50%",
        transition: "box-shadow .25s",
        "&:hover": {
            boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
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
}