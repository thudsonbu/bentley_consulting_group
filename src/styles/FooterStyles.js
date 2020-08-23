import sizes from "./sizes";

export default {
    Footer: {
        width: "100%",
        height: "200px",
        backgroundColor: "#064cd5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    FooterLinks: {
        width: "70%",
        height: "50%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    },
    FooterCC: {
        width: "100%",
        height: "50%",
        display: "flex",
        alignItems: "center",
    },
    button: {
        borderColor: "transparent",
        margin: "5px",
        [sizes.down("sm")]: {
            display: "none",
        },
    },
    link: {
        textDecoration: "none",
        color: "#ffffff",
    }
}