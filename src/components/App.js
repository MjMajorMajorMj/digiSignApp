import React, { Component } from 'react';
import Lobby from './Lobby';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "San Diego"
        }
    }
    render() {
        const { location } = this.state;
        return (
            <div>
                <Lobby location={location} />
            </div>
        );
    }
}

export default App;
