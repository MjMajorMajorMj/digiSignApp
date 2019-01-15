import React, { Component } from 'react';
import RightVid from './RightVid';
import RightLeader from './RightLeader';

class SoloRight extends Component {
    render() {
        const { video, leaderboard, image } = this.props;
        return (
            <div className="VidDescDiv">
                <div className="rightVid">
                    <RightVid video={video} />
                </div>
                <div className="rightLeaderDiv">
                    <RightLeader leaderboard={leaderboard} image={image} />
                </div>
            </div>
        )
    }
}

export default SoloRight;