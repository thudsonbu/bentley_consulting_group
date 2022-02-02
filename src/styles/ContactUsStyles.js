import sizes from "./sizes";

export default {
  ContactUsContent: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  ContactUsForm: {
    margin: "100px 0px 100px 0px",
    width: "60%",
    transition: "box-shadow .25s",
    "&:hover": {
      boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
    },
    "&:focus": {
      boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
    },
    "&:active": {
      boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
    },
    [sizes.down("md")]: {
      width: "90%",
      boxShadow: "0px 0px 41px 12px rgba(194,194,194,1)",
    },
  },
  SectionTitleBlock: {
    marginTop: "50px",
    backgroundColor: "#064cd5",
    height: "200px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  SectionTitle: {
    color: "#ffffff",
    fontSize: "4rem",
    padding: "20px",
    fontWeight: "300",
  },
  SectionSubTitle: {
    width: "100%",
    display: "flex",
    color: "#ffffff",
    backgroundColor: "#064cd5",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  SectionSubTitleText: {
    padding: "0px 10px 0px 10px",
    textAlign: "center",
  },
  inputFieldContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
  },
  FirstNameFieldContainer: {
    width: "40%",
    paddingTop: "20px",
  },
  FirstNameField: {
    width: "100%",
  },
  LastNameFieldContainer: {
    width: "40%",
    paddingTop: "20px",
  },
  LastNameField: {
    width: "100%",
  },
  OrganizationContainer: {
    width: "40%",
    paddingTop: "30px",
  },
  OrganizationField: {
    width: "100%",
  },
  PositionContainer: {
    width: "40%",
    paddingTop: "30px",
  },
  PositionField: {
    width: "100%",
  },
  EmailFieldContainer: {
    width: "100%",
    paddingTop: "20px",
  },
  EmailField: {
    width: "100%",
  },
  InquiryFieldContainer: {
    width: "100%",
    padding: "40px 0px 20px 0px",
  },
  InquiryField: {
    width: "100%",
  },
  CheckBoxContainer: {
    width: "50%",
  },
  CheckBox: {
    width: "100%",
  },
  SubmitButtonContainer: {
    width: "20%",
    display: "flex",
    justifyContent: "content-end",
  },
  SubmitButton: {
    width: "100%",
    borderRadius: "0px",
    backgroundColor: "#064cd5",
  },
};
