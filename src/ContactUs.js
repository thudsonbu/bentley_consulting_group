import React, {Component} from "react";

import Nav from "./Nav";
import Footer from "./Footer";

import {Redirect} from 'react-router-dom';

import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import TextField from "@material-ui/core/TextField/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";

import {withStyles} from "@material-ui/styles";
import styles from "./styles/ContactUsStyles";



class ContactUs extends Component{
    constructor(props){
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
        this.renderRedirect = this.renderRedirect.bind(this);
    }

    handleChange(evt) {
        this.setState( {
            [evt.target.name]: evt.target.value
        });
    }

    handleCheck(evt) {
        this.setState( {
            [evt.target.name]: evt.target.checked
        });
    }

    handleClose(){
        this.setState({
            Submitted: false,
            Redirect: true,
        });
    }


    handleSubmit() {
        let new_contact = {...this.state};
        console.log(new_contact);
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

    renderRedirect() {
        if (this.state.Redirect){
            return <Redirect to='/' />
        }
    }

    render(){
        const { classes } = this.props;
        const { FirstName, LastName, Organization, Position, Email, Subscribe, Inquiry, Submitted} = this.state;
        return(
            <div className={ContactUs}>
                {this.renderRedirect()}
                <Nav currentLocation={"ContactUs"}/>
                <div className={classes.ContactUsContent}>
                    <div className={classes.ContactUsForm}>
                        <div className={classes.SectionSubTitle}>
                            <h1>Contact Us Form</h1>
                            <p className={classes.SectionSubTitleText}>Fill out the form below and we will get back to you as soon as possible</p>
                        </div>
                        <ValidatorForm onSubmit={this.handleSubmit} className={classes.ValidatorForm}>
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
                                        color="primary">
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
                    <DialogTitle id="alert-dialog-title">Submitted Succesfully!</DialogTitle>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Continue
                        </Button>
                    </DialogActions>
                </Dialog>
                <Footer/>
            </div>
        )
    }
}

export default withStyles(styles)(ContactUs);