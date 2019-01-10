import React, { Component } from 'react';
import Header from './Header';
import SoloLeft from './SoloLeft';
import SoloRight from './SoloRight';

class SoloPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "",
            activity: {}
        }
    };
    componentDidMount(){
        const {location, activity} = this.props;
        this.setState({
            location: location,
            activity: activity
        })
    }
    render() {
        const {location, activity} = this.state;
        const { name, desc, leaderboard, video, image } = activity;
        return (
            <div>
                <div className="soloPanelHeader">
                    <Header location={location} activityName={name} />
                </div>
                <div className="soloPanelLeft">
                    <SoloLeft desc={desc} />
                </div>
                <div className="soloPanelRight">
                    <SoloRight video={video} leaderboard={leaderboard} image={image} />
                </div>
            </div>
        )
    }
}

export default SoloPanel;