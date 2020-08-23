import sizes from './sizes';
import logo from '../images/Logo.png';
import projects from "../images/presentation.jpg"

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
    WhatWeDo: {
        marginTop: "100px",
        backgroundColor: "#064cd5",
        height: "200px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    WhatWeDoTitle: {
        color: "#ffffff",
        fontSize: "4rem",
    },
    ExperienceTitle: {
        marginTop: "50px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    Block: {
        width: "300px",
        height: "400px",
        margin: "50px",
        transition: "box-shadow .25s",
        "&:hover": {
            boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
        }
    },
    BlockImageProjects: {
        height: "250px",
        width: "300px",
        backgroundImage: `url(${projects})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    BlockContent: {
        width: "100%",
        height: "150px",
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
    }
}