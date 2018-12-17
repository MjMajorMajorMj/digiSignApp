import React, { Component } from 'react';
import base from '../../base';
import Add from './Add';
import Edit from './Edit';
import Delete from './Delete';

class Actions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "",
            action: null,
            activites: null,
            displayConfirm: ""
        }
        this.doAction = this.doAction.bind(this);
        this.getActivites = this.getActivites.bind(this);
        this.displayMessage = this.displayMessage.bind(this);
    };
    componentDidMount() {
        const { location } = this.props;
        this.getActivites(location);
    }
    componentDidUpdate(prevProps) {
        const { location } = this.props;
        if (location !== prevProps.location) {
            this.getActivites(location);
        }
    };
    getActivites(location) {
        const locationNoSpace = location.replace(/\s/g,'');
        base.fetch(`${locationNoSpace}/activites`, {
            context: this
        }).then(data => {
            this.setState({
                location: location,
                activites: data,
                action: null
            })
        });
    }
    doAction(action) {
        this.setState({
            action: action,
            displayConfirm: ""
        })
    }
    displayMessage(msg) {
        const { location } = this.state;
        this.getActivites(location);
        this.setState({
            displayConfirm: msg
        });
    }
    render() {
        const { location, action, activites, displayConfirm } = this.state;
        let selActionComp = null;
        let confirmMsg = null;
        switch(action) {
            case "add":
                selActionComp = <Add rebaseConfirm={this.displayMessage} location={location} activites={activites} />
                break;
            case "edit":
                selActionComp = <Edit rebaseConfirm={this.displayMessage} location={location} activites={activites} />
                break;
            case "delete":
                selActionComp = <Delete rebaseConfirm={this.displayMessage} location={location} activites={activites} />
                break;
            default:
                break;
        };
        switch(displayConfirm) {
            case "addSuccess":
                confirmMsg = <h1>Activity successfully added</h1>;
                break;
            case "editSuccess":
                confirmMsg = <h1>Activity successfully edited</h1>;
                break;
            case "deleteSuccess":
                confirmMsg = <h1>Activity successfully deleted</h1>;
                break;
            case "fail":
                confirmMsg = <h1>Error</h1>;
                break;
            default:
                confirmMsg = null;
                break;
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
                <div className="messageDiv">
                    {confirmMsg}
                </div>
            </div>
        )
    }
}

export default Actions;