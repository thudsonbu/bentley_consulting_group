import React, { Component } from 'react'

import { withStyles } from '@material-ui/core';
import styles from '../../styles/MemberStyles.js';

import { Link } from 'react-router-dom';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';

class Member extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const { headshot, name, position, github, linkedin, classes } = this.props;
        return(
            <div className={classes.Member}>
                <div className={classes.Headshot} style={{backgroundImage: `url(${headshot})`}}>
                </div>
                <div className={classes.Body}>
                    <h2 className={classes.Name}>{name}</h2>
                    <h3 className={classes.Position}>{position}</h3>
                    <div className={classes.Icons}>
                        <a href={linkedin}>
                            <LinkedInIcon className={classes.Icon}/>
                        </a>
                        <Link to="/ContactUs">
                            <EmailIcon className={classes.Icon}/>
                        </Link>
                        { github && 
                        <a href={github}>
                            <GitHubIcon className={classes.Icon}/>
                        </a>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Member); 