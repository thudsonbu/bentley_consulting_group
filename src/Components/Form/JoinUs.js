import React, { Component } from "react";

import { Redirect } from "react-router-dom";
import { ValidatorForm } from "react-material-ui-form-validator";
import { TextValidator } from "react-material-ui-form-validator";

import emailjs from "emailjs-com";

import Nav from "../Layout/Nav";
import Footer from "../Layout/Footer";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";

import sizes from "../../styles/Sizes";
import shared from "../../styles/Shared";
import colors from "../../styles/Colors";

import { withStyles } from "@mui/styles";

class JoinUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: "",
      Major: "",
      Year: "",
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
    let service_id = "gmail";
    let template_id = "template_hkYYtvcK_clone";
    let user_id = "user_9gwe93oXhYXzPs26jpMqw";
    let templateParams = {
      FirstName: this.state.FirstName,
      Lastname: this.state.LastName,
      Major: this.state.Major,
      Year: this.state.Year,
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
      Major: "",
      Year: "",
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
      Major,
      Year,
      Email,
      Subscribe,
      Inquiry,
      Submitted,
    } = this.state;
    return (
      <div className={JoinUs}>
        <Nav currentLocation={"JoinUs"} />
        <div className={classes.JoinUsContent}>
          <div className={classes.SectionTitleBlock}>
            <h1 className={classes.SectionTitle}>Join Us</h1>
          </div>
          <div className={classes.JoinUsForm}>
            <div className={classes.FormTitle}>
              <h1>Become a Consultant</h1>
              <p>
                Fill out the form below to become part of the foremost
                consulting organization on bentley campus.
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
                <div className={classes.MajorFieldContainer}>
                  <InputLabel id="demo-simple-select-label">Major</InputLabel>
                  <Select
                    className={classes.MajorField}
                    labelId="demo-simple-select-label"
                    name="Major"
                    id="Major"
                    value={Major}
                    onChange={this.handleChange}
                  >
                    <MenuItem value={"Finance/Accounting"}>
                      Finance/Accounting
                    </MenuItem>
                    <MenuItem value={"Economics/Eco-Fi"}>
                      Economics/Eco-Fi
                    </MenuItem>
                    <MenuItem value={"Data Analytics/Actuarial Science"}>
                      Data Analytics/Actuarial Science
                    </MenuItem>
                    <MenuItem value={"CIS/ISAC/IDCC"}>CIS/ISAC/IDCC</MenuItem>
                    <MenuItem value={"Management"}>Management</MenuItem>
                    <MenuItem value={"Marketing"}>Marketing</MenuItem>
                    <MenuItem value={"Sales"}>Sales</MenuItem>
                    <MenuItem value={"Other"}>Other</MenuItem>
                  </Select>
                </div>
                <div className={classes.YearFieldContainer}>
                  <InputLabel id="demo-simple-select-label">Year</InputLabel>
                  <Select
                    className={classes.YearField}
                    labelId="demo-simple-select-label"
                    id="Year"
                    name="Year"
                    value={Year}
                    onChange={this.handleChange}
                  >
                    <MenuItem value={"Freshman"}>Freshman</MenuItem>
                    <MenuItem value={"Sophomore"}>Sophomore</MenuItem>
                    <MenuItem value={"Junior"}>Junior</MenuItem>
                    <MenuItem value={"Senior"}>Senior</MenuItem>
                  </Select>
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
            Submitted Successfully!
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

  JoinUsContent: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },

  JoinUsForm: {
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

  inputFieldContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
  },

  FormTitle: {
    width: "100%",
    display: "flex",
    color: colors.lightText,
    backgroundColor: colors.blue,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& h1": {
      padding: "0px 10px 0px 10px",
      textAlign: "center",
    },
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

  MajorFieldContainer: {
    width: "40%",
    paddingTop: "30px",
  },

  MajorField: {
    width: "100%",
  },

  YearFieldContainer: {
    width: "40%",
    paddingTop: "30px",
  },

  YearField: {
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

export default withStyles(styles)(JoinUs);
