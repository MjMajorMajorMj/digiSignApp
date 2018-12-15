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
            activites: null
        }
        this.doAction = this.doAction.bind(this);
        this.getActivites = this.getActivites.bind(this);
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
                activites: data
            })
        });
    }
    doAction(action) {
        this.setState({
            action: action
        })
    }
    render() {
        const { location, action, activites } = this.state;
        let selActionComp = null;
        switch(action) {
            case "add":
                selActionComp = <Add location={location} activites={activites} />
                break;
            case "edit":
                selActionComp = <Edit location={location} activites={activites} />
                break;
            case "delete":
                selActionComp = <Delete location={location} activites={activites} />
                break;
            default:
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
            </div>
        )
    }
}

export default Actions;