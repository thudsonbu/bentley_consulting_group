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
        [sizes.down("sm")]: {
            display: "none",
        }
    },
    menuButton: {
        marginRight: "auto",
        // border: "1px solid white",
        [sizes.up("sm")]: {
            display: "none",
        },
    },
    NavRight: {
        color: "black",
        marginLeft: "auto",
    },
    miniLogoRight: {
        color: "black",
        marginLeft: "20px",
        paddingLeft: "30px",
        width: "50px",
        height: "50px",
        backgroundImage: `url(${logo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        [sizes.up("sm")]: {
            display: "none",
        }
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
        color: "black",
    }
}