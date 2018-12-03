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
            currentActivityNum: 0
        };
        this.switchActivity = this.switchActivity.bind(this);
    };
    componentDidMount() {
        const { location } = this.props;
        const locationNoSpace = location.replace(/\s/g,'');
        base.syncState(`${locationNoSpace}/activites`, {
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
                        <div className="activityListDiv">
                            <ActivitesList activites={activites} currentActivity={activites[Object.keys(activites)[currentActivityNum]].name}/>
                        </div>
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