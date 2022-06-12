import React, { Component } from "react";
import Nav from "../Layout/Nav";
import Footer from "../Layout/Footer";
import { Redirect } from "react-router-dom";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import emailjs from "emailjs-com";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import { withStyles } from "@mui/styles";
import sizes from "../../styles/Sizes";
import shared from "../../styles/Shared";
import colors from "../../styles/Colors";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: "",
      Organization: "",
      Position: "",
      Email: "",
      Subscribe: true,
      Inquiry: "",
      Submitted: false,
      Redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    //TODO validate that it is a bentley email
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleCheck(evt) {
    this.setState({
      [evt.target.name]: evt.target.checked,
    });
  }

  handleClose() {
    this.setState({
      Submitted: false,
      Redirect: true,
    });
  }

  handleSubmit() {
    const service_id = "gmail";
    const template_id = "template_hkYYtvcK_clone";
    const user_id = "user_9gwe93oXhYXzPs26jpMqw";

    const templateParams = {
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Organization: this.state.Organization,
      Position: this.state.Position,
      Email: this.state.Email,
      Inquiry: this.state.Inquiry,
      Subscribe: this.state.Subscribe,
    };

    emailjs.send(service_id, template_id, templateParams, user_id).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );

    this.setState({
      FirstName: "",
      LastName: "",
      Organization: "",
      Position: "",
      Email: "",
      Subscribe: true,
      Inquiry: "",
      Submitted: true,
    });
  }

  render() {
    const { classes } = this.props;
    const {
      FirstName,
      LastName,
      Organization,
      Position,
      Email,
      Subscribe,
      Inquiry,
      Submitted,
    } = this.state;
    return (
      <div className={ContactUs}>
        <Nav currentLocation={"ContactUs"} />
        <div className={classes.ContactUsContent}>
          <div className={classes.SectionTitleBlock}>
            <h1 className={classes.SectionTitle}>Contact Us</h1>
          </div>
          <div className={classes.ContactUsForm}>
            <div className={classes.SectionSubTitle}>
              <h1>Contact Us Form</h1>
              <p className={classes.SectionSubTitleText}>
                Fill out the form below and we will get back to you as soon as
                possible.
              </p>
            </div>
            <ValidatorForm
              onSubmit={this.handleSubmit}
              className={classes.ValidatorForm}
            >
              <div className={classes.inputFieldContainer}>
                <div className={classes.FirstNameFieldContainer}>
                  <TextValidator
                    autoFocus
                    margin="dense"
                    id="FirstName"
                    label="First Name"
                    name={"FirstName"}
                    className={classes.FirstNameField}
                    value={FirstName}
                    onChange={this.handleChange}
                    validators={["required"]}
                    errorMessages={["First Name Required"]}
                  />
                </div>
                <div className={classes.LastNameFieldContainer}>
                  <TextValidator
                    margin="dense"
                    id="LastName"
                    label="Last Name"
                    name={"LastName"}
                    className={classes.LastNameField}
                    value={LastName}
                    onChange={this.handleChange}
                    validators={["required"]}
                    errorMessages={["Last Name Required"]}
                  />
                </div>
                <div className={classes.OrganizationContainer}>
                  <TextValidator
                    margin="dense"
                    id="Organization"
                    label="Organizaton"
                    name={"Organization"}
                    className={classes.OrganizationField}
                    value={Organization}
                    onChange={this.handleChange}
                    validators={["required"]}
                    errorMessages={["Organization Required"]}
                  />
                </div>
                <div className={classes.PositionContainer}>
                  <TextValidator
                    margin="dense"
                    id="Position"
                    label="Position"
                    name={"Position"}
                    className={classes.PositionField}
                    value={Position}
                    onChange={this.handleChange}
                  />
                </div>
                <div className={classes.EmailFieldContainer}>
                  <TextValidator
                    margin="dense"
                    id="Email"
                    label="Email"
                    name={"Email"}
                    className={classes.EmailField}
                    value={Email}
                    onChange={this.handleChange}
                    validators={["required", "isEmail"]}
                    errorMessages={["Email Required"]}
                  />
                </div>
                <div className={classes.InquiryFieldContainer}>
                  <TextField
                    id="Inquiry"
                    label="Inquiry"
                    name={"Inquiry"}
                    className={classes.InquiryField}
                    value={Inquiry}
                    onChange={this.handleChange}
                    multiline
                    rows={4}
                    variant="outlined"
                  />
                </div>
                <div className={classes.CheckBoxContainer}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={Subscribe}
                        onChange={this.handleCheck}
                        name="Subscribe"
                        color="primary"
                      />
                    }
                    label="Subscribe"
                  />
                </div>
                <div className={classes.SubmitButtonContainer}>
                  <Button
                    variant="contained"
                    className={classes.SubmitButton}
                    type="submit"
                    color="primary"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </ValidatorForm>
          </div>
        </div>
        <Dialog
          open={Submitted}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Submitted Succesfully!
          </DialogTitle>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Continue
            </Button>
          </DialogActions>
        </Dialog>
        <Footer />
      </div>
    );
  }
}

const styles = {
  ...shared,
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
    width: "100%",
    display: "flex",
    color: colors.lightText,
    backgroundColor: colors.blue,
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& h1": {
      textAlign: "center",
      color: colors.lightText,
      marginBottom: "0px",
    },
    "& p": {
      marginTop: "0px",
    },
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
    backgroundColor: colors.blue,
  },
};

export default withStyles(styles)(ContactUs);
