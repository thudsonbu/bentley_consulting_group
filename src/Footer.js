import React from 'react';
import {Link} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import HomeIcon from "@material-ui/core/SvgIcon/SvgIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import GroupIcon from '@material-ui/icons/Group';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

import { withStyles } from '@material-ui/styles';
import styles from './styles/FooterStyles';

function Footer(props) {
    return (
        <div className={props.classes.Footer}>
            <div className={props.classes.FooterLinks}>
                <Link to={'/'} className={props.classes.link}>
                    <ListItem button key={'home'}>
                        <ListItemIcon><HomeIcon/></ListItemIcon>
                        <ListItemText primary={'Home'} />
                    </ListItem>
                </Link>
                <Link to={'/'} className={props.classes.link}>
                    <ListItem button key={'events'}>
                        <ListItemIcon><EventAvailableIcon/></ListItemIcon>
                        <ListItemText primary={'Events'} />
                    </ListItem>
                </Link>
                <Link to={'/'} className={props.classes.link}>
                    <ListItem button key={'team'}>
                        <ListItemIcon><GroupIcon/></ListItemIcon>
                        <ListItemText primary={'Team'} />
                    </ListItem>
                </Link>
                <Link to={'/'} className={props.classes.link}>
                    <ListItem button key={'join'}>
                        <ListItemIcon><GroupAddIcon/></ListItemIcon>
                        <ListItemText primary={'Join'} />
                    </ListItem>
                </Link>
                <Link to={'/'} className={props.classes.link}>
                    <ListItem button key={'contact'}>
                        <ListItemIcon><PhoneIphoneIcon/></ListItemIcon>
                        <ListItemText primary={'Contact'} />
                    </ListItem>
                </Link>
            </div>
            <div className={props.classes.FooterCC}>
                <p>Copyright Thomas Hudson 2020</p>
            </div>
        </div>
    )
}

export default withStyles(styles)(Footer);