import React, { Component } from 'react';
import EditForm from './EditForm';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "Irvine",
            activites: null,
            selectedActivity: null,
            selectedActivityNum: null
        };
        this.selectActivity = this.selectActivity.bind(this);
    }
    componentDidMount() {
        const { activites } = this.props;
        const preSelected = activites[Object.keys(activites)[0]]
        this.setState({
            activites: activites,
            selectedActivity: preSelected,
            selectedActivityNum: 0
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
        const { activites } = this.state;
        const selectedActivityNum = event.target.value;
        const selectedActivity = activites[Object.keys(activites)[selectedActivityNum]];
        this.setState({
            selectedActivity: selectedActivity,
            selectedActivityNum: selectedActivityNum
        })
    }
    render() {
        const { activites, selectedActivity, selectedActivityNum, location } = this.state;
        if (activites) {
            const activityOptions = Object.keys(activites).map((key, index) =>
                <option key={key} value={index}>{activites[key].name}</option>
            );
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
                        <div className="editForm">
                            <EditForm location={location} activity={selectedActivity} actNum={selectedActivityNum} />
                        </div>
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