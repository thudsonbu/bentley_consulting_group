import sizes from './sizes';

export default {
    Event: {
        width: "300px",
        height: "465px",
        margin: "60px 50px 110px 50px",
        transition: "box-shadow .25s",
        "&:hover": {
            boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
        },
        [sizes.down("md")]: {
            margin: "50px",
            marginBottom: "110px",
            width: "350px",
            boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
        }
    },
    drawerOpen: {
        height: "600px",
    },
    EventContent: {
        width: "100%",
        height: "120px",
        marginTop: "-19px",
        color: "#ffffff",
        backgroundColor: "#064cd5",
    },
    EventTitle: {
        fontSize: "1.3rem",
        paddingTop: "15px",
        width: "100%",
        textAlign: "center",
    },
    EventData: {
        cursor: "pointer",
        padding: "0px 15px 0px 15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    EventDrawer: {
        // height: "130px",
        padding: "0px 15px 10px 15px",
        backgroundColor: "#064cd5",
        color: "#ffffff",
    },
    EventImage: {
        height: "350px",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        cursor: "pointer",
    },
}