import React, { Component } from 'react';
import DeleteConfirm from './DeleteConfirm';

class Delete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "",
            activites: null,
            selectedActivity: null,
            selectedActivityNum: null,
            deleteConfirm: false
        };
        this.selectActivity = this.selectActivity.bind(this);
        this.showConfirm = this.showConfirm.bind(this);
    }
    componentDidMount() {
        const { activites, location } = this.props;
        const preSelected = activites[Object.keys(activites)[0]]
        this.setState({
            location: location,
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
                activites: activites,
                deleteConfirm: false
            })
        }
    };
    showConfirm() {
        const { deleteConfirm } = this.state;
        if (!deleteConfirm) {
            this.setState({
                deleteConfirm: true
            })
        } else {
            this.setState({
                deleteConfirm: false
            })
        }
    }
    selectActivity(event) {
        const { activites } = this.state;
        const selectedActivityNum = event.target.value;
        const selectedActivity = activites[Object.keys(activites)[selectedActivityNum]];
        this.setState({
            selectedActivity: selectedActivity,
            selectedActivityNum: selectedActivityNum,
            deleteConfirm: false
        })
    }
    render() {
        const { activites, selectedActivityNum, location, deleteConfirm } = this.state;
        if (activites) {
            const activityOptions = Object.keys(activites).map((key, index) =>
                <option key={key} value={index}>{activites[key].name}</option>
            );
            let showDelConfComp = null;
            if (!deleteConfirm) { 
                showDelConfComp = <button onClick={() => this.showConfirm()}>Delete Activity</button>
            } else {
                showDelConfComp = <DeleteConfirm rebaseConfirm={this.props.rebaseConfirm} showConfirm={this.showConfirm} selectedActivityNum={selectedActivityNum} location={location} />
            }
            return (
                <div>
                    <div className="actionHeader">
                        <h1>Delete</h1>
                    </div>
                    <div className="selectActivity">
                        <h1>Select Activity</h1>
                        <select onChange={this.selectActivity}>
                            {activityOptions}
                        </select>
                        <div className="deleteConfirmDiv">
                            {showDelConfComp}
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

export default Delete;