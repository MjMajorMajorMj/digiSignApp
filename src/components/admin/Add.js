import React, { Component } from 'react';
import base from '../../base';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "Irvine"
        }
    }
    componentDidUpdate(prevProps) {
        const { location } = this.props;
        if (location !== prevProps.location) {
            this.setState({
                location: location
            })
        }
    };
    render() {
        return (
            <div>
                <h1>Add</h1>
            </div>
        )
    }
}

export default Add;