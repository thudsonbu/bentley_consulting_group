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

function Footer(props) {
    return (
        <div className={props.classes.Footer}>
            <div className={props.classes.FooterLinks}>
                <Link to={'/'} className={props.classes.link}>
                    <ListItem button key={'home'} className={props.classes.ListItem}>
                        <ListItemIcon><HomeIcon className={props.classes.Icon}/></ListItemIcon>
                        <ListItemText primary={'Home'} />
                    </ListItem>
                </Link>
                <Link to={'/'} className={props.classes.link}>
                    <ListItem button key={'events'} className={props.classes.ListItem}>
                        <ListItemIcon><EventAvailableIcon className={props.classes.Icon}/></ListItemIcon>
                        <ListItemText primary={'Events'} />
                    </ListItem>
                </Link>
                <Link to={'/'} className={props.classes.link}>
                    <ListItem button key={'team'} className={props.classes.ListItem}>
                        <ListItemIcon><GroupIcon className={props.classes.Icon}/></ListItemIcon>
                        <ListItemText primary={'Team'} />
                    </ListItem>
                </Link>
                <Link to={'/'} className={props.classes.link}>
                    <ListItem button key={'join'} className={props.classes.ListItem}>
                        <ListItemIcon><GroupAddIcon className={props.classes.Icon}/></ListItemIcon>
                        <ListItemText primary={'Join'} />
                    </ListItem>
                </Link>
                <Link to={'/'} className={props.classes.link}>
                    <ListItem button key={'contact'} className={props.classes.ListItem}>
                        <ListItemIcon><PhoneIphoneIcon className={props.classes.Icon}/></ListItemIcon>
                        <ListItemText primary={'Contact'} />
                    </ListItem>
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