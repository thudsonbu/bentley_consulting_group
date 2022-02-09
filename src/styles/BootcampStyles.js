import colors from './Colors';
import shared from './Shared';

export default {
  ...shared,
  GoButtonContainer: {
    marginTop: "50px",
    width: "100%",
    height: "150px",
    display: "flex",
    justifyContent: "center",
    aligntItems: "center",
    marginBottom: "50px",
  },

  GoButton: {
    width: "300px",
    height: "100px",
    fontSize: "24px",
    backgroundColor: colors.blue,
    color: colors.lightText,
    padding: "20px",
    transition: "opacity .25s, background .25s",
    "&:hover": {
      background: colors.blue,
      transition: "opacity .25s, background 15s",
    }
  },
};
