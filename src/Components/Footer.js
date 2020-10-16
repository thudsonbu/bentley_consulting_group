import React from 'react';
import {Link} from "react-router-dom";
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import GroupIcon from '@material-ui/icons/Group';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';


import { withStyles } from '@material-ui/styles';
import styles from '../styles/FooterStyles';
import Button from "@material-ui/core/Button";

function Footer(props) {
    return (
        <div className={props.classes.Footer}>
            <div className={props.classes.FooterLinks}>
                <Link to={'/Events'} className={props.classes.link}>
                    <Button
                        className={props.classes.button}
                        startIcon={<EventAvailableIcon className={props.classes.Icon}/>}
                    >
                        Events
                    </Button>
                </Link>
                <Link to={'/Team'} className={props.classes.link}>
                    <Button
                        className={props.classes.button}
                        startIcon={<GroupIcon className={props.classes.Icon}/>}
                    >
                        Team
                    </Button>
                </Link>
                <Link to={'/JoinUs'} className={props.classes.link}>
                    <Button
                        className={props.classes.button}
                        startIcon={<GroupAddIcon className={props.classes.Icon}/>}
                    >
                        Join Us
                    </Button>
                </Link>
                <Link to={'/ContactUs'} className={props.classes.link}>
                    <Button
                        className={props.classes.button}
                        startIcon={<PhoneIphoneIcon className={props.classes.Icon}/>}
                    >
                        Contact Us
                    </Button>
                </Link>
            </div>
            <div className={props.classes.FooterCC}>
                <div className={props.classes.miniLogo}/>
                <div className={props.classes.CC}>
                    <p>Copyright Thomas Hudson 2020</p>
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(Footer);