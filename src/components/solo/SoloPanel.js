import React, { Component } from 'react';
import Header from './Header';
import SoloLeft from './SoloLeft';
import SoloRight from './SoloRight';
import '../../styles/Solo.css';

class SoloPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "",
            activity: {}
        };
        this.goBack = this.goBack.bind(this);
    };
    componentDidMount() {
        const { location, activity } = this.props;
        this.setState({
            location: location,
            activity: activity
        })
    }
    goBack() {
        console.log("Go baaaaaaack");
    }
    render() {
        const { location, activity } = this.state;
        const { name, desc, leaderboard, video, image } = activity;
        const linkURL = "/"+location;
        return (
            <div>
                <div className="soloPanelHeader">
                    <div className="headerBackDiv">
                        <p onClick={this.goBack}>Go Back</p>
                    </div>
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