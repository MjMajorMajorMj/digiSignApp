import React, { Component } from 'react';

class LeaderboardTeam extends Component {
    render() {
        const { team } = this.props;
        const { name, place, time } = team;
        return (
            <div className="leaderTeamDiv">
                <p>{name}</p>
                <p>{place}</p>
                <p>{time}</p>
            </div>
        )
    }
}

export default LeaderboardTeam;