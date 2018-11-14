import React, { Component } from 'react';
import '../../styles/Lobby.css'

class TextPanel extends Component {
    render() {
        const { location } = this.props;
        return (
            <div className="textPanel">
                <h1 className="textPanelTitle">Welcome to Brainy Actz {location}</h1>
            </div>
        )
    }
};

export default TextPanel;