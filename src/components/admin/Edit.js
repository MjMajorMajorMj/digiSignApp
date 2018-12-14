import React, { Component } from 'react';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "Irvine",
            activites: null,
            selectedActivity: null
        };
        this.selectActivity = this.selectActivity.bind(this);
    }
    componentDidMount() {
        console.log("Component Mounted");
        const { activites } = this.props;
        this.setState({
            activites: activites
        });
    };
    componentDidUpdate(prevProps) {
        const { location, activites } = this.props;
        if (location !== prevProps.location) {
            this.setState({
                location: location,
                activites: activites
            })
        }
    };
    selectActivity(event) {
        const selectedActivity = event.target.value;
        this.setState({
            selectedActivity: selectedActivity
        })
    }
    render() {
        const { activites } = this.state;
        if (activites) {
            const activityOptions = Object.keys(activites).map(key =>
                <option key={key} value={activites[key]}>{activites[key].name}</option>
            )
            return (
                <div>
                    <div className="actionHeader">
                        <h1>Edit</h1>
                    </div>
                    <div className="selectActivity">
                        <h1>Select Activity</h1>
                        <select onChange={this.selectActivity}>
                            {activityOptions}
                        </select>
                    </div>
                </div>
            )
        } else {
            return (
                null
            )
        }
        
    }
}

export default Edit;