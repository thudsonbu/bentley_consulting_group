import sizes from './sizes';
import logo from '../images/Logo.png';

export default {
    Nav: {
        height: "10vh",
    },
    AppBar: {
        width: "100%",
        backgroundColor: "white",
    },
    ToolBar: {
        background: "transparent",
        backgroundColor: "white",
    },
    NavLeft: {
        marginRight: "auto",
        display: "flex",
        [sizes.down("md")]: {
            width: "100%",
        }
    },
    miniLogo: {
        color: "black",
        marginLeft: "20px",
        paddingLeft: "30px",
        width: "50px",
        height: "50px",
        backgroundImage: `url(${logo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        [sizes.down("lg")]: {
            marginLeft: "auto",
        }
    },
    menuButton: {
        marginRight: "auto",
        // border: "1px solid white",
        [sizes.up("md")]: {
            display: "none",
        },
    },
    NavRight: {
        color: "black",
        marginLeft: "auto",
        width: "52%",
        height: "50%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        [sizes.down("md")]: {
            display: "none"
        }
    },
    Icon: {
        color: "#000000",
    },
    button: {
        paddingBottom: "10px",
        borderColor: "transparent",
        borderRadius: "0px",
        backgroundColor: "#ffffff",
        color: "#000000",
        [sizes.down("sm")]: {
            display: "none",
        },
    },
    buttonActive: {
        borderBottom: "2px solid #064cd5",
    },
    link: {
        textDecoration: "none",
        color: "black",
    }
}