import React, { Component } from 'react';
import Actions from './Actions';

class Dash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "Irvine"
        }
        this.locSelect = this.locSelect.bind(this);
    }
    locSelect(event) {
        const selectedLocation = event.target.value;
        this.setState({
            location: selectedLocation
        });
    }
    render() {
        const { location } = this.state;
        return (
            <div>
                <div className="loginHeader">
                    <h1>Brainy Actz Admin Page</h1>
                </div>
                <div className="locationSelectorDiv">
                    <h1>Select Location</h1>
                    <select location={this.state.location} onChange={this.locSelect}>
                        <option value="Irvine">Irvine</option>
                        <option value="San Diego">San Diego</option>
                        <option value="Temecula">Temecula</option>
                    </select>
                </div>
                <div className="actionsCompDiv">
                    <Actions location={location}/>
                </div>
            </div>
        )
    }
}

export default Dash;