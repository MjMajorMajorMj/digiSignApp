import React, { Component } from 'react';

class SoloLeft extends Component {
    render() {
        const { desc } = this.props;
        return (
            <div className="LeftDescrip">
                <p>{desc}</p>
            </div>
        )
    }
}

export default SoloLeft;