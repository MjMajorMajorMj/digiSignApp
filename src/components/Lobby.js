import React, { Component } from 'react';
import TextPanel from './lobby/TextPanel';
import ActivitesPanel from './lobby/ActivitesPanel';
import '../styles/Lobby.css'

class Lobby extends Component {
    render() {
        const { location } = this.props;
        return (
            <div className="lobby">
                <TextPanel location={location}/>
                <ActivitesPanel location={location}/>
            </div>
        )
    }
}

export default Lobby;