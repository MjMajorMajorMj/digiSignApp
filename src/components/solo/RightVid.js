import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class RightVid extends Component {
    constructor(props) {
        super(props);
        this.noVideo = this.noVideo.bind(this);
    };
    noVideo() {
        console.log("No Video Found");
    }
    render() {
        const { video } = this.props;
        return (
            <div className="rightVidPlayerDiv">
                <ReactPlayer url={video} playing={false} loop={true} onError={this.noVideo}/>
            </div>
        )
    }
}

export default RightVid;