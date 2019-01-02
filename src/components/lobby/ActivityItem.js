import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../../styles/Lobby.css'

class ActivityItem extends Component {
    render() {
        const { activity, currentActivity, activityNum, location } = this.props;
        const linkURL = "/"+location+"/"+activityNum;
        let currentActivityStyle = {};
        if (activity === currentActivity) {
            currentActivityStyle = {color: '#d8f800'};
        } else {
            currentActivityStyle = {color: 'white'};
        }
        return (
            <div>
                <Link to={linkURL}><h1 style={currentActivityStyle}>{activity}</h1></Link>
            </div>
        )
    }
}

export default ActivityItem;