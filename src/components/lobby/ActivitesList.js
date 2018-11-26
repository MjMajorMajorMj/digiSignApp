import React, { Component } from 'react';
import ActivityItem from './ActivityItem';

class ActivitesList extends Component {
    render() {
        const { activites } = this.props;
        /*for (let activity in activites) {
            const activityItem = activites[activity];
            console.log(activityItem.name);
            return(
                <div>
                    <ul>
                        <ActivityItem activity={activityItem.name} />
                    </ul>
                </div>
            )
        };*/
        const activityNames = Object.keys(activites).map(key =>
            <ActivityItem key={key} activity={activites[key].name} />
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