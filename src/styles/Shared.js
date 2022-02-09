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
    color: "#ffffff",
    fontSize: "48px",
    padding: "20px",
    fontWeight: "300"
  },
  SectionSubTitle: {
    paddingTop: "50px",
    fontWeight: "400",
    width: "100%",
    display: "flex",
    color: colors.white,
    backgroundColor: colors.white,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& h1": {
      fontWeight: "400"
    },
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
