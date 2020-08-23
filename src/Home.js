import React, { Component } from 'react';

import {withStyles} from '@material-ui/styles';
import styles from './styles/HomeStyles';

import Nav from './Nav';
import Jumbotron from "./Jumbotron";
import Footer from './Footer';


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
                    <div className={classes.SectionTitleBlock}>
                        <h1 className={classes.SectionTitle}>What We Do</h1>
                    </div>
                    <div className={classes.SectionSubTitle}>
                        <h1>Real Experience, Real Skills</h1>
                        <p>Through projects, case studies, short courses, and events, consultants learn the skills employers need.</p>
                    </div>
                    <div className={classes.Block}>
                        <div className={classes.BlockImageCourses}/>
                        <div className={classes.BlockContent}>
                            <h2 className={classes.BlockTitle}>Courses</h2>
                            <p className={classes.BlockText}>The BCG regularly partners with local businesses and employers for projects.</p>
                        </div>
                    </div>
                    <div className={classes.Block}>
                        <div className={classes.BlockImageCases}/>
                        <div className={classes.BlockContent}>
                            <h2 className={classes.BlockTitle}>Cases</h2>
                            <p className={classes.BlockText}>The BCG regularly partners with local businesses and employers for projects.</p>
                        </div>
                    </div>
                    <div className={classes.Block}>
                        <div className={classes.BlockImageProjects}/>
                        <div className={classes.BlockContent}>
                            <h2 className={classes.BlockTitle}>Projects</h2>
                            <p className={classes.BlockText}>The BCG regularly partners with local businesses and employers for projects.</p>
                        </div>
                    </div>
                    <div className={classes.SectionTitleBlock}>
                        <h1 className={classes.SectionTitle}>Our Partnerships</h1>
                    </div>
                    <div className={classes.SectionSubTitle}>
                        <h1>Network with Employers</h1>
                        <p>Employers that have worked with the BCG or regularly recruit from us.</p>
                    </div>
                    <div className={classes.LogoBlockEY}/>
                    <div className={classes.LogoBlockRSM}/>
                    <div className={classes.LogoBlockDeloitte}/>
                    <div className={classes.LogoBlockPWC}/>
                    <div className={classes.LogoBlockMassaro}/>
                    <div className={classes.SectionTitleBlock}>
                        <h1 className={classes.SectionTitle}>Learn More</h1>
                    </div>
                    <div className={classes.SectionSubTitle}>
                        <h1>Reach out to or Join the BCG</h1>
                        <p>Would you like to become a consultant? Are you a business owner or representative that would like to contact us?</p>
                    </div>
                    <div className={classes.Block}>
                        <div className={classes.BlockImageJoin}/>
                        <div className={classes.BlockContent}>
                            <h2 className={classes.BlockTitle}>Join</h2>
                            <p className={classes.BlockText}>Interested in joining the BCG, click here.</p>
                        </div>
                    </div>
                    <div className={classes.Block}>
                        <div className={classes.BlockImageContact}/>
                        <div className={classes.BlockContent}>
                            <h2 className={classes.BlockTitle}>Contact</h2>
                            <p className={classes.BlockText}>Would you like to work with the BCG or schedule an event?</p>
                        </div>
                    </div>
                    <div className={classes.SectionSubTitle}>
                        <h1>Find events or meet our team.</h1>
                        <p>Would you like to become a consultant? Are you a business owner or representative that would like to contact us?</p>
                    </div>
                    <div className={classes.Block}>
                        <div className={classes.BlockImageEvents}/>
                        <div className={classes.BlockContent}>
                            <h2 className={classes.BlockTitle}>Events</h2>
                            <p className={classes.BlockText}>See what events we have planned.</p>
                        </div>
                    </div>
                    <div className={classes.Block}>
                        <div className={classes.BlockImageTeam}/>
                        <div className={classes.BlockContent}>
                            <h2 className={classes.BlockTitle}>Team</h2>
                            <p className={classes.BlockText}>Meet our executive board and consultants or reach out directly.</p>
                        </div>
                    </div>
                <Footer/>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Home);