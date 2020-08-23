import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import TextField from '@material-ui/core/TextField';
import { DialogContentText } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import styles from './styles/ContactUsFormStyles';

class ContactUsForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            FirstName: "",
            LastName: "",
            Email: "",
            Inquiry: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        this.setState( {
            [evt.target.name]: evt.target.value
        });
    }

    render() {
        const { open, classes } = this.props;
        const { FirstName, LastName, Email, Inquiry } = this.state;
        return(
            <Dialog
                open={open}
                onClose={this.handleClose}
                className={classes.ContactUs}
            >
                <ValidatorForm>
                    <DialogTitle id="contact-us-form-title">Contact Us Form</DialogTitle>
                    <DialogContent>
                            <DialogContentText className={classes.dialogContentText}>
                                Fill out your information and we will get back to you as soon as possible.
                            </DialogContentText>
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
                            </div>
                    </DialogContent>
                </ValidatorForm>
            </Dialog>
        )
    }
}

export default withStyles(styles)(ContactUsForm);