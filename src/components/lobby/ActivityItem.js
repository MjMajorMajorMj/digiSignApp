import React, { Component } from 'react';

class ActivityItem extends Component {
    render() {
        const { activity } = this.props
        return (
            <div>
                <h1>{activity}</h1>
            </div>
        )
    }
}

export default ActivityItem;