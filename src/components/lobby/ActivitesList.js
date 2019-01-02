import React, { Component } from 'react';
import ActivityItem from './ActivityItem';
import '../../styles/Lobby.css'

class ActivitesList extends Component {
    render() {
        const { activites, currentActivity} = this.props;
        const { location } = this.props;
        const activityNames = Object.keys(activites).map(key =>
            <ActivityItem location={location} key={key} activityNum={key} activity={activites[key].name} currentActivity={currentActivity} />
        )
        return(
            <div>
                <ul>
                    {activityNames}
                </ul>
            </div>
        )
    }
}

export default ActivitesList;