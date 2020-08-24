import React from 'react';
import {Link} from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import GroupIcon from '@material-ui/icons/Group';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import { white } from '@material-ui/core/colors';


import { withStyles } from '@material-ui/styles';
import styles from './styles/FooterStyles';
import Button from "@material-ui/core/Button";

function Footer(props) {
    return (
        <div className={props.classes.Footer}>
            <div className={props.classes.FooterLinks}>
                <Link to={'/'} className={props.classes.link}>
                    <Button
                        className={props.classes.button}
                        startIcon={<EventAvailableIcon className={props.classes.Icon}/>}
                    >
                        Events
                    </Button>
                </Link>
                <Link to={'/'} className={props.classes.link}>
                    <Button
                        className={props.classes.button}
                        startIcon={<GroupIcon className={props.classes.Icon}/>}
                    >
                        Team
                    </Button>
                </Link>
                <Link to={'/'} className={props.classes.link}>
                    <Button
                        className={props.classes.button}
                        startIcon={<GroupAddIcon className={props.classes.Icon}/>}
                    >
                        Join Us
                    </Button>
                </Link>
                <Button
                    className={props.classes.button}
                    startIcon={<PhoneIphoneIcon className={props.classes.Icon}/>}
                    onClick={props.contactUs}
                >
                    Contact Us
                </Button>
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