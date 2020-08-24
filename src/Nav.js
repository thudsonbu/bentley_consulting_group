import React, { Component } from 'react';

import { withStyles } from '@material-ui/styles';
import styles from './styles/NavStyles';

import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import GroupIcon from '@material-ui/icons/Group';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';



class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false,
        };

        this.openDrawer = this.openDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
    }

    openDrawer(event) {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        this.setState({
            drawerOpen: true,
        })
    }

    closeDrawer() {
        this.setState( {
            drawerOpen: false,
        })
    }

    render(){
        const { classes, contactUs } = this.props;
        const { drawerOpen } = this.state;
        const list = () => (
            <div
                className={classes.list}
                role="presentation"
                onClick={this.openDrawer}
                onKeyDown={this.openDrawer}
            >
                <List>
                    <Link to={'/'} className={classes.link}>
                        <ListItem button key={'events'}>
                            <ListItemIcon><EventAvailableIcon/></ListItemIcon>
                            <ListItemText primary={'Events'} />
                        </ListItem>
                    </Link>
                    <Link to={'/'} className={classes.link}>
                        <ListItem button key={'team'}>
                            <ListItemIcon><GroupIcon/></ListItemIcon>
                            <ListItemText primary={'Team'} />
                        </ListItem>
                    </Link>
                    <Link to={'/JoinUs'} className={classes.link}>
                        <ListItem button key={'join'}>
                            <ListItemIcon><GroupAddIcon/></ListItemIcon>
                            <ListItemText primary={'Join'} />
                        </ListItem>
                    </Link>
                    <ListItem
                        button
                        key={'contact'}
                        onClick={contactUs}
                    >
                        <ListItemIcon><PhoneIphoneIcon/></ListItemIcon>
                        <ListItemText primary={'Contact'} />
                    </ListItem>
                </List>
            </div>
        );

        return(
            <AppBar position="fixed" className={classes.AppBar}>
                <Toolbar className={classes.ToolBar}>
                    <div className={classes.NavLeft}>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            aria-label="menu"
                            onClick={this.openDrawer}>
                            <MenuIcon/>
                        </IconButton>
                        <Link to={'/'} className={classes.link}>
                            <div className={classes.miniLogo}/>
                        </Link>
                    </div>
                    <div className={classes.NavRight}>
                        <Link to={'/'} className={classes.link}>
                            <Button
                                className={classes.button}
                                startIcon={<EventAvailableIcon className={classes.Icon}/>}
                            >
                                Events
                            </Button>
                        </Link>
                        <Link to={'/'} className={classes.link}>
                            <Button
                                className={classes.button}
                                startIcon={<GroupIcon className={classes.Icon}/>}
                            >
                                Team
                            </Button>
                        </Link>
                        <Link to={'/JoinUs'} className={classes.link}>
                            <Button
                                className={classes.button}
                                startIcon={<GroupAddIcon className={classes.Icon}/>}
                            >
                                Join Us
                            </Button>
                        </Link>
                        <Button
                            className={classes.button}
                            startIcon={<PhoneIphoneIcon className={classes.Icon}/>}
                            onClick={contactUs}
                        >
                            Contact Us
                        </Button>
                    </div>
                </Toolbar>
                <Drawer anchor={'left'} open={drawerOpen} onClose={this.closeDrawer}>
                    {list('left')}
                </Drawer>
            </AppBar>
        )
    }
}

export default withStyles(styles)(Nav);