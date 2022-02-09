import React from "react";

import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "../Home/Home";
import Events from "../Event/Events";
import Bootcamp from "../Bootcamp/Bootcamp";
import Team from "../Team/Team";
import JoinUs from "../Form/JoinUs";
import ContactUs from "../Form/ContactUs";
import Page from "./Page";
import "../../styles/Page.css";

const App = (props) => {
  return (
    <Route
      className="background"
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="page" timeout={1000}>
            <Switch location={location}>
              <Route
                exact
                path="/"
                render={() => (
                  <Page>
                    <Home />
                  </Page>
                )}
              />
              <Route
                exact
                path="/Bootcamp"
                render={() => (
                  <Page>
                    <Bootcamp />
                  </Page>
                )}
              />
              <Route
                exact
                path="/Events"
                render={() => (
                  <Page>
                    <Events />
                  </Page>
                )}
              />
              <Route
                exact
                path="/Team"
                render={() => (
                  <Page>
                    <Team />
                  </Page>
                )}
              />
              <Route
                exact
                path="/JoinUs"
                render={() => (
                  <Page>
                    <JoinUs />
                  </Page>
                )}
              />
              <Route
                exact
                path="/ContactUs"
                render={() => (
                  <Page>
                    <ContactUs />
                  </Page>
                )}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
};

export default App;
