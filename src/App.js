import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from './Home';
import Events from './Events';
import Team from './Team';
import JoinUs from "./JoinUs";
import ContactUs from "./ContactUs";
import Page from './Page';
import './styles/Page.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


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
                                        <Home auth={auth} firestore={firestore}/>
                                    </Page>
                                )}
                            />
                            <Route
                                exact
                                path="/Events"
                                render= {(routeProps) => (
                                    <Page>
                                        <Events auth={auth} firestore={firestore}/>
                                    </Page>
                                )}
                            />
                            <Route
                                exact
                                path="/Team"
                                render= {(routeProps) => (
                                    <Page>
                                        <Team auth={auth} firestore={firestore}/>
                                    </Page>
                                )}
                            />
                            <Route
                                exact
                                path="/JoinUs"
                                render= {(routeProps) => (
                                    <Page>
                                        <JoinUs auth={auth} firestore={firestore}/>
                                    </Page>
                                )}
                            />
                            <Route
                                exact
                                path="/ContactUs"
                                render= {(routeProps) => (
                                    <Page>
                                        <ContactUs auth={auth} firestore={firestore}/>
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
