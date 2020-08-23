import React, { Component } from 'react';

import Nav from './Nav';
import Jumbotron from "./Jumbotron";

class Home extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className={Home}>
                <Nav/>
                <Jumbotron/>
            </div>
        )
    }
}

export default Home;