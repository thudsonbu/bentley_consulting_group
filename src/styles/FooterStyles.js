import LogoWhite from "../images/LogoWhite.png";

export default {
    Footer: {
        marginTop: "30px",
        width: "100%",
        height: "250px",
        backgroundColor: "#064cd5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    FooterLinks: {
        paddingTop: "20px",
        width: "70%",
        height: "50%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
    },
    Icon: {
        color: "#ffffff",
    },
    FooterCC: {
        width: "100%",
        height: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "10px",
    },
    button: {
        borderColor: "transparent",
        backgroundColor: "transparent",
        color: "#ffffff",
    },
    miniLogo: {
        color: "black",
        paddingLeft: "30px",
        width: "50px",
        height: "50px",
        backgroundImage: `url(${LogoWhite})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    CC: {
        color: "#ffffff",
    },
    link: {
        textDecoration: "none",
        color: "#ffffff",
    }
}