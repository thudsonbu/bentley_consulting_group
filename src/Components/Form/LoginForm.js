import React, { useState } from 'react';

import Nav from "../Partials/Nav";
import Footer from "../Partials/Footer";

import { Redirect } from 'react-router-dom';

import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";

import {withStyles} from "@material-ui/styles";
import styles from "../../styles/LoginFormStyles";

function LoginForm(props) {
    const { classes } = props;
    return (
        <div className={classes.LoginForm}>
            <Nav currentLocation={"Login"}/>
            <div className={classes.formContainer}>
                <ValidatorForm onSubmit={this.handleSubmit} className={classes.ValidatorForm}>
                    <div className={classes.EmailFieldContainer}>
                        <TextValidator
                            autoFocus
                            margin="dense"
                            id="Email"
                            label="Email"
                            name={"Email"}
                            className={classes.EmailField}
                            // value={Email}
                            onChange={this.handleChange}
                            validators={["required, isEmail"]}
                            errorMessages={["Email Required for Login", "Invalid Email"]}
                        />
                    </div>
                    <div className={classes.PasswordFieldContainer}>
                        <TextValidator
                            margin="dense"
                            id="Password"
                            label="Password"
                            name={"Password"}
                            className={classes.PasswordField}
                            // value={Password}
                            onChange={this.handleChange}
                            validators={["required"]}
                            errorMessages={["Password Required for Login"]}
                        />
                    </div>
                </ValidatorForm>
            </div>
            <Footer/>
        </div> 
    )
}

export default withStyles(styles)(LoginForm);