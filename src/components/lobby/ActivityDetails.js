import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../../styles/Lobby.css'

class ActivityDetails extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.activity !== prevProps.activity) {
            console.log("ActivityDetails has updated")
        }
    }
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
                        <ReactPlayer url={video} playing={false} volume={0} muted={true} onEnded={this.props.switchActivity}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ActivityDetails;