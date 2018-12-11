import React, { Component } from 'react';
import Add from './Add';
import Edit from './Edit';
import Delete from './Delete';

class Actions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "Irvine",
            action: null
        }
        this.doAction = this.doAction.bind(this);
    };
    componentDidUpdate(prevProps) {
        const { location } = this.props;
        if (location !== prevProps.location) {
            this.setState({
                location: location
            })
        }
    };
    doAction(action) {
        this.setState({
            action: action
        })
    }
    render() {
        const { location, action } = this.state;
        let selActionComp = null;
        switch(action) {
            case "add":
                selActionComp = <Add location={location} />
                break;
            case "edit":
                selActionComp = <Edit location={location} />
                break;
            case "delete":
                selActionComp = <Delete location={location} />
                break;
            default:
                console.log("Action Switch Loaded")
        }
        return (
            <div>
                <div className="locationDiv">
                    <h1>{location}</h1>
                </div>
                <div className="actionsDiv">
                    <button onClick={() => this.doAction("add")}>Add Activity</button>
                    <button onClick={() => this.doAction("edit")}>Edit Activites</button>
                    <button onClick={() => this.doAction("delete")}>Delete Activity</button>
                </div>
                <div className="selActionDiv">
                    {selActionComp}
                </div>
            </div>
        )
    }
}

export default Actions;