import React, { Component } from 'react';

class Header extends Component {
    render() {
        const {location, activityName } = this.props;
        return (
            <div className="soloHeaderDiv">
                <h1>{activityName} - <span className="locSpan">{location}</span></h1>
            </div>
        )
    }
}

export default Header;