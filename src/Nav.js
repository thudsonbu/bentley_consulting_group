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
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );

        return(
            <div className={classes.Nav}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                            onClick={this.openDrawer}>
                            <MenuIcon />
                        </IconButton>
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