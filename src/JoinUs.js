import React, { Component } from 'react';

import {withStyles} from '@material-ui/styles';
import styles from './styles/JoinUsStyles';

import { Redirect } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import Nav from './Nav';
import Footer from './Footer';

class JoinUs extends Component{
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
        let new_member = {...this.state};
        console.log(new_member);
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

    renderRedirect() {
        if (this.state.Redirect){
            return <Redirect to='/' />
        }
    }

    render(){
        const { classes } = this.props;
        const { FirstName, LastName, Major, Year, Email, Subscribe, Inquiry, Submitted} = this.state;
        return(
            <div className={classes.JoinUs}>
                {this.renderRedirect()}
                <Nav currentLocation={"JoinUs"}/>
                <div className={classes.JoinUsContent}>
                    <div className={classes.SectionTitleBlock}>
                        <h1 className={classes.SectionTitle}>Join the BCG</h1>
                    </div>
                    <div className={classes.JoinUsForm}>
                        <div className={classes.SectionSubTitle}>
                            <h1>Become a Consultant</h1>
                            <p className={classes.SectionSubTitleText}>Fill out the form below to become part of the foremost consulting organization on bentley campus.</p>
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
                                            <MenuItem value={"Finance/Accounting"}>Finance/Accounting</MenuItem>
                                            <MenuItem value={"Economics/Eco-Fi"}>Economics/Eco-Fi</MenuItem>
                                            <MenuItem value={"Data Analytics/Actuarial Science"}>Data Analytics/Actuarial Science</MenuItem>
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

export default withStyles(styles)(JoinUs);