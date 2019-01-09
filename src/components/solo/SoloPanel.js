import React, { Component } from 'react';

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
        return (
            <div>
                <h1>{location} {activity.name}</h1>
            </div>
        )
    }
}

export default SoloPanel;