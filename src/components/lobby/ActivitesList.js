import React, { Component } from 'react';
import ActivityItem from './ActivityItem';

class ActivitesList extends Component {
    render() {
        const activity = this.props.activites.map((item, index) => {
            return (
                <ActivityItem key={index} activity={item} />
            )
        });
        return(
            <div>
                <ul>
                    {activity}
                </ul>
            </div>
        )
    }
}

export default ActivitesList;