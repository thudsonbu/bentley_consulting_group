import react, {useState} from 'react';

import Nav from "../Partials/Nav";
import Footer from "../Partials/Footer";

import { Redirect } from 'react-router-dom';

import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";

import {withStyles} from "@material-ui/styles";
import styles from "../../styles/LoginFormStyles";

function LoginForm() {
    return (
        <div className={classes.LoginForm}>
            <Nav currentLocation={"Login"}/>
            <div className={classes.formContainer}>
                <TextField required id="standard-required" defaultValue="Hello World" />
                <TextField
                    required
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
            </div>
            <Footer/>
        </div> 
    )
}

export default withStyles(styles)(LoginForm);