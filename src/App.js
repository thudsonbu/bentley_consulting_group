import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";


import Home from './Home';
import JoinUs from "./JoinUs";
import ContactUs from "./ContactUs";
import Page from './Page';
import './styles/Page.css';




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
                                    <Page className="page">
                                        <Home/>
                                    </Page>
                                )}
                            />
                            <Route
                                exact
                                path="/JoinUs"
                                render= {(routeProps) => (
                                    <Page className="page">
                                        <JoinUs/>
                                    </Page>
                                )}
                            />
                            <Route
                                exact
                                path="/ContactUs"
                                render= {(routeProps) => (
                                    <Page className="page">
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
