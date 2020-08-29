import sizes from './sizes';
import courses from "../images/education.jpg";


export default {
    Event: {
        width: "300px",
        height: "450px",
        margin: "60px",
        transition: "box-shadow .25s",
        "&:hover": {
            cursor: "pointer",
            boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
        },
        [sizes.down("md")]: {
            margin: "50px",
            width: "350px",
            boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
        }
    },
    EventContent: {
        width: "100%",
        height: "100px",
        marginTop: "-19px",
        color: "#ffffff",
        backgroundColor: "#064cd5",
    },
    EventTitle: {
        paddingTop: "20px",
        width: "100%",
        textAlign: "center",
    },
    EventDate: {
        width: "100%",
        textAlign: "center",
    },
    EventImage: {
        height: "350px",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
}