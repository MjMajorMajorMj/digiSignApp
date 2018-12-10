import React, { Component } from 'react';

class Dash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "Irvine"
        }
        this.locSelect = this.locSelect.bind(this);
    }
    locSelect(event) {
        this.setState({
            location: event.target.location
        })
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <div className="loginHeader">
                    <h1>Admin Page</h1>
                </div>
                <div className="locationSelectorDiv">
                    <p>Select Location</p>
                    <select location={this.state.location} onChange={(event) => this.locSelect(event)}>
                        <option value="Irvine">Irvine</option>
                        <option value="SanDiego">San Diego</option>
                        <option value="Temecula">Temecula</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default Dash;