import React, { useState } from "react";

import { Link, useLocation } from "react-router-dom";

import classNames from "classnames";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import GroupIcon from "@mui/icons-material/Group";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

import { withStyles } from "@mui/styles";

import logo from "../../images/Logo.png";

import sizes from "../../styles/Sizes";
import colors from "../../styles/Colors";

const Nav = ({ classes }) => {
  const [drawerOpen, setDrawerOpen] = useState();
  const currentLocation = useLocation();

  const openDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const list = (
    <div
      role="presentation"
      onClick={() => openDrawer()}
      onKeyDown={() => openDrawer()}
    >
      <List>
        <Link to={"/"} className={classes.Link}>
          <ListItem button key={"about"}>
            <ListItemIcon>
              <HomeIcon
                sx={{
                  color: colors.darkText,
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary={"About"}
              sx={{
                textDecoration: "none",
                color: colors.darkText,
              }}
            />
          </ListItem>
        </Link>
        <Link to={"/Bootcamp"} className={classes.Link}>
          <ListItem button key={"bootcamp"}>
            <ListItemIcon>
              <FlightTakeoffIcon
                sx={{
                  color: colors.darkText,
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary={"Bootcamp"}
              sx={{
                textDecoration: "none",
                color: colors.darkText,
              }}
            />
          </ListItem>
        </Link>
        <Link to={"/Events"} className={classes.Link}>
          <ListItem button key={"events"}>
            <ListItemIcon>
              <EventAvailableIcon className={classes.Icon} />
            </ListItemIcon>
            <ListItemText
              primary={"Events"}
              sx={{
                textDecoration: "none",
                color: colors.darkText,
              }}
            />
          </ListItem>
        </Link>
        <Link to={"/Team"} className={classes.Link}>
          <ListItem button key={"team"}>
            <ListItemIcon>
              <GroupIcon className={classes.Icon} />
            </ListItemIcon>
            <ListItemText
              primary={"Team"}
              sx={{
                textDecoration: "none",
                color: colors.darkText,
              }}
            />
          </ListItem>
        </Link>
        <Link to={"/ContactUs"} className={classes.Link}>
          <ListItem button key={"contact"}>
            <ListItemIcon>
              <PhoneIphoneIcon className={classes.Icon} />
            </ListItemIcon>
            <ListItemText
              primary={"Contact"}
              sx={{
                textDecoration: "none",
                color: colors.darkText,
              }}
            />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.ToolBar}>
        <div className={classes.NavLeft}>
          <div className={classes.MenuBtnContainer}>
            <IconButton
              edge="start"
              aria-label="menu"
              onClick={(e) => openDrawer(e)}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <Link to={"/"} className={classes.Link}>
            <div className={classes.MiniLogo} />
          </Link>
        </div>
        <div className={classes.NavRight}>
          <Link to={"/"} className={classes.Link}>
            <Button
              className={classNames(classes.Btn, {
                [classes.BtnActive]: currentLocation === "Home",
              })}
              startIcon={<HomeIcon className={classes.Icon} />}
              sx={{ color: colors.darkText }}
            >
              About
            </Button>
          </Link>
          <Link to={"/Events"} className={classes.Link}>
            <Button
              className={classNames(classes.Btn, {
                [classes.BtnActive]: currentLocation === "Events",
              })}
              startIcon={<EventAvailableIcon className={classes.Icon} />}
              sx={{ color: colors.darkText }}
            >
              Events
            </Button>
          </Link>
          <Link to={"/Bootcamp"} className={classes.Link}>
            <Button
              className={classNames(classes.Btn, {
                [classes.BtnActive]: currentLocation === "Bootcamp",
              })}
              startIcon={<FlightTakeoffIcon className={classes.Icon} />}
              sx={{ color: colors.darkText }}
            >
              Bootcamp
            </Button>
          </Link>
          <Link to={"/Team"} className={classes.Link}>
            <Button
              className={classNames(classes.Btn, {
                [classes.BtnActive]: currentLocation === "Team",
              })}
              startIcon={<GroupIcon className={classes.Icon} />}
              sx={{ color: colors.darkText }}
            >
              Team
            </Button>
          </Link>
          <Link to={"/ContactUs"} className={classes.Link}>
            <Button
              className={classNames(classes.Btn, {
                [classes.BtnActive]: currentLocation === "ContactUs",
              })}
              sx={{ color: colors.darkText }}
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
        onClose={() => closeDrawer()}
        className={styles.Drawer}
      >
        {list}
      </Drawer>
    </AppBar>
  );
};

const styles = {
  Nav: {
    height: "10vh",
  },

  ToolBar: {
    background: "transparent",
    backgroundColor: colors.lightBackground,
  },

  NavLeft: {
    marginRight: "auto",
    display: "flex",
    [sizes.down("md")]: {
      width: "100%",
      justifyContent: "space-between",
    },
  },

  MiniLogo: {
    color: "black",
    marginLeft: "20px",
    paddingLeft: "30px",
    width: "50px",
    height: "50px",
    backgroundImage: `url(${logo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  MenuBtnContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: ".5rem",
    [sizes.up("sm")]: {
      display: "none",
    },
  },

  NavRight: {
    color: "black",
    marginLeft: "auto",
    height: "50%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "right",
    alignItems: "center",
    [sizes.down("md")]: {
      display: "none",
    },
  },

  Icon: {
    color: colors.darkText,
  },

  Btn: {
    paddingBottom: "10px",
    marginRight: "15px",
    borderColor: "transparent",
    borderRadius: "0px",
    backgroundColor: "#ffffff",
    color: colors.darkText,
    [sizes.down("sm")]: {
      display: "none",
    },
  },

  BtnActive: {
    borderBottom: `2px solid ${colors.blue}`,
  },

  Link: {
    textDecoration: "none",
    color: colors.blue,
  },
};

export default withStyles(styles)(Nav);
