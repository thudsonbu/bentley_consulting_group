import sizes from './sizes';
import background from '../images/bentleyLibrary.jpg';

export default {
    Jumbotron: {
        height: "100vh",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "-10vh",
    },
    JumbotronTitle: {
        fontSize: "5rem",
        [sizes.down("sm")]:{
            marginLeft: "20px",
        }
    },
    JumbotronSubtext: {
        fontSize: "2rem",
    }
}