import React, { Component } from 'react'

import Team from './TeamSeed';
import Member from './Member';

import withStyles from '@material-ui/core';
import styles from './styles/TeamStyles.js';

class Team extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const { classes } = this.props;
        const team = Team.map((member) => (
            <Member
                
        ))
        return(
            <div className={classes.Team}>

            </div>
        )
    }
}

export default withStyles(styles)(Team);