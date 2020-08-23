import React, { Component } from 'react';

import { withStyles } from '@material-ui/styles';
import styles from './styles/NavStyles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
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
        const { classes } = this.props;
        const { drawerOpen } = this.state;
        const list = (anchor) => (
            <div
                className={classes.list}
                role="presentation"
                onClick={this.openDrawer}
                onKeyDown={this.openDrawer}
            >
                <List>
                    <ListItem button key={'home'}>
                        <ListItemIcon><HomeIcon/></ListItemIcon>
                        <ListItemText primary={'Home'} />
                    </ListItem>
                    <ListItem button key={'events'}>
                        <ListItemIcon><EventAvailableIcon/></ListItemIcon>
                        <ListItemText primary={'Events'} />
                    </ListItem>
                    <ListItem button key={'team'}>
                        <ListItemIcon><GroupIcon/></ListItemIcon>
                        <ListItemText primary={'Team'} />
                    </ListItem>
                    <ListItem button key={'join'}>
                        <ListItemIcon><GroupAddIcon/></ListItemIcon>
                        <ListItemText primary={'Join'} />
                    </ListItem>
                    <ListItem button key={'contact'}>
                        <ListItemIcon><PhoneIphoneIcon/></ListItemIcon>
                        <ListItemText primary={'Contact'} />
                    </ListItem>
                </List>
            </div>
        );

        return(
            <div className={classes.Nav}>
                <AppBar position="static" className={classes.AppBar}>
                    <Toolbar className={classes.ToolBar}>
                        <div className={classes.NavLeft}>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                aria-label="menu"
                                onClick={this.openDrawer}>
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="h6" className={classes.titleLeft}>
                                BCG
                            </Typography>
                        </div>
                        <div className={classes.NavRight}>
                            <Typography variant="h6" className={classes.titleRight}>
                                BCG
                            </Typography>
                            <Button
                                variant="outlined"
                                color="default"
                                className={classes.button}
                                startIcon={<HomeIcon />}
                            >
                                Home
                            </Button>
                            <Button
                                variant="outlined"
                                color="default"
                                className={classes.button}
                                startIcon={<EventAvailableIcon />}
                            >
                                Events
                            </Button>
                            <Button
                                variant="outlined"
                                color="default"
                                className={classes.button}
                                startIcon={<GroupIcon />}
                            >
                                Team
                            </Button>
                            <Button
                                variant="outlined"
                                color="default"
                                className={classes.button}
                                startIcon={<GroupAddIcon />}
                            >
                                Join
                            </Button>
                            <Button
                                variant="outlined"
                                color="default"
                                className={classes.button}
                                startIcon={<PhoneIphoneIcon />}
                            >
                                Contact
                            </Button>
                        </div>
                    </Toolbar>
                </AppBar>
                <Drawer anchor={'left'} open={drawerOpen} onClose={this.closeDrawer}>
                    {list('left')}
                </Drawer>
            </div>
        )
    }
}

export default withStyles(styles)(Nav);