import React from "react";

import Nav from "./Nav";
import Footer from "./Footer";

import colors from "../../styles/Colors";
import { withStyles } from "@mui/styles";

import { Outlet } from "react-router-dom";

const Page = ({ classes }) => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

const styles = {
  Page: {
    zIndex: "2",
    transition: "all 1s ease-in-out",
    background: colors.lightBackground,
    backgroundSize: "cover",
  },

  "@media screen and (min-width: 600px)": {
    pageEnter: {
      opacity: "0",
      position: "fixed",
    },
  },

  "@media screen and (min-width: 600px)": {
    pageEnterActive: {
      opacity: "1",
    },
  },

  "@media screen and (min-width: 600px)": {
    pageExitActive: {
      opacity: "0",
    },
  },
};

export default withStyles(styles)(Page);
