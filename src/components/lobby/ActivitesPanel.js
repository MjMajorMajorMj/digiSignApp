import React, { Component } from 'react';
import ActivitesList from './ActivitesList';
import ActivityDetails from './ActivityDetails';
import base from '../../base';
import '../../styles/Lobby.css'

class ActivitesPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activites: {}
        }
    }
    componentDidMount() {
        const { location } = this.props;
        base.syncState(`${location}/activites`, {
            context: this,
            state: "activites",
        });
    }
    render() {
        const { activites } = this.state;
        let activitesCount = Object.keys(activites).length;
        if (activitesCount === 0) {
            return (
                <div className="activitesanel">
                    <h1 className="activitesPanelTitle">No Activites</h1>
                </div>
            )
        } else {
            return (
                <div className="activitesPanel">
                    <div className="activityList">
                        <h1 className="activitesPanelTitle">Activites</h1>
                        <ActivitesList activites={activites} />
                    </div>
                    <div className="activityDetails">
                        <h1>Activity</h1>
                        <ActivityDetails />
                    </div>
                </div>
            )
        }
    }
};

export default ActivitesPanel;