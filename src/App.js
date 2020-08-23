import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Page from './Page';
import Home from './Home';
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
                    <CSSTransition key={location.key} classNames='page' timeout={750}>
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
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                )}
            />
        )
    }
}

export default App;
