import sizes from './sizes';

export default {
    Member: {
        width: "250px",
        height: "400px",
        margin: "60px 30px 90px 30px",
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
    Headshot: {
        width: "250px",
        height: "250px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        [sizes.down("md")]: {
            width: "350px",
        }
    },
    Body: {
        height: "150px",
        backgroundColor: "#064cd5",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    Name: {
        marginBottom: "-10px",
    },
    Icons: {
        height: "40px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    },
    Icon: {
        color: "#ffffff",
        fontSize: "2rem",
        margin: "0px 15px 0px 15px",
    }
}