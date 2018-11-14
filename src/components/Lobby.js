import React, { Component } from 'react';
import TextPanel from './lobby/TextPanel';
import '../styles/Lobby.css'

class Lobby extends Component {
    render() {
        const { location } = this.props;
        return (
            <div className="lobby">
                <TextPanel location={location}/>
            </div>
        )
    }
}

export default Lobby;