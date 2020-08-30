import React, { Component } from 'react'

import withStyles from '@material-ui/core';
import styles from './styles/MemberStyles.js';

import LinkedInIcon from '@material-ui/icons/LinkedIn';

class Member extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const { headshot, name, position, email, linkedin, classes } = this.props;
        return(
            <div className={classes.Member}>
                <div className={classes.Headshot} style={{backgroundImage: `url(${headshot})`}}>
                </div>
                <div className={classes.Body}>
                    <h1 className={classes.Name}>{name}</h1>
                    <h1 className={classes.Position}>{position}</h1>
                    <div className={classes.Email}>{email}</div>
                    <div className={classes.Icons}>
                        <a href={linkedin}>
                            <LinkedInIcon className={classes.LinkedInIcon}/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Member); 