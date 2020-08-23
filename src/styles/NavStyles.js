import sizes from './sizes';

export default {
    Nav: {

    },
    AppBar: {
        width: "100%",
        background: "#394bad",
    },
    ToolBar: {
        background: "transparent",
    },
    NavLeft: {
        marginRight: "auto",
    },
    titleLeft: {
        [sizes.down("sm")]: {
            display: "none",
        }
    },
    menuButton: {
        color: "white",
        marginRight: "auto",
        // border: "1px solid white",
        [sizes.up("sm")]: {
            display: "none",
        },
    },
    NavRight: {
        marginLeft: "auto",
    },
    titleRight: {
        [sizes.up("sm")]: {
            display: "none",
        }
    },
    button: {
        color: "white",
        borderColor: "transparent",
        margin: "5px",
        [sizes.down("sm")]: {
            display: "none",
        },
    },
}