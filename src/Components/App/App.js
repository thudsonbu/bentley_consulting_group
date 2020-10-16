import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from '../Home/Home';
import Events from '../Event/Events';
import Team from '../Team/Team';
import JoinUs from "../Form/JoinUs";
import ContactUs from "../Form/ContactUs";
import Page from './Page';
import '../../styles/Page.css';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            page: "home",
        }
    }
    render() {
        return (
            <Route
                className='background'
                render = {({location}) => (
                <TransitionGroup style={{height: "100%"}}>
                    <CSSTransition key={location.key} classNames='page' timeout={1000}>
                        <Switch location={location}>
                            <Route
                                exact
                                path="/"
                                render= {(routeProps) => (
                                    <Page>
                                        <Home/>
                                    </Page>
                                )}
                            />
                            <Route
                                exact
                                path="/Events"
                                render= {(routeProps) => (
                                    <Page>
                                        <Events/>
                                    </Page>
                                )}
                            />
                            <Route
                                exact
                                path="/Team"
                                render= {(routeProps) => (
                                    <Page>
                                        <Team/>
                                    </Page>
                                )}
                            />
                            <Route
                                exact
                                path="/JoinUs"
                                render= {(routeProps) => (
                                    <Page>
                                        <JoinUs/>
                                    </Page>
                                )}
                            />
                            <Route
                                exact
                                path="/ContactUs"
                                render= {(routeProps) => (
                                    <Page>
                                        <ContactUs/>
                                    </Page>
                                )}
                            />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                )}
            />
        )
    }
}

export default App;
