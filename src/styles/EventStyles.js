import sizes from './sizes';

export default {
    Event: {
        width: "300px",
        height: "465px",
        margin: "60px 50px 90px 50px",
        transition: "box-shadow .25s",
        "&:hover": {
            cursor: "pointer",
            boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
        },
        [sizes.down("md")]: {
            margin: "50px",
            marginBottom: "90px",
            width: "350px",
            boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
        }
    },
    drawerOpen: {
        height: "540px",
    },
    EventContent: {
        width: "100%",
        height: "115px",
        marginTop: "-19px",
        color: "#ffffff",
        backgroundColor: "#064cd5",
    },
    EventTitle: {
        paddingTop: "15px",
        width: "100%",
        textAlign: "center",
    },
    EventData: {
        padding: "0px 15px 0px 15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    EventDrawer: {
        height: "75px",
        padding: "0px 15px 10px 15px",
        backgroundColor: "#064cd5",
        color: "#ffffff",
    },
    EventImage: {
        height: "350px",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
}