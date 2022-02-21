import React, { Component } from "react";

import { Link } from "react-router-dom";

import classNames from "classnames";

import AppBar       from "@mui/material/AppBar";
import Toolbar      from "@mui/material/Toolbar";
import Button       from "@mui/material/Button";
import IconButton   from "@mui/material/IconButton";
import Drawer       from "@mui/material/Drawer";
import List         from "@mui/material/List";
import ListItem     from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon           from "@mui/icons-material/Menu";
import HomeIcon           from "@mui/icons-material/Home";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import FlightTakeoffIcon  from "@mui/icons-material/FlightTakeoff";
import GroupIcon          from "@mui/icons-material/Group";
import PhoneIphoneIcon    from "@mui/icons-material/PhoneIphone";

import { withStyles } from "@mui/styles";
import styles         from "../../styles/NavStyles";

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
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    this.setState({
      drawerOpen: true,
    });
  }

  closeDrawer() {
    this.setState({
      drawerOpen: false,
    });
  }

  render() {
    const { classes, currentLocation } = this.props;
    const { drawerOpen } = this.state;

    const list = () => (
      <div
        role="presentation"
        onClick={this.openDrawer}
        onKeyDown={this.openDrawer}
      >
        <List>
          <Link
            to={"/"}
            className={classes.link}
          >
            <ListItem button key={"about"}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText
                primary={"About"}
                sx={{
                  textDecoration: 'none'
                }}
              />
            </ListItem>
          </Link>
          <Link to={"/Bootcamp"} className={classes.link}>
            <ListItem button key={"bootcamp"}>
              <ListItemIcon>
                <FlightTakeoffIcon />
              </ListItemIcon>
              <ListItemText primary={"Bootcamp"} />
            </ListItem>
          </Link>
          <Link to={"/Events"} className={classes.link}>
            <ListItem button key={"events"}>
              <ListItemIcon>
                <EventAvailableIcon />
              </ListItemIcon>
              <ListItemText primary={"Events"} />
            </ListItem>
          </Link>
          <Link to={"/Team"} className={classes.link}>
            <ListItem button key={"team"}>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary={"Team"} />
            </ListItem>
          </Link>
          <Link to={"/ContactUs"} className={classes.link}>
            <ListItem button key={"contact"}>
              <ListItemIcon>
                <PhoneIphoneIcon />
              </ListItemIcon>
              <ListItemText primary={"Contact"} />
            </ListItem>
          </Link>
        </List>
      </div>
    );

    return (
      <AppBar position="fixed" className={classes.AppBar}>
        <Toolbar className={classes.ToolBar}>
          <div className={classes.NavLeft}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              aria-label="menu"
              onClick={this.openDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Link to={"/"} className={classes.link}>
              <div className={classes.miniLogo} />
            </Link>
          </div>
          <div className={classes.NavRight}>
            <Link to={"/"} className={classes.link}>
              <Button
                className={classNames(classes.button, {
                  [classes.buttonActive]: currentLocation === "Home",
                })}
                startIcon={<HomeIcon className={classes.Icon} />}
              >
                About
              </Button>
            </Link>
            <Link to={"/Events"} className={classes.link}>
              <Button
                className={classNames(classes.button, {
                  [classes.buttonActive]: currentLocation === "Events",
                })}
                startIcon={<EventAvailableIcon className={classes.Icon} />}
              >
                Events
              </Button>
            </Link>
            <Link to={"/Bootcamp"} className={classes.link}>
              <Button
                className={classNames(classes.button, {
                  [classes.buttonActive]: currentLocation === "Bootcamp",
                })}
                startIcon={<FlightTakeoffIcon className={classes.Icon} />}
              >
                Bootcamp
              </Button>
            </Link>
            <Link to={"/Team"} className={classes.link}>
              <Button
                className={classNames(classes.button, {
                  [classes.buttonActive]: currentLocation === "Team",
                })}
                startIcon={<GroupIcon className={classes.Icon} />}
              >
                Team
              </Button>
            </Link>
            <Link to={"/ContactUs"} className={classes.link}>
              <Button
                className={classNames(classes.button, {
                  [classes.buttonActive]: currentLocation === "ContactUs",
                })}
                startIcon={<PhoneIphoneIcon className={classes.Icon} />}
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </Toolbar>
        <Drawer
          anchor={"left"}
          open={drawerOpen}
          onClose={this.closeDrawer}
          className={styles.drawer}
        >
          {list("left")}
        </Drawer>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Nav);
