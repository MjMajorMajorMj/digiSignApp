import React, { Component } from 'react';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.userRef = React.createRef();
        this.passRef = React.createRef();
        this.loginEvent = this.loginEvent.bind(this);
    };
    loginEvent(event) {
        event.preventDefault();
        const loginObj = {
            user: this.userRef.current.value,
            pass: this.passRef.current.value
        };
        this.props.loginFunction(loginObj);
    };
    render() {
        return (
            <div>
                <div className="loginHeader">
                    <h1>Login Page</h1>
                </div>
                <div className="loginFormDiv">
                    <form onSubmit={this.loginEvent} className="loginForm">
                        <input name="name" required ref={this.userRef} type="text" placeholder="User" />
                        <input name="password" required ref={this.passRef} type="password" placeholder="Password" />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginComponent;