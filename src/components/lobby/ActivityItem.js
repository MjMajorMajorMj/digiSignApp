import React, { Component } from 'react';
import '../../styles/Lobby.css'

class ActivityItem extends Component {
    render() {
        const { activity, currentActivity } = this.props;
        let currentActivityStyle = {};
        if (activity === currentActivity) {
            currentActivityStyle = {color: 'yellow'};
        } else {
            currentActivityStyle = {color: 'white'};
        }
        return (
            <div>
                <h1 style={currentActivityStyle}>{activity}</h1>
            </div>
        )
    }
}

export default ActivityItem;