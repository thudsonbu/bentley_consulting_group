import colors from './Colors';

export default {
  BootcampContainer: {
    paddingTop: "50px",
    marginBottom: "50px",
    width: "100%",
    height: "300px",
    display: "Flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },

  SectionTitleBlock: {
    backgroundColor: "#064cd5",
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
    fontWeight: "300",
  },

  SectionSubtitle: {
    marginTop: "10px",
    padding: "30px 40px 20px 40px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  SectionSubtitleTitle: {
    textAlign: "center",
  },

  SectionSubtitleDescription: {
    textAlign: "center",
    marginBottom: "50px",
  },

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
