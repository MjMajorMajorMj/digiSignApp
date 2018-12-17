import React, { Component } from 'react';
import LoginComponent from './admin/Login';
import Dash from './admin/Dash';
import firebase from 'firebase';
import '../styles/Admin.css';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true,
            correctCred: true,
            user: null
        }
        this.loginFunction = this.loginFunction.bind(this);
    };
    loginFunction(userObj) {
        const { user, pass } = userObj;
        firebase.auth().signInWithEmailAndPassword(user, pass).then((result) => {
            this.setState({
                isLoggedIn: true,
                correctCred: true,
                user: result.user
            });
        }).catch(() => {
            console.log("Wrong username and/or password");
            this.setState({
                correctCred: false
            })
        });
    }
    render() {
        const { isLoggedIn, correctCred } = this.state;
        if (isLoggedIn) {
            return (
                <Dash />
            )
        } else if (!isLoggedIn && !correctCred) {
            return (
                <div>
                    <LoginComponent loginFunction={this.loginFunction} />
                    <div className="wrongUser">
                        <p>Wrong username/password</p>
                    </div>
                </div>
            )
        } else {
            return (
                <LoginComponent loginFunction={this.loginFunction} />
            )
        }
    }
}

export default Admin;