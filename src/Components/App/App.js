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
import LoginForm from '../Form/LoginForm';


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
                                render= {() => (
                                    <Page>
                                        <Home/>
                                    </Page>
                                )}
                            />
                            <Route
                                exact
                                path="/Events"
                                render= {() => (
                                    <Page>
                                        <Events/>
                                    </Page>
                                )}
                            />
                            <Route
                                exact
                                path="/Team"
                                render= {() => (
                                    <Page>
                                        <Team/>
                                    </Page>
                                )}
                            />
                            <Route
                                exact
                                path="/JoinUs"
                                render= {() => (
                                    <Page>
                                        <JoinUs/>
                                    </Page>
                                )}
                            />
                            <Route
                                exact
                                path="/ContactUs"
                                render= {() => (
                                    <Page>
                                        <ContactUs/>
                                    </Page>
                                )}
                            />
                            <Route
                                exact
                                path="/"
                                render= {() => (
                                    <Page>
                                        <LoginForm/>
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
