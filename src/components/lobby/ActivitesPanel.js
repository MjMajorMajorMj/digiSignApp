import React, { Component } from 'react';
import ActivitesList from './ActivitesList';
import ActivityDetails from './ActivityDetails';
import base from '../../base';
import '../../styles/Lobby.css'

class ActivitesPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activites: {},
            currentActivityNum: 2
        };
        this.switchActivity = this.switchActivity.bind(this);
    };
    componentDidMount() {
        const { location } = this.props;
        base.syncState(`${location}/activites`, {
            context: this,
            state: "activites",
        });
    };
    switchActivity() {
        const { activites, currentActivityNum } = this.state;
        let activitesCount = Object.keys(activites).length-1;
        let changingActivityNum = currentActivityNum;
        if (currentActivityNum === activitesCount) {
            changingActivityNum = 0;
        } else {
            changingActivityNum++;
        };
        this.setState({
            currentActivityNum: changingActivityNum
        });
    };
    render() {
        const { activites, currentActivityNum } = this.state;
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
                        <ActivitesList activites={activites}/>
                    </div>
                    <div className="activityDetails">
                        <ActivityDetails switchActivity={ this.switchActivity } activity={activites[Object.keys(activites)[currentActivityNum]]} />
                    </div>
                </div>
            )
        }
    }
};

export default ActivitesPanel;