import React, { Component } from 'react'

import teamseed from './TeamSeed';
import Member from './Member';
import Nav from './Nav';
import Footer from './Footer';

import { withStyles } from '@material-ui/core';
import styles from './styles/TeamStyles.js';

class Team extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const { classes } = this.props;
        const team = teamseed.map((member) => (
            <Member
                headshot={member.headshot}
                name={member.name}
                position={member.position}
                github={member.github}
                linkedin={member.linkedin}
            />
        ))
        return(
            <div className={classes.Team}>
                <Nav currentLocation={"Team"}/>
                <div className={classes.SectionTitleBlock}>
                    <h1 className={classes.SectionTitle}>Executive Board</h1>
                </div>
                <div className={classes.SectionSubTitle}>
                    <h1>Meet Our Executive Board</h1>
                    <p>The leaders of the Bentley Consulting Group are devoted to the organization and seeing our consultant thrive.</p>
                </div>
                {team}
                <Footer/>
            </div>
        )
    }
}

export default withStyles(styles)(Team);