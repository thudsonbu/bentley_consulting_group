import sizes from './sizes';

export default {
    Member: {
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
    
}