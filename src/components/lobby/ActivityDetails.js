import React, { Component } from 'react';
import '../../styles/Lobby.css'

class ActivityDetails extends Component {
    render() {
        const { name, desc } = this.props.activity;
        return (
            <div>
                <h1>{name}</h1>
                <p>{desc}</p>
            </div>
        )
    }
}

export default ActivityDetails;