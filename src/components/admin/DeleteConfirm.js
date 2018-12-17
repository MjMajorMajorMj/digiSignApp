import React, { Component } from 'react';
import base from '../../base';

class DeleteConfirm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "",
            selectedActivityNum: null
        }
        this.deleteActivity = this.deleteActivity.bind(this);
    };
    componentDidMount() {
        const { selectedActivityNum, location } = this.props;
        this.setState({
            location: location,
            selectedActivityNum: selectedActivityNum
        });
    };
    componentDidUpdate(prevProps) {
        const { selectedActivityNum, location } = this.props;
        if (selectedActivityNum !== prevProps.selectedActivityNum) {
            this.setState({
                selectedActivityNum: selectedActivityNum,
            })
        } else if (location !== prevProps.location) {
            this.setState({
                location: location,
                selectedActivityNum: 0
            })
        }
    }
    deleteActivity() {
        const { selectedActivityNum, location } = this.props;
        const actNumAdded = parseInt(selectedActivityNum)+1;
        const locationNoSpace = location.replace(/\s/g,'');
        const activityWithNum = "activity"+actNumAdded;
        base.remove(`${locationNoSpace}/activites/${activityWithNum}`).then(()=> {
            this.props.rebaseConfirm("deleteSuccess");
        }).catch(err=> {
            this.props.rebaseConfirm("fail");
        })
    }
    render() {
        return (
            <div>
                <h1>Confirm Deletion</h1>
                <div className="confirmBtnDiv">
                    <button onClick={() => this.deleteActivity()}>Confirm</button>
                    <button onClick={this.props.showConfirm}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default DeleteConfirm;