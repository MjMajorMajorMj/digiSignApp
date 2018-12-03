import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../../styles/Lobby.css'

class ActivityDetails extends Component {
    constructor(props) {
        super(props);
        this.noVideo = this.noVideo.bind(this);
    };
    noVideo() {
        const switchActivity = this.props.switchActivity;
        setTimeout(function() {switchActivity()}, 5000);
    };
    render() {
        const { name, desc, image, video } = this.props.activity;
        const bgImg = {
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center'
        };
        return (
            <div className="activityDetailDiv">
                <div style={bgImg} className="nameDetails">
                    <h1>{name}</h1>
                    <p>{desc}</p>
                    <div className="reactPlayer">
                        <ReactPlayer url={video} playing={false} volume={0} 
                        muted={true} onEnded={this.props.switchActivity}
                        onError={this.noVideo}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ActivityDetails;