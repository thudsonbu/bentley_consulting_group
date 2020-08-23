import React, { Component } from 'react';

import {withStyles} from '@material-ui/styles';
import styles from './styles/HomeStyles';

import Nav from './Nav';
import Jumbotron from "./Jumbotron";

class Home extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const { classes } = this.props;
        return (
            <div className={Home}>
                <Nav/>
                <Jumbotron/>
                <div className={classes.About}>
                    <div className={classes.AboutBox}>
                        <div className={classes.Logo}>
                        </div>
                        <div className={classes.AboutContent}>
                            <h1 className={classes.AboutTitle}>About</h1>
                            <hr/>
                            <p className={classes.AboutText}>Inspired by the true life story of NFL Superbowl Champion, Spencer Paysinger, All American is an inspiring, ensemble family drama about a young, high school football phenom, Spencer James and the two families whose homes he shares after transferring from Crenshaw to Beverly High - his mother and brother in South Inspired by the true life story of NFL Superbowl Champion, Spencer Paysinger, All American is an inspiring, ensemble family drama about a young, high school football phenom, Spencer James and the two families whose homes he shares after transferring from Crenshaw to Beverly High - his mother and brother in South ...</p>
                        </div>
                    </div>
                    <div className={classes.WhatWeDo}>
                        <h1 className={classes.WhatWeDoTitle}>What We Do</h1>
                    </div>
                    <div className={classes.ExperienceTitle}>
                        <h1>Real Experience, Real Skills</h1>
                        <p>Through projects, case studies, short courses, and events, consultants learn the skills employers need.</p>
                    </div>
                    <div className={classes.Block}>
                        <div className={classes.BlockImageProjects}/>
                        <div className={classes.BlockContent}>
                            <h2 className={classes.BlockTitle}>Projects</h2>
                            <p className={classes.BlockText}>The BCG regularly partners with local businesses and employers for projects.</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default withStyles(styles)(Home);