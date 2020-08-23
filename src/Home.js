import React, { Component } from 'react';

import Nav from './Nav';

class Home extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className={Home}>
                <Nav/>
            </div>
        )
    }
}

export default Home;