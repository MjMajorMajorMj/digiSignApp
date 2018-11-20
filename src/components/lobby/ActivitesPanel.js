import React, { Component } from 'react';
import ActivitesList from './ActivitesList';
import '../../styles/Lobby.css'

class ActivitesPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activites: [
                "Mystery at the Lost Point Ridge",
                "The Secrets of the Master",
                "The Great Car Heist"
            ]
        }
    }
    render() {
        const { activites } = this.state;
        return (
            <div className="activitesanel">
                <h1 className="activitesPanelTitle">Activites</h1>
                <ActivitesList activites={activites} />
            </div>
        )
    }
};

export default ActivitesPanel;