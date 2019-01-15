import React, { Component } from 'react';
import LeaderboardTeam from './LeaderboardTeam';

class RightLeader extends Component {
    render() {
        const { leaderboard, image } = this.props;
        let leaderboardTeams = null;
        if (!leaderboard) {
            leaderboardTeams = <h1>No Teams Found</h1>
        } else {
            leaderboardTeams = Object.keys(leaderboard).map(key =>
                <LeaderboardTeam key={key} team={leaderboard[key]} />
            )
        }
        return (
            <div>
                {leaderboardTeams}
            </div>
        )
    }
}

export default RightLeader;