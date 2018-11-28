import React, { Component } from 'react';
import ActivityItem from './ActivityItem';

class ActivitesList extends Component {
    render() {
        const { activites, currentActivity} = this.props;
        const activityNames = Object.keys(activites).map(key =>
            <ActivityItem key={key} activity={activites[key].name} currentActivity={currentActivity} />
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