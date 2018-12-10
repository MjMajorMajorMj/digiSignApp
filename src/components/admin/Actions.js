import React, { Component } from 'react';

class Actions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "Irvine"
        }
    };
    componentDidUpdate(prevProps) {
        const { location } = this.props;
        if (location !== prevProps.location) {
            this.setState({
                location: location
            })
        }
    };
    render() {
        const { location } = this.state;
        return (
            <div>
                <h1>{location}</h1>
            </div>
        )
    }
}

export default Actions;