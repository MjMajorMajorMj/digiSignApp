import React, { Component } from 'react';
import Lobby from './Lobby';

class App extends Component {
    render() {
        const { location } = this.props.match.params;
        return (
            <div>
                <Lobby location={location} />
            </div>
        );
    }
}

export default App;
