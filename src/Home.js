import React, { Component } from 'react';

import {withStyles} from '@material-ui/styles';
import styles from './styles/HomeStyles';

import Nav from './Nav';
import Jumbotron from "./Jumbotron";
import Footer from './Footer';
import ContactUsForm from "./ContactUsForm";


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            contactFormOpen: true,
        };
        this.contactSubmit = this.contactSubmit.bind(this);
    }

    contactSubmit() {
        this.setState({
            contactFormOpen: true,
        })
    }

    render(){
        const { contactFormOpen } = this.state;
        const { classes } = this.props;
        return (
            <div className={Home}>
                <Nav/>
                <Jumbotron/>
                <ContactUsForm
                    open={contactFormOpen}
                    handleSubmit={this.contactSubmit}
                />
                <div className={classes.About}>
                    <div className={classes.AboutBox}>
                        <div className={classes.Logo}>
                        </div>
                        <div className={classes.AboutContent}>
                            <h1 className={classes.AboutTitle}>About</h1>
                            <hr/>
                            <p className={classes.AboutText}>The Bentley Consulting Group is the foremost consulting club on the Bentley University campus and provides its members with a community that works together to help each other achieve their goals. The BCG was recently relaunched in 2019 after a falling out of the executive board and since then has grown to over two hundred members and has been involved with dozens of real world business projects in partnership with Probono Consulting as well as RSM. If you are interested in consulting, just learning about what consulting is, or are preparing for a career in the field, this is the organization for you.</p>
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
                            <p className={classes.BlockText}>The BCG hosts several courses throughout each semester on topics from project management to data visualization with tableau.</p>
                        </div>
                    </div>
                    <div className={classes.Block}>
                        <div className={classes.BlockImageCases}/>
                        <div className={classes.BlockContent}>
                            <h2 className={classes.BlockTitle}>Cases</h2>
                            <p className={classes.BlockText}>Each semester the BCG hosts several case workshops where consulting cases often used in interviews are studied and reviewed.</p>
                        </div>
                    </div>
                    <div className={classes.Block}>
                        <div className={classes.BlockImageProjects}/>
                        <div className={classes.BlockContent}>
                            <h2 className={classes.BlockTitle}>Projects</h2>
                            <p className={classes.BlockText}>The BCG regularly partners with all kinds of business from local shops to multi billion dollar organizations to help solve their business problems.</p>
                        </div>
                    </div>
                    <div className={classes.SectionTitleBlock}>
                        <h1 className={classes.SectionTitle}>Our Partnerships</h1>
                    </div>
                    <div className={classes.SectionSubTitle}>
                        <h1>Network With Employers</h1>
                        <p>Employers that have worked with the BCG or regularly recruit from us.</p>
                    </div>
                    <div className={classes.LogoBlockEY}/>
                    <div className={classes.LogoBlockRSM}/>
                    <div className={classes.LogoBlockDeloitte}/>
                    <div className={classes.LogoBlockPWC}/>
                    <div className={classes.LogoBlockMassaro}/>
                    <div className={classes.SectionSubTitle}>
                        <h1>Learn In Demand Technologies</h1>
                        <p>Technologies that consultants can learn through the BCG.</p>
                    </div>
                    <div className={classes.LogoBlockTableau}/>
                    <div className={classes.LogoBlockSalesForce}/>
                    <div className={classes.LogoBlockSlack}/>
                    <div className={classes.LogoBlockClickup}/>
                    <div className={classes.LogoBlockAirtable}/>
                    <div className={classes.SectionTitleBlock}>
                        <h1 className={classes.SectionTitle}>Learn More</h1>
                    </div>
                    <div className={classes.SectionSubTitle}>
                        <h1>Reach out to or Join the BCG</h1>
                        <p>Would you like to become a consultant? Are you a business owner or representative that would like to contact us?</p>
                    </div>
                    <div className={classes.BlockContainer}>
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
                    </div>
                    <div className={classes.SectionSubTitle}>
                        <h1>Find events or meet our team.</h1>
                        <p>Would you like to become a consultant? Are you a business owner or representative that would like to contact us?</p>
                    </div>
                    <div className={classes.BlockContainer}>
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
                    </div>
                <Footer/>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Home);