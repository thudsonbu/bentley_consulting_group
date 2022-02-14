import colors from './Colors';
export default {
  SectionTitleBlock: {
    marginTop: "50px",
    backgroundColor: colors.blue,
    height: "200px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  SectionTitle: {
    color: colors.lightText,
    fontSize: "48px",
    padding: "20px",
  },

  SectionSubTitle: {
    paddingTop: "50px",
    width: "100%",
    display: "flex",
    color: colors.darkText,
    backgroundColor: colors.lightBackground,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& p": {
      fontSize: "16px"
    }
  },

  SectionSubTitleText: {
    marginTop: "30px",
    padding: "30px 40px 20px 40px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};
