import React, { Component } from 'react';
import "../styles/Front.css";

class Front extends Component {
    constructor(props) {
        super(props);
        this.goToStore = this.goToStore.bind(this);
        this.login = this.login.bind(this);
    };
    goToStore(location) {
        this.props.history.push(`/${location}`);
    };
    login() {
        this.props.history.push(`/admin`);
    }
    render() {
        return (
            <div>
                <div className="frontHeader">
                    <h1>Brainy Actz</h1>
                </div>
                <div className="locationPicker">
                    <h1>Select a Location</h1>
                    <div className="locationBtns">
                        <button onClick={(e) => this.goToStore("Irvine", e)}>Irvine</button>
                        <button onClick={(e) => this.goToStore("Temecula", e)}>Temecula</button>
                        <button onClick={(e) => this.goToStore("San Diego", e)}>San Diego</button>
                    </div>
                    <div className="loginButton">
                        <button onClick={(e) => this.login(e)}>Admin Login</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Front;